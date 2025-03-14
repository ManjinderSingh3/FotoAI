/*
  Warnings:

  - You are about to drop the `OutputImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "GenerateImagesStatusEnum" AS ENUM ('Pending', 'Generated', 'Failed');

-- DropForeignKey
ALTER TABLE "OutputImages" DROP CONSTRAINT "OutputImages_trainModelId_fkey";

-- DropTable
DROP TABLE "OutputImages";

-- DropEnum
DROP TYPE "OutputImagesStatusEnum";

-- CreateTable
CREATE TABLE "GenerateImages" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL DEFAULT '',
    "trainModelId" TEXT NOT NULL,
    "status" "GenerateImagesStatusEnum" NOT NULL DEFAULT 'Pending',
    "prompt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GenerateImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GenerateImages" ADD CONSTRAINT "GenerateImages_trainModelId_fkey" FOREIGN KEY ("trainModelId") REFERENCES "TrainModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
