/*
  Warnings:

  - You are about to drop the column `loteriaId` on the `apostas` table. All the data in the column will be lost.
  - You are about to drop the column `loteriaId` on the `sorteios` table. All the data in the column will be lost.
  - Added the required column `loteria_id` to the `apostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loteria_id` to the `sorteios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "apostas" DROP CONSTRAINT "apostas_loteriaId_fkey";

-- DropForeignKey
ALTER TABLE "sorteios" DROP CONSTRAINT "sorteios_loteriaId_fkey";

-- AlterTable
ALTER TABLE "apostas" DROP COLUMN "loteriaId",
ADD COLUMN     "loteria_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sorteios" DROP COLUMN "loteriaId",
ADD COLUMN     "loteria_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "apostas" ADD CONSTRAINT "apostas_loteria_id_fkey" FOREIGN KEY ("loteria_id") REFERENCES "loteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sorteios" ADD CONSTRAINT "sorteios_loteria_id_fkey" FOREIGN KEY ("loteria_id") REFERENCES "loteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
