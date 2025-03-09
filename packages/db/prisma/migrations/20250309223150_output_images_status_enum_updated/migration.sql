/*
  Warnings:

  - The values [Geberated] on the enum `OutputImagesStatusEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OutputImagesStatusEnum_new" AS ENUM ('Pending', 'Generated', 'Failed');
ALTER TABLE "OutputImages" ALTER COLUMN "status" TYPE "OutputImagesStatusEnum_new" USING ("status"::text::"OutputImagesStatusEnum_new");
ALTER TYPE "OutputImagesStatusEnum" RENAME TO "OutputImagesStatusEnum_old";
ALTER TYPE "OutputImagesStatusEnum_new" RENAME TO "OutputImagesStatusEnum";
DROP TYPE "OutputImagesStatusEnum_old";
COMMIT;

-- AlterTable
ALTER TABLE "OutputImages" ALTER COLUMN "imageUrl" SET DEFAULT '',
ALTER COLUMN "status" SET DEFAULT 'Pending';
