import "../../imageGenerationModel/FalAIModel";
import { FalAIModel } from "../../imageGenerationModel/FalAIModel";
import type { TrainModelDTO } from "common/types";
import { prismaClient } from "db";

export class AIService {
  private falAIModel: FalAIModel;

  constructor() {
    this.falAIModel = new FalAIModel();
  }

  async trainModel(data: TrainModelDTO, userId: string) {
    // Start Training with FalAI
    console.log("Train Model Service: ");
    console.log("Data: ", data);
    console.log("User Id: ", userId);
    try {
      const { request_id } = await this.falAIModel.trainModel(
        data.zipUrl,
        data.name
      );

      // Store training data in Database
      const trainModelData = await prismaClient.trainModel.create({
        data: {
          name: data.name,
          gender: data.gender,
          age: data.age,
          ethinicity: data.ethinicity,
          eyeColor: data.eyeColor,
          bald: data.bald,
          userId: userId,
          falAIRequestId: request_id,
          zipUrl: data.zipUrl,
          // trainingStatus: "Training", // Add initial status
        },
      });

      return {
        trainedModelId: trainModelData.id,
      };
    } catch (error) {
      console.error("Error in trainModel service:", error);
      throw error;
    }
  }
}
