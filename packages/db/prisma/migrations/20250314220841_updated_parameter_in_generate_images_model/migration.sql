/*
  Warnings:

  - You are about to drop the column `trainModelId` on the `GenerateImages` table. All the data in the column will be lost.
  - You are about to drop the column `trainModelId` on the `TrainingImages` table. All the data in the column will be lost.
  - Added the required column `trainedModelId` to the `GenerateImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainedModelId` to the `TrainingImages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GenerateImages" DROP CONSTRAINT "GenerateImages_trainModelId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingImages" DROP CONSTRAINT "TrainingImages_trainModelId_fkey";

-- AlterTable
ALTER TABLE "GenerateImages" DROP COLUMN "trainModelId",
ADD COLUMN     "trainedModelId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TrainingImages" DROP COLUMN "trainModelId",
ADD COLUMN     "trainedModelId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "GenerateImages" ADD CONSTRAINT "GenerateImages_trainedModelId_fkey" FOREIGN KEY ("trainedModelId") REFERENCES "TrainModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingImages" ADD CONSTRAINT "TrainingImages_trainedModelId_fkey" FOREIGN KEY ("trainedModelId") REFERENCES "TrainModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
