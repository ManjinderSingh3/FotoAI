import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

export const authMiddleware = ClerkExpressRequireAuth();

// Custom JWT Middleware
/* 
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authConfig } from "../config/auth.config";


export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "JWT missing",
      });
    }

    if (!authConfig.jwtSecret) {
      return res.status(500).json({ message: "JWT secret not configured" });
    }
    const decoded = jwt.verify(token, authConfig.jwtSecret) as any;
    //req.user = { id: decoded.userId, email: decoded.email };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
}

*/
