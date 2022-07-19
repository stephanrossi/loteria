/*
  Warnings:

  - You are about to drop the column `acumulado_prox_concurso` on the `mega_sena` table. All the data in the column will be lost.
  - Added the required column `acumuladaProxConcurso` to the `mega_sena` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mega_sena" DROP COLUMN "acumulado_prox_concurso",
ADD COLUMN     "acumuladaProxConcurso" TEXT NOT NULL;
