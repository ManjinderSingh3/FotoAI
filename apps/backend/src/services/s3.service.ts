import { S3Client } from "bun";

export class S3Service {
  private static instance: S3Service;
  private constructor() {}
  public static getInstance(): S3Service {
    if (!S3Service.instance) {
      S3Service.instance = new S3Service();
    }
    return S3Service.instance;
  }

  public generatePreSignedUrl(): { url: string; fileName: string } {
    const fileName = `models/training-data_${Date.now()}_${crypto.randomUUID()}.zip`;

    const url = S3Client.presign(fileName, {
      accessKeyId: process.env.R2_ACCESS_KEY,
      secretAccessKey: process.env.R2_SECRET_KEY,
      endpoint: process.env.ENDPOINT,
      bucket: process.env.BUCKET_NAME,
      expiresIn: 60 * 60 * 24 * 30,
    });

    return { url, fileName };
  }
}
