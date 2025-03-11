import express from "express";
import { TrainModel, GenerateImage, GeneratePackImages } from "common/types";
import { prismaClient } from "db";

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
const USER_ID = "12345";

app.post(`/v1/ai/train`, async (req, res) => {
  try {
    const parsedBody = TrainModel.safeParse(req.body);
    if (!parsedBody.success) {
      res.status(411).json({ message: "Incorrect Inputs" });
      return;
    }

    const data = await prismaClient.trainModel.create({
      data: {
        name: parsedBody.data.name,
        gender: parsedBody.data.gender,
        age: parsedBody.data.age,
        ethinicity: parsedBody.data.ethinicity,
        eyeColor: parsedBody.data.eyeColor,
        bald: parsedBody.data.bald,
        userId: USER_ID,
      },
    });
    res.json({ trainModelId: data.id });
  } catch (error) {
    console.error("Error in /v1/ai/train", error);
    res.status(500).json({ message: "Failure in Training API" });
  }
});

app.post(`/v1/ai/generate`, async (req, res) => {
  try {
    const parsedBody = GenerateImage.safeParse(req.body);
    if (!parsedBody.success) {
      res.status(411).json({ message: "Incorrect inputs" });
      return;
    }

    const data = await prismaClient.outputImages.create({
      data: {
        userId: USER_ID,
        imageUrl: "",
        trainModelId: parsedBody.data.trainModelId,
        prompt: parsedBody.data.prompt,
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

  const prompts = await prismaClient.packPrompts.findMany({
    where: {
      packId: parsedBody.data.packId,
    },
  });

  const data = await prismaClient.outputImages.createManyAndReturn({
    data: prompts.map((prompt) => ({
      userId: USER_ID,
      imageUrl: "",
      trainModelId: parsedBody.data.modelId,
      prompt: prompt.prompt,
    })),
  });

  res.status(200).json({ imageIDs: data.map((image) => image.id) });
});

app.get(`/v1/pack/bulk`, (req, res) => {
  //TODO : Add caching here
  const packs = prismaClient.packs.findMany({});
  res.json({ packs });
});

app.get("/v1/image/bulk", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
