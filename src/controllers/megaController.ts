import { Request, Response } from 'express'
import { mega } from '../models/Mega'

export const all = async (req: Request, res: Response) => {
    let list = await mega.getLatest()

    return res.render('pages/mega', {
        list
    })
}

export const byDrawing = async (req: Request, res: Response) => {
    let { lottery, drawing } = req.params

    let list = await mega.getByDrawing(lottery, parseInt(drawing))   

    // return res.render('pages/mega', {
    //     list
    // })
}

