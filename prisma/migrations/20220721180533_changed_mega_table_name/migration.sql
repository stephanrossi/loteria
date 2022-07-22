/*
  Warnings:

  - You are about to drop the `Mega` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Mega" DROP CONSTRAINT "Mega_apostasId_fkey";

-- DropForeignKey
ALTER TABLE "Mega" DROP CONSTRAINT "Mega_sorteioId_fkey";

-- DropTable
DROP TABLE "Mega";

-- CreateTable
CREATE TABLE "mega-sena" (
    "sorteioId" INTEGER NOT NULL,
    "apostasId" INTEGER NOT NULL,

    CONSTRAINT "mega-sena_pkey" PRIMARY KEY ("sorteioId","apostasId")
);

-- AddForeignKey
ALTER TABLE "mega-sena" ADD CONSTRAINT "mega-sena_sorteioId_fkey" FOREIGN KEY ("sorteioId") REFERENCES "sorteios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mega-sena" ADD CONSTRAINT "mega-sena_apostasId_fkey" FOREIGN KEY ("apostasId") REFERENCES "apostas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
