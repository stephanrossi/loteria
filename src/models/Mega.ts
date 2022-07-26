// import { PrismaClient } from '@prisma/client';
import api from '../services/api'
import prisma from './../database/prismaClient';
import { Aposta } from '@prisma/client';

import { ILottery, IBet, ILotteryData, axiosReturn } from '../types/index';

export const mega = {
    getLatest: async () => {
        try {
            const { data } = await api.get('/mega-sena/latest')

            return data;
        }
        catch (e) {
            console.log(e);
            throw new Error('Algum erro ocorreu')
        }
    },
    getLotteryDataByDrawing: async (concurso: number): Promise<ILotteryData | undefined> => {
        try {
            const { data } = await api.get<axiosReturn>(`/mega-sena/${concurso}`)

            return data;
        }
        catch (e) {
            console.log(e);
        }
    },
    getBetByDrawing: async (loteria_id: number, concurso: number): Promise<object[] | undefined> => {
        try {
            let bet: Aposta[] = await prisma.aposta.findMany({
                where: {
                    AND: [
                        {
                            concurso: {
                                equals: concurso
                            }
                        }, {
                            loteria_id: {
                                equals: loteria_id
                            }
                        }
                    ]
                }
            })
            return bet
        } catch (e) {
            console.log(e);
        }
    },
    getSorteioId: async (concurso: number): Promise<{ id: number } | null | undefined> => {
        try {
            let sorteioId = prisma.sorteio.findUnique({
                where: { concurso },
                select: { id: true }
            })

            return sorteioId
        } catch (e) {
            console.log(e);
        }
    },
    makeOrUpdateBet: async ({ loteria_id, concurso, dezenas_apostadas }: IBet): Promise<Aposta | undefined> => {
        try {
            let createBet = await prisma.aposta.upsert({
                where: { concurso },
                update: { dezenas_apostadas },
                create: { loteria_id, concurso, dezenas_apostadas }
            })

            return createBet
        } catch (e) {
            console.log(e);
        }
    },
    fillBetTable: async (sorteio_id: any, apostas_id: number) => {
        try {
            let tableData = await prisma.mega.create({
                data: { sorteio_id, apostas_id }
            })

            return tableData
        } catch (e) {
            console.log(e);
        }
    },
    fillDrawingTable: async (loteria_id, concurso,
        date,
        dezenas_sorteadas, acumulou, acumuladaProxConcurso) => {
        try {
            let drawInfo = await prisma.sorteio.create({
                data: {
                    loteria_id, concurso, date, dezenas_sorteadas, acumulou, acumuladaProxConcurso
                }
            })

            return drawInfo
        } catch (e) {
            console.log(e);
        }
    },
}
