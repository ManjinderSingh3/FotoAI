import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { AIController } from "../controllers/ai.controller";

const router = Router();
const aiController = new AIController();

router.get(
  `/training-status/:trainModelId`,
  aiController.getTrainingStatus.bind(aiController)
);
router.post(`/train-model`, aiController.trainModel.bind(aiController));

router.post(`/generate-image`, aiController.generateImage.bind(aiController));

router.post(
  `generate-pack-of-images`,
  aiController.generatePackOfImages.bind(aiController)
);

export default router;
