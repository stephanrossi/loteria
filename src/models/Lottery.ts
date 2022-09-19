import api from "../services/api";
import prisma from "../database/prismaClient";
import { ILottery } from "../types";
import getLotteryId from '../helpers/getLotteryId'
import { Request, Response } from 'express';

export const Lottery = {
    getLottteryDataByDrawing: async (lottery: string, drawing: number) => {
        try {
            const response = await api.get<ILottery>(`/${lottery}/${drawing}`)

            return response
        } catch (e) {
            console.log(e)
        }
    },
    getDrawingInfo: async (lottery: string, drawing: number) => {

        const lotteryId = await getLotteryId(lottery)

        const info = await prisma.sorteio.findMany({
            where: {
                AND: [
                    {
                        loteria_id: {
                            equals: lotteryId
                        },
                        concurso: {
                            equals: drawing
                        }
                    }
                ]
            }
        })
        return info
    },
    saveLotteryInfo: async (req: Request, res: Response) => {
        const { lottery, drawing } = req.body

        try {
            // const lotteryInfo = await (lottery, drawing)

            const loteriaId = await getLotteryId(lottery)

            await prisma.sorteio.create({
                data: {
                    loteria_id: loteriaId,
                    concurso,
                    date,
                    acumulou,
                    acumuladaProxConcurso,
                    dezenas_sorteadas
                }
            })
        } catch (e) {
            console.log(e);
        }

    }
}

// export default Lottery
