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

export const saveLotteryInfo = async (lottery: string, drawing: number) => {
    try {
        const response = await Lottery.getLottteryDataByDrawing(lottery, drawing)

        return response
    } catch (e: any) {
        throw new Error(e)
    }
}