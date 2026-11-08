import { describe, it, expect, vi, beforeEach } from "vitest";
import request from "supertest";
import bcrypt from "bcrypt";

// Pripravimo ponarejeno podatkovno bazo
const { prismaMock } = vi.hoisted(() => ({
  prismaMock: {
    user: {
      findUnique: vi.fn(),
      create: vi.fn(),
    },
  },
}));

vi.mock("../src/config/prisma.js", () => ({
  default: prismaMock,
}));

import app from "../src/server.js";

describe("Registracija uporabnika", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    prismaMock.user.findUnique.mockResolvedValue(null);
  });

  it("preveri, ali API deluje", async () => {
    const response = await request(app).get("/api/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: "OK",
      project: "UNIKAT",
    });
  });

  it("uspešno registrira novega uporabnika", async () => {
    prismaMock.user.create.mockImplementation(async ({ data }) => ({
      id: "test-user-id",
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
    }));

    const response = await request(app)
      .post("/api/auth/register")
      .send({
        firstName: "Ana",
        lastName: "Novak",
        email: "ana@example.com",
        password: "VarnoGeslo123",
      });

    expect(response.status).toBe(201);
    expect(response.body.user.email).toBe("ana@example.com");
    expect(response.body.user.role).toBe("CUSTOMER");
    expect(response.body.user).not.toHaveProperty("passwordHash");
  });

  it("zavrne neveljaven e-poštni naslov", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        firstName: "Ana",
        lastName: "Novak",
        email: "napacen-email",
        password: "VarnoGeslo123",
      });

    expect(response.status).toBe(400);
    expect(prismaMock.user.create).not.toHaveBeenCalled();
  });

  it("zavrne geslo, krajše od 8 znakov", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        firstName: "Ana",
        lastName: "Novak",
        email: "ana@example.com",
        password: "1234567",
      });

    expect(response.status).toBe(400);
    expect(prismaMock.user.create).not.toHaveBeenCalled();
  });

  it("zavrne že registriran e-poštni naslov", async () => {
    prismaMock.user.findUnique.mockResolvedValue({
      id: "existing-user",
    });

    const response = await request(app)
      .post("/api/auth/register")
      .send({
        firstName: "Ana",
        lastName: "Novak",
        email: "ana@example.com",
        password: "VarnoGeslo123",
      });

    expect(response.status).toBe(409);
    expect(prismaMock.user.create).not.toHaveBeenCalled();
  });

  it("geslo shrani kot zgoščeno vrednost", async () => {
    prismaMock.user.create.mockImplementation(async ({ data }) => ({
      id: "test-user-id",
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
    }));

    await request(app)
      .post("/api/auth/register")
      .send({
        firstName: "Ana",
        lastName: "Novak",
        email: "ana@example.com",
        password: "VarnoGeslo123",
      });

    const createCall = prismaMock.user.create.mock.calls[0];

    expect(createCall).toBeDefined();

    const savedPasswordHash = createCall![0].data.passwordHash;

    expect(savedPasswordHash).not.toBe("VarnoGeslo123");
    expect(await bcrypt.compare("VarnoGeslo123", savedPasswordHash)).toBe(true);
  });

  describe("Registracija uporabnika", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    prismaMock.user.findUnique.mockResolvedValue(null);
  });

  // Tukaj ostane vseh 6 obstoječih testov.

  it("zavrne ime, sestavljeno samo iz presledkov", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        firstName: "   ",
        lastName: "Novak",
        email: "ana@example.com",
        password: "VarnoGeslo123",
      });

    expect(response.status).toBe(400);
    expect(prismaMock.user.create).not.toHaveBeenCalled();
  });

  it("zavrne priimek, sestavljen samo iz presledkov", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        firstName: "Ana",
        lastName: "   ",
        email: "ana@example.com",
        password: "VarnoGeslo123",
      });

    expect(response.status).toBe(400);
    expect(prismaMock.user.create).not.toHaveBeenCalled();
  });
});
});


