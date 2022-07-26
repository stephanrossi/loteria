/*
  Warnings:

  - You are about to drop the column `loteria_id` on the `apostas` table. All the data in the column will be lost.
  - You are about to drop the column `loteria_id` on the `sorteios` table. All the data in the column will be lost.
  - Added the required column `loteriaId` to the `apostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loteriaId` to the `sorteios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "apostas" DROP COLUMN "loteria_id",
ADD COLUMN     "loteriaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sorteios" DROP COLUMN "loteria_id",
ADD COLUMN     "loteriaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "apostas" ADD CONSTRAINT "apostas_loteriaId_fkey" FOREIGN KEY ("loteriaId") REFERENCES "loteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sorteios" ADD CONSTRAINT "sorteios_loteriaId_fkey" FOREIGN KEY ("loteriaId") REFERENCES "loteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
