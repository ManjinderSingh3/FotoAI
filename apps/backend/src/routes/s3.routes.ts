import { Router } from "express";
import { S3Controller } from "../controllers/s3.controller";

const router = Router();
const s3Controller = new S3Controller();

router.get("/pre-signed-url", s3Controller.getPreSignedUrl);


export default router;
