import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import { Pool } from "pg";
import { requireAuth } from "./middleware/authMiddleware.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET ni nastavljen v .env datoteki.");
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL ni nastavljen v .env datoteki.");
}

// Povezava s PostgreSQL
const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Shranjevanje sej v PostgreSQL
const PgSessionStore = connectPgSimple(session);

const sessionStore = new PgSessionStore({
  pool: pgPool,
  tableName: "user_sessions",
  createTableIfMissing: true,
});

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Konfiguracija prijavnih sej
app.use(
  session({
    store: sessionStore,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use("/api/auth", authRoutes);

app.get("/", (_req, res) => {
  res.json({
    message: "UNIKAT API deluje!",
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "OK",
    project: "UNIKAT",
  });
});

// Testna zaščitena API-pot
app.get("/api/protected", requireAuth, (req, res) => {
  res.json({
    message: "Dostop dovoljen.",
    userId: req.session.userId,
  });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`UNIKAT API posluša na portu ${PORT}`);
  });
}

export default app;
