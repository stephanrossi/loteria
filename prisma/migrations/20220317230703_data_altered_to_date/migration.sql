/*
  Warnings:

  - You are about to drop the column `data` on the `lotofacil` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `lotomania` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `mega_sena` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `quina` table. All the data in the column will be lost.
  - Added the required column `date` to the `lotofacil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `lotomania` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `mega_sena` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `quina` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lotofacil" DROP COLUMN "data",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "lotomania" DROP COLUMN "data",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "mega_sena" DROP COLUMN "data",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "quina" DROP COLUMN "data",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
