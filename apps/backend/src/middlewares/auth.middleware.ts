import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/auth.config";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];

    if (!token) {
      res.status(401).json({
        message: "JWT missing",
      });
      return;
    }
    const decoded = jwt.verify(token, config.jwtPublicKey!);
    if (decoded && typeof decoded.sub == "string") {
      req.userId = decoded.sub;
      next();
    } else {
      res.status(401).json({
        message: "Invalid token structure",
      });
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
}
