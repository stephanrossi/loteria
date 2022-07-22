// import { PrismaClient } from '@prisma/client';
import api from '../services/api.js'
// import { IData } from '../services/api'
import { prisma } from './../database/prismaClient.js';

export const mega = {
    createBet: async (concurso, apostas, dezenas = '') => {
        try {
            await prisma.mega.upsert({
                where: { concurso },
                update: { apostas },
                create: { concurso, apostas, dezenas }
            })
        }
        catch (e) {
            console.log(e);
        }
    },
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
    getByDrawing: async (drawing) => {
        try {
            const { data } = await api.get(`/mega-sena/${parseInt(drawing)}`)

            return data;
        }
        catch (e) {
            console.log(e);
        }
    },
    getBetByDrawing: async (concurso) => {
        try {
            let bet = await prisma.apostas.findUnique({
                where: { concurso }
            })

            return bet
        } catch (e) {
            console.log(e);
        }
    },
    getSorteioId: async (concurso) => {
        try {
            let sorteioId = prisma.mega.findUnique({
                where: concurso,
                select: { id }
            })

            return sorteioId
        } catch (e) {
            console.log(e);
        }
    },
    makeBet: async (loteria_id, concurso, dezenas_apostadas) => {
        try {
            let createBet = await prisma.apostas.create({
                data: {
                    loteria_id, concurso, dezenas_apostadas
                }
            })

            return createBet
        } catch (e) {
            console.log(e);
        }
    }
    ,
    fillBetTable: async (sorteioId, apostasId) => {
        try {
            let tableData = await prisma.mega.create({
                data: {
                    sorteioId,
                    apostasId,
                }
            })

            return tableData
        } catch (e) {
            console.log(e);
        }
    },
    fillDrawingTable: async (loteria_id = 1, concurso,
        date,
        dezenas_sorteadas, acumulou, acumuladaProxConcurso) => {
        try {
            let drawInfo = await prisma.sorteios.create({
                data: {
                    loteria_id, concurso,
                    date,
                    dezenas_sorteadas, acumulou, acumuladaProxConcurso
                }
            })

            return drawInfo
        } catch (e) {
            console.log(e);
        }
    },
}
