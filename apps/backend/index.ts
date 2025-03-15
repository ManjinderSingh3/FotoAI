import express from "express";
import { TrainModel, GenerateImage, GeneratePackImages } from "common/types";
import { prismaClient } from "db";
import { S3Client } from "bun";
import { FalAIModel } from "./imageGenerationModel/FalAIModel";

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
const USER_ID = "12345";
const falAIModel = new FalAIModel();

// Pre-Signed URLS is the standard way of storing in S3 from browser
app.get("/pre-signed-url", async (req, res) => {
  const fileName = `models/training-data_${Date.now()}_${crypto.randomUUID()}.zip`;
  const url = S3Client.presign(fileName, {
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_KEY,
    endpoint: process.env.ENDPOINT,
    bucket: process.env.BUCKET_NAME,
    expiresIn: 60 * 60 * 24 * 30,
  });
  res.json({ url, fileName });
});

app.post(`/v1/ai/train-model`, async (req, res) => {
  try {
    const parsedBody = TrainModel.safeParse(req.body);
    if (!parsedBody.success) {
      res.status(411).json({ message: "Incorrect Inputs" });
      return;
    }

    const { request_id } = await falAIModel.trainModel(
      parsedBody.data.zipUrl,
      parsedBody.data.name
    );

    const data = await prismaClient.trainModel.create({
      data: {
        name: parsedBody.data.name,
        gender: parsedBody.data.gender,
        age: parsedBody.data.age,
        ethinicity: parsedBody.data.ethinicity,
        eyeColor: parsedBody.data.eyeColor,
        bald: parsedBody.data.bald,
        userId: USER_ID,
        falAIRequestId: request_id,
        zipUrl: parsedBody.data.zipUrl,
      },
    });
    res.json({ trainModelId: data.id });
  } catch (error) {
    console.error("Error in /v1/ai/train", error);
    res.status(500).json({ message: "Failure in Training API" });
  }
});

app.post(`/v1/ai/generate-image`, async (req, res) => {
  try {
    const parsedBody = GenerateImage.safeParse(req.body);
    if (!parsedBody.success) {
      res.status(411).json({ message: "Incorrect inputs" });
      return;
    }

    const model = await prismaClient.trainModel.findUnique({
      where: {
        id: parsedBody.data.trainedModelId,
      },
    });

    if (!model || !model.tensorPath) {
      res.status(411).json({ message: "Model not found" });
      return;
    }

    const { request_id, response_url } = await falAIModel.generateImage(
      parsedBody.data.prompt,
      model.tensorPath
    );
    const data = await prismaClient.generateImages.create({
      data: {
        userId: USER_ID,
        imageUrl: "",
        trainedModelId: parsedBody.data.trainedModelId,
        prompt: parsedBody.data.prompt,
        falAIRequestId: request_id,
      },
    });

    res.json({ imageId: data.id });
  } catch (error) {
    console.error("Error in /v1/ai/generate", error);
    res.status(500).json({ message: "Failure in Generating Image" });
  }
});

app.post(`/v1/ai/generate/pack`, async (req, res) => {
  const parsedBody = GeneratePackImages.safeParse(req.body);

  if (!parsedBody.success) {
    res.status(411).json({ message: "Incorrect inputs" });
    return;
  }

  const model = await prismaClient.trainModel.findUnique({
    where: {
      id: parsedBody.data.modelId,
    },
  });

  if (!model || !model.tensorPath) {
    res.status(411).json({ message: "Model not found" });
    return;
  }

  const prompts = await prismaClient.packPrompts.findMany({
    where: {
      packId: parsedBody.data.packId,
    },
  });

  let requestIds: { request_id: string }[] = await Promise.all(
    prompts.map((prompt) =>
      falAIModel.generateImage(prompt.prompt, model.tensorPath!)
    )
  );

  const images = await prismaClient.generateImages.createManyAndReturn({
    data: prompts.map((prompt, index) => ({
      userId: USER_ID,
      imageUrl: "",
      trainedModelId: parsedBody.data.modelId,
      prompt: prompt.prompt,
      falAIRequestId: requestIds[index].request_id,
    })),
  });
  res.status(200).json({ imageIDs: images.map((image) => image.id) });
});

app.get(`/v1/pack/bulk`, async (req, res) => {
  //TODO : Add caching here
  const packs = await prismaClient.packs.findMany({});
  res.json({ packs });
});

app.get("/v1/image/bulk", async (req, res) => {
  const imageIds = req.query.ids as string[];
  const limit = (req.query.limit as string) ?? "10";
  const offset = (req.query.offset as string) ?? "0";

  const imagesData = await prismaClient.generateImages.findMany({
    where: {
      id: {
        in: imageIds,
      },
      userId: USER_ID,
    },
    take: parseInt(limit),
    skip: parseInt(offset),
  });
});

app.post("/fal-ai/webhook/train-model", async (req, res) => {
  console.log("Train-model webhook endpoint", req.body);
  const requestId = req.body.request_id;
  await prismaClient.trainModel.updateMany({
    where: {
      falAIRequestId: requestId,
    },
    data: {
      trainingStatus: "Generated",
      tensorPath: req.body.tensor_path,
    },
  });
  res.json({ message: "Train Model Webhook received" });
});

app.post("fal-ai/webhook/generate-image", async (req, res) => {
  console.log("Generate-Image webhook endpoint", req.body);
  const requestId = req.body.request_id;
  await prismaClient.generateImages.updateMany({
    where: {
      falAIRequestId: requestId,
    },
    data: {
      status: "Generated",
      imageUrl: req.body.image_url,
    },
  });
  res.json({ message: "Generate Image Webhook received" });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
