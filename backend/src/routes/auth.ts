
import { Router } from "express";
import bcrypt from "bcrypt";
import prisma from "../config/prisma.js";

const router = Router();

// Registracija novega uporabnika
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Vsa polja so obvezna.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return res.status(400).json({
        message: "Vnesi veljaven e-poštni naslov.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Geslo mora vsebovati vsaj 8 znakov.",
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Uporabnik s tem e-poštnim naslovom že obstaja.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: normalizedEmail,
        passwordHash,
        role: "CUSTOMER",
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
      },
    });

    return res.status(201).json({
      message: "Registracija je bila uspešna.",
      user,
    });
  } catch (error) {
    console.error("Napaka pri registraciji:", error);

    return res.status(500).json({
      message: "Pri registraciji je prišlo do napake.",
    });
  }
});

// Prijava obstoječega uporabnika
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Vnesi e-poštni naslov in geslo.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      return res.status(401).json({
        message: "Napačen e-poštni naslov ali geslo.",
      });
    }

    const passwordIsValid = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!passwordIsValid) {
      return res.status(401).json({
        message: "Napačen e-poštni naslov ali geslo.",
      });
    }

    // Ustvarjanje nove prijavne seje
    await new Promise<void>((resolve, reject) => {
      req.session.regenerate((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });

    // Shranimo ID uporabnika v sejo
    req.session.userId = user.id;

    // Shranimo sejo v PostgreSQL
    await new Promise<void>((resolve, reject) => {
      req.session.save((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });

    return res.status(200).json({
      message: "Prijava je bila uspešna.",
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Napaka pri prijavi:", error);

    return res.status(500).json({
      message: "Pri prijavi je prišlo do napake.",
    });
  }
});

// Preverjanje trenutno prijavljenega uporabnika
router.get("/me", async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({
        message: "Uporabnik ni prijavljen.",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.session.userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Uporabnik ne obstaja.",
      });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error("Napaka pri preverjanju uporabnika:", error);

    return res.status(500).json({
      message: "Pri preverjanju uporabnika je prišlo do napake.",
    });
  }
});

// Odjava uporabnika
router.post("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error("Napaka pri odjavi:", error);

      return res.status(500).json({
        message: "Pri odjavi je prišlo do napake.",
      });
    }

    res.clearCookie("connect.sid");

    return res.status(200).json({
      message: "Uspešno si se odjavil/a.",
    });
  });
});

export default router;
