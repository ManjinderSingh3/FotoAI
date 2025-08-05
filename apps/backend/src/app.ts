import express from "express";
import s3Routes from "./routes/s3.routes";
import aiRoutes from "./routes/ai.routes";
// import {aiRoutes} from "./routes/ai.routes"

const app = express();
app.use(express.json());


app.use(`/`, s3Routes);
app.use(`/v1/ai`, aiRoutes);
// app.route(`/v1/ai`, aiRoutes);
