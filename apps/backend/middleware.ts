import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("Header:", req.header);
    // const authHeader = req.headers["authorization"];
    // const token = authHeader?.split(" ")[1];
    // if (!token) {
    //   return res.status(401).json({ message: "Token missing" });
    // }
    // console.log("Token:", token);
    //const decoded = jwt.decode()

    next();
  } catch (error) {
    console.log("Auth Error:", error);
  }
}
