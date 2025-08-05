import type { Request, Response } from "express";
import { WebhookService } from "../services/webhook.service";

export class WebhookController {
  private webhookService: WebhookService;

  constructor() {
    this.webhookService = new WebhookService();
  }

  async trainModelWebhook(req: Request, res: Response): Promise<void> {
    try {
      const validatedPayload = this.webhookService.validateWebhookPayload(
        req.body
      );
      await this.webhookService.trainModelWebhook(validatedPayload);

      res.status(200).json({
        message: "Train Model Webhook received and processed successfully",
        reuest_id: validatedPayload.request_id,
      });
    } catch (error) {
      console.error("Error in train-model webhook cintroller: ", error);
      res.status(500).json({
        message: "Webhook processing failed",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
