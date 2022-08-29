import api from "../services/api";
import prisma from "../database/prismaClient";
import { ILottery } from "../types";

export const Lottery = {
    getLottteryDataByDrawing: async (lottery: string, drawing: number) => {
        try {
            const response = await api.get<ILottery>(`/${lottery}/${drawing}`)
            return response
        } catch (error) {
            console.log(error)
        }
    },
    saveLotteryInfo: async ({ data }: ILottery) => {

    }
}

// export default Lottery
