import type { Request, Response } from "express";
import { S3Service } from "../services/s3.service";

export class S3Controller {
  private s3Service: S3Service;

  constructor() {
    this.s3Service = S3Service.getInstance();
  }

  public getPreSignedUrl = async (req: Request, res: Response) => {
    try {
      const { url, fileName } = this.s3Service.generatePreSignedUrl();
      res.json({ url, fileName });
    } catch (error) {
      console.error("Error generating pre-signed URL:", error);
      res.status(500).json({ message: "Failed to generate pre-signed URL" });
    }
  };
}
