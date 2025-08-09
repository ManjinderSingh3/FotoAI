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
  zipUrl: z.string(),
});
// DTO
export type TrainModelDTO = z.infer<typeof TrainModel>;

export const GenerateImage = z.object({
  prompt: z.string(),
  trainedModelId: z.string(),
  num: z.number(),
});
//DTO
export type GenerateImageDTO = z.infer<typeof GenerateImage>;

export const GeneratePackOfImages = z.object({
  modelId: z.string(),
  packId: z.string(),
});
//DTO
export type GeneratePackOfImagesDTO = z.infer<typeof GeneratePackOfImages>;
