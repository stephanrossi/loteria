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
            throw new Error('Algum erro ocorreu')
        }
    },
    getBetByDrawing: async (concurso) => {
        try {
            let bet = await prisma.mega.findUnique({
                where: { concurso }
            })

            return bet
        } catch (e) {
            console.log(e);
        }
    }
}

