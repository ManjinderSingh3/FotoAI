import { Router } from 'express';
import { authMiddleware } from '../../middleware';
import { AIController } from '../controllers/ai.controller'

const router = Router();
const aiController = new AIController();

router.post(`/train-model`, authMiddleware, aiController.trainModel.bind(aiController));

export default router;