import { Request, Response } from 'express'
import { mega } from '../models/Mega'

export const latest = async (req: Request, res: Response) => {
    let list = await mega.getLatest()

    return res.render('pages/mega', {
        list
    })
}

export const byDrawing = async (req: Request, res: Response) => {
    const query = req.query.s as string

    const list = await mega.getByDrawing(query)

    const dezenasApostadas = ['01', '02', '03', '04', '05', '06']

    let numerosAcertados = list.dezenas.map(s => (dezenasApostadas.includes(s) ? s : ''))

    console.log(numerosAcertados);

    return res.render('pages/mega', {
        list
    })
}

