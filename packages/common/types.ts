import { z } from "zod";

export const TrainModel = z.object({
  name: z.string(),
  gender: z.enum(["Man", "Woman", "Others"]),
  age: z.number(),
  ethinicity: z.enum([
    "White",
    "Black",
    "AsianAmerican",
    "EastAsian",
    "SouthEastAsian",
    "SouthAsian",
    "MiddleEastern",
    "Pacific",
    "Hispanic",
  ]),
  eyeColor: z.enum(["Brown", "Blue", "Hazel", "Gray"]),
  bald: z.boolean(),
  images: z.array(z.string()),
});

export const GenerateImage = z.object({
  prompt: z.string(),
  trainedModelId: z.string(),
  num: z.number(),
});

export const GeneratePackImages = z.object({
  modelId: z.string(),
  packId: z.string(),
});
