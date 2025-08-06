import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { AIController } from "../controllers/ai.controller";

const router = Router();
const aiController = new AIController();

router.post(
  `/train-model`,
  authMiddleware,
  aiController.trainModel.bind(aiController)
);

router.post(
  `/generate-image`,
  authMiddleware,
  aiController.generateImage.bind(aiController)
);

router.post(
  `generate-pack`,
  authMiddleware,
  aiController.trainModel.bind(aiController)
);

export default router;