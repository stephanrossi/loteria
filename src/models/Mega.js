// import { PrismaClient } from '@prisma/client';
import api from '../services/api.js'
// import { IData } from '../services/api'
import { prisma } from './../database/prismaClient.js';

export const mega = {
    create: async (concurso, date, dezenas, acumulou, acumuladaProxConcurso) => {
        try {
            await prisma.mega.upsert({
                where: { concurso },
                update: { dezenas, acumulou, acumuladaProxConcurso },
                create: { concurso, date, dezenas, acumulou, acumuladaProxConcurso }
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
            throw new Error('Algum erro ocorreu')
        }
    }
}

