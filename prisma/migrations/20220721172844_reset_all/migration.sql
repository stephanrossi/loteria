-- CreateTable
CREATE TABLE "loteria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "loteria_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Mega" (
    "sorteioId" INTEGER NOT NULL,
    "apostasId" INTEGER NOT NULL,

    CONSTRAINT "Mega_pkey" PRIMARY KEY ("sorteioId","apostasId")
);

-- CreateIndex
CREATE UNIQUE INDEX "loteria_nome_key" ON "loteria"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "apostas_concurso_key" ON "apostas"("concurso");

-- CreateIndex
CREATE UNIQUE INDEX "sorteios_concurso_key" ON "sorteios"("concurso");

-- AddForeignKey
ALTER TABLE "Mega" ADD CONSTRAINT "Mega_sorteioId_fkey" FOREIGN KEY ("sorteioId") REFERENCES "sorteios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mega" ADD CONSTRAINT "Mega_apostasId_fkey" FOREIGN KEY ("apostasId") REFERENCES "apostas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
