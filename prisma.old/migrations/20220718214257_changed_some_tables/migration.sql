/*
  Warnings:

  - The `dezenas` column on the `mega_sena` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "mega_sena" DROP COLUMN "dezenas",
ADD COLUMN     "dezenas" TEXT[],
ALTER COLUMN "data" SET DATA TYPE TEXT;
