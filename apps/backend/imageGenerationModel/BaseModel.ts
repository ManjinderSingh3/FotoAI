export class BaseModel {
  constructor() {}

  public async trainModel(
    zippedImagesUrl: string,
    triggerWord: string
  ): Promise<{ request_id: string; response_url: string }> {
    return { request_id: "", response_url: "" };
  }

  public async generateImage(
    prompt: string,
    tensorPath: string
  ): Promise<{ request_id: string; response_url: string }> {
    return { request_id: "", response_url: "" };
  }
}
