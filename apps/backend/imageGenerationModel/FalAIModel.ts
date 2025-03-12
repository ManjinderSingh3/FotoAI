import { BaseModel } from "./BaseModel";

export class FalAIModel extends BaseModel {

    constructor(){
        super();
    }
  private async trainModel(inputImages: string[], triggerWord: string) {}

  private async generateImage(prompt: string, tensorPath: string) {}
}
