import express from "express";
import { TrainModel, GenerateImage, GeneratePackImages } from "common/types";

const PORT = process.env.PORT || 8080;
const app = express();

app.post(`/v1/ai/train`, (req, res) => {});

app.post(`/v1/ai/generate`, (req, res) => {});

app.post(`/v1/generate/pack`, (req, res) => {});


app.get(`/v1/pack/bulk`, (req, res) => {});

app.get("/v1/image", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
