import express from "express";
import s3Routes from "./routes/s3.routes";

const app = express();
app.use(express.json());


app.use("/", s3Routes);
