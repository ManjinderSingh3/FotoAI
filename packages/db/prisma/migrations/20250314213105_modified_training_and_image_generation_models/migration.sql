-- CreateEnum
CREATE TYPE "TrainModelStatusEnum" AS ENUM ('Pending', 'Generated', 'Failed');

-- AlterTable
ALTER TABLE "GenerateImages" ADD COLUMN     "falAIRequestId" TEXT;

-- AlterTable
ALTER TABLE "TrainModel" ADD COLUMN     "falAIRequestId" TEXT,
ADD COLUMN     "tensorPath" TEXT,
ADD COLUMN     "trainingStatus" "TrainModelStatusEnum" NOT NULL DEFAULT 'Pending',
ADD COLUMN     "triggerWord" TEXT;
