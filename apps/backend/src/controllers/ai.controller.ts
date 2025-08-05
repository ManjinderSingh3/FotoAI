import type { Request, Response } from "express";
import { AIService } from "../services/ai.service";
import { TrainModel } from "common/types";

export class AIController {
  private aiService: AIService;

  constructor() {
    this.aiService = new AIService();
  }

  async trainModel(req: Request, res: Response): Promise<void> {
    try {
      // Input Validation
      const parsedBody = TrainModel.safeParse(req.body);
      if (!parsedBody.success) {
        res.status(400).json({
          message: "Invalid input data",
          errors: parsedBody.error.errors,
        });
        return;
      }
      // const userId = req.user?.id ;
      const userId = "12345";
      const result = await this.aiService.trainModel(parsedBody.data, userId);

      if (!result) {
        res.status(500).json({
          message: "Failed to start training - no result returned",
        });
        return;
      }

      res.status(200).json({
        trainModelId: result.trainedModelId,
      });
    } catch (error) {
      console.error("Error in train-model controller: ", error);
      res.status(500).json({
        message: "Failed to start model training",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
