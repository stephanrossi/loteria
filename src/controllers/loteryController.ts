import { Lottery } from "../models/Lottery";
import { Request, Response } from "express";

export const getLottteryDataByDrawing = async (req: Request, res: Response) => {
    try {
        const { lottery, drawing } = req.body

        const data = await Lottery.getLottteryDataByDrawing(lottery, drawing)

        await saveLotteryInfo(lottery, drawing)

        return res.status(200).send(data!.data)
    } catch (error: any) {
        throw new Error(error)
    }
}

export const saveLotteryInfo = async (lottery, drawing) => {
    try {
        const { loteria, nome, concurso, data, local, dezenas, premiacoes, estadosPremiados, acumulou, acumuladaProxConcurso, dataProxConcurso, proxConcurso, timeCoracao, mesSorte } = await getLottteryDataByDrawing(lottery, drawing)

        // const info = await Lottery.saveLotteryInfo()

        console.log(getLotteryData);


    } catch (e: any) {
        throw new Error(e)
    }
}