import { Router } from "express";
import { WebhookController } from "../controllers/webhook.controller";

const router = Router();
const webhookController = new WebhookController();

router.post(
  `/fal-ai/train-model`,
  webhookController.trainModelWebhook.bind(webhookController)
);
router.post(`/fal-ai/generate-image`);

export default router;
