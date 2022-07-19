/*
  Warnings:

  - You are about to drop the column `data` on the `lotofacil` table. All the data in the column will be lost.
  - You are about to drop the column `premiacoes` on the `lotofacil` table. All the data in the column will be lost.
  - The `dezenas` column on the `lotofacil` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `data` on the `lotomania` table. All the data in the column will be lost.
  - You are about to drop the column `premiacoes` on the `lotomania` table. All the data in the column will be lost.
  - The `dezenas` column on the `lotomania` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `data` on the `mega_sena` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `quina` table. All the data in the column will be lost.
  - You are about to drop the column `premiacoes` on the `quina` table. All the data in the column will be lost.
  - The `dezenas` column on the `quina` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `date` to the `lotofacil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `lotomania` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `mega_sena` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `quina` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lotofacil" DROP COLUMN "data",
DROP COLUMN "premiacoes",
ADD COLUMN     "date" TEXT NOT NULL,
DROP COLUMN "dezenas",
ADD COLUMN     "dezenas" TEXT[];

-- AlterTable
ALTER TABLE "lotomania" DROP COLUMN "data",
DROP COLUMN "premiacoes",
ADD COLUMN     "date" TEXT NOT NULL,
DROP COLUMN "dezenas",
ADD COLUMN     "dezenas" TEXT[];

-- AlterTable
ALTER TABLE "mega_sena" DROP COLUMN "data",
ADD COLUMN     "date" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "quina" DROP COLUMN "data",
DROP COLUMN "premiacoes",
ADD COLUMN     "date" TEXT NOT NULL,
DROP COLUMN "dezenas",
ADD COLUMN     "dezenas" TEXT[];
