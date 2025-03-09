/*
  Warnings:

  - Added the required column `prompt` to the `OutputImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `OutputImages` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `gender` on the `TrainModel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ethinicity` on the `TrainModel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `eyeColor` on the `TrainModel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TrainModelGenderEnum" AS ENUM ('Man', 'Woman', 'Others');

-- CreateEnum
CREATE TYPE "TrainModelEthinicityEnum" AS ENUM ('White', 'Black', 'AsianAmerican', 'EastAsian', 'SouthEastAsian', 'SouthAsian', 'MiddleEastern', 'Pacific', 'Hispanic');

-- CreateEnum
CREATE TYPE "TrainModelEyeColorEnum" AS ENUM ('Brown', 'Blue', 'Hazel', 'Gray');

-- CreateEnum
CREATE TYPE "OutputImagesStatusEnum" AS ENUM ('Pending', 'Geberated', 'Failed');

-- AlterTable
ALTER TABLE "OutputImages" ADD COLUMN     "prompt" TEXT NOT NULL,
ADD COLUMN     "status" "OutputImagesStatusEnum" NOT NULL;

-- AlterTable
ALTER TABLE "TrainModel" DROP COLUMN "gender",
ADD COLUMN     "gender" "TrainModelGenderEnum" NOT NULL,
DROP COLUMN "ethinicity",
ADD COLUMN     "ethinicity" "TrainModelEthinicityEnum" NOT NULL,
DROP COLUMN "eyeColor",
ADD COLUMN     "eyeColor" "TrainModelEyeColorEnum" NOT NULL;

-- DropEnum
DROP TYPE "EthinicityEnum";

-- DropEnum
DROP TYPE "EyeColorEnum";

-- DropEnum
DROP TYPE "GenderEnum";
