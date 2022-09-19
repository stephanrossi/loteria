-- CreateTable
CREATE TABLE "loterias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "loterias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apostas" (
    "id" SERIAL NOT NULL,
    "loteria_id" INTEGER NOT NULL,
    "concurso" INTEGER NOT NULL,
    "dezenas_apostadas" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "apostas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sorteios" (
    "id" SERIAL NOT NULL,
    "loteria_id" INTEGER NOT NULL,
    "concurso" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "acumulou" BOOLEAN NOT NULL,
    "acumuladaProxConcurso" TEXT NOT NULL,
    "dezenas_sorteadas" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sorteios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apostas_sorteios" (
    "sorteio_id" INTEGER NOT NULL,
    "apostas_id" INTEGER NOT NULL,

    CONSTRAINT "apostas_sorteios_pkey" PRIMARY KEY ("sorteio_id","apostas_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "loterias_nome_key" ON "loterias"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "sorteios_concurso_key" ON "sorteios"("concurso");

-- AddForeignKey
ALTER TABLE "apostas" ADD CONSTRAINT "apostas_loteria_id_fkey" FOREIGN KEY ("loteria_id") REFERENCES "loterias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sorteios" ADD CONSTRAINT "sorteios_loteria_id_fkey" FOREIGN KEY ("loteria_id") REFERENCES "loterias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apostas_sorteios" ADD CONSTRAINT "apostas_sorteios_sorteio_id_fkey" FOREIGN KEY ("sorteio_id") REFERENCES "sorteios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apostas_sorteios" ADD CONSTRAINT "apostas_sorteios_apostas_id_fkey" FOREIGN KEY ("apostas_id") REFERENCES "apostas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
