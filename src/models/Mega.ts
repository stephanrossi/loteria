import { PrismaClient } from '@prisma/client';
import api from '../services/api'
import { IData } from '../services/api'

export const mega = {
    getLatest: async () => {
        try {
            const { data } = await api.get<IData>('/mega-sena/latest')

            return data;
        }
        catch (e) {
            console.log(e);
            throw new Error('Algum erro ocorreu')
        }
    },
    getByDrawing: async (lottery: string, drawing: number) => {
        try {
            const { data } = await api.get<IData>(`'/${lottery}/${drawing}'`)

            return data;
        } catch (e) {
            console.log(e);
            throw new Error('Algum erro ocorreu')
        }
    }
}

