import { prismaClient } from "db";

export interface IWebhookPayload {
  request_id: string;
  tensor_path?: string;
  image_url?: string;
}

export class WebhookService {
  async trainModelWebhook(payload: IWebhookPayload): Promise<void> {
    try {
      const { request_id, tensor_path } = payload;
      if (!request_id || !tensor_path) {
        throw new Error("Missing required fields: request_id or tensor_path");
      }

      const updatedModel = await prismaClient.trainModel.updateMany({
        where: {
          falAIRequestId: request_id,
        },
        data: {
          trainingStatus: "Generated",
          tensorPath: tensor_path,
        },
      });
      if (updatedModel.count === 0) {
        console.warn(`No train model found for request_id: ${request_id}`);
      }
      console.log(
        `Successfully updated train model with request_id: ${request_id}`
      );
    } catch (error) {
      console.error("Error in trainModelWebhook service: ", error);
      throw error;
    }
  }

  validateWebhookPayload(payload: IWebhookPayload): IWebhookPayload {
    if (!payload || typeof payload != "object") {
      throw new Error("Invalid webhook pyload");
    }

    if (!payload.request_id || typeof payload.request_id != "string") {
      throw new Error("Missing or Invalid request_id");
    }

    return payload as IWebhookPayload;
  }
}
