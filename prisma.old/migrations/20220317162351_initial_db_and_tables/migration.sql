-- CreateTable
CREATE TABLE "mega_sena" (
    "id" SERIAL NOT NULL,
    "concurso" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "dezenas" TEXT NOT NULL,
    "premiacoes" TEXT NOT NULL,
    "acumulou" BOOLEAN NOT NULL,
    "acumulado_prox_concurso" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mega_sena_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lotomania" (
    "id" SERIAL NOT NULL,
    "concurso" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "dezenas" TEXT NOT NULL,
    "premiacoes" TEXT NOT NULL,
    "acumulou" BOOLEAN NOT NULL,
    "acumulado_prox_concurso" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lotomania_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quina" (
    "id" SERIAL NOT NULL,
    "concurso" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "dezenas" TEXT NOT NULL,
    "premiacoes" TEXT NOT NULL,
    "acumulou" BOOLEAN NOT NULL,
    "acumulado_prox_concurso" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lotofacil" (
    "id" SERIAL NOT NULL,
    "concurso" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "dezenas" TEXT NOT NULL,
    "premiacoes" TEXT NOT NULL,
    "acumulou" BOOLEAN NOT NULL,
    "acumulado_prox_concurso" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lotofacil_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mega_sena_concurso_key" ON "mega_sena"("concurso");

-- CreateIndex
CREATE UNIQUE INDEX "lotomania_concurso_key" ON "lotomania"("concurso");

-- CreateIndex
CREATE UNIQUE INDEX "quina_concurso_key" ON "quina"("concurso");

-- CreateIndex
CREATE UNIQUE INDEX "lotofacil_concurso_key" ON "lotofacil"("concurso");
