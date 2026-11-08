import type { Request, Response, NextFunction } from "express";

// Preverjanje, ali je uporabnik prijavljen
export function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.session.userId) {
    return res.status(401).json({
      message: "Za dostop se moraš prijaviti.",
    });
  }

  next();
}
