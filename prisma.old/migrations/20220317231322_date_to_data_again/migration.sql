/*
  Warnings:

  - You are about to drop the column `date` on the `lotofacil` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `lotomania` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `mega_sena` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `quina` table. All the data in the column will be lost.
  - Added the required column `data` to the `lotofacil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `lotomania` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `mega_sena` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `quina` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lotofacil" DROP COLUMN "date",
ADD COLUMN     "data" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "lotomania" DROP COLUMN "date",
ADD COLUMN     "data" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "mega_sena" DROP COLUMN "date",
ADD COLUMN     "data" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "quina" DROP COLUMN "date",
ADD COLUMN     "data" TIMESTAMP(3) NOT NULL;
