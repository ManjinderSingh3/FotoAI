import express from "express";
import cors from "cors";
import { authMiddleware } from "./middlewares/auth.middleware";
import s3Routes from "./routes/s3.routes";
import aiRoutes from "./routes/ai.routes";
import webhookRoutes from "./routes/webhook.routes";

// import {aiRoutes} from "./routes/ai.routes"
//import dotenv from "dotenv";
//dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
console.log("Backend before hitting routes ");

app.use(`/`, s3Routes);
app.use(`/v1/ai`, authMiddleware, aiRoutes);
app.use(`/v1/webhook`, webhookRoutes);
//app.route(`/v1/webhook`, webhookRoutes);

export default app;
