/*
  Warnings:

  - The primary key for the `mega-sena` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `apostasId` on the `mega-sena` table. All the data in the column will be lost.
  - You are about to drop the column `sorteioId` on the `mega-sena` table. All the data in the column will be lost.
  - You are about to drop the `loteria` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `apostas_id` to the `mega-sena` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sorteio_id` to the `mega-sena` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "apostas" DROP CONSTRAINT "apostas_loteria_id_fkey";

-- DropForeignKey
ALTER TABLE "mega-sena" DROP CONSTRAINT "mega-sena_apostasId_fkey";

-- DropForeignKey
ALTER TABLE "mega-sena" DROP CONSTRAINT "mega-sena_sorteioId_fkey";

-- DropForeignKey
ALTER TABLE "sorteios" DROP CONSTRAINT "sorteios_loteria_id_fkey";

-- AlterTable
ALTER TABLE "mega-sena" DROP CONSTRAINT "mega-sena_pkey",
DROP COLUMN "apostasId",
DROP COLUMN "sorteioId",
ADD COLUMN     "apostas_id" INTEGER NOT NULL,
ADD COLUMN     "sorteio_id" INTEGER NOT NULL,
ADD CONSTRAINT "mega-sena_pkey" PRIMARY KEY ("sorteio_id", "apostas_id");

-- DropTable
DROP TABLE "loteria";

-- CreateTable
CREATE TABLE "loterias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "loterias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "loterias_nome_key" ON "loterias"("nome");

-- AddForeignKey
ALTER TABLE "apostas" ADD CONSTRAINT "apostas_loteria_id_fkey" FOREIGN KEY ("loteria_id") REFERENCES "loterias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sorteios" ADD CONSTRAINT "sorteios_loteria_id_fkey" FOREIGN KEY ("loteria_id") REFERENCES "loterias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mega-sena" ADD CONSTRAINT "mega-sena_sorteio_id_fkey" FOREIGN KEY ("sorteio_id") REFERENCES "sorteios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mega-sena" ADD CONSTRAINT "mega-sena_apostas_id_fkey" FOREIGN KEY ("apostas_id") REFERENCES "apostas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
