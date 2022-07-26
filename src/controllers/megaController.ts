// import { Request, Response } from 'express'
import { mega } from '../models/Mega'
import { Response, Request } from 'express';

import { IBet } from '../types/index.js';

export const getLatest = async (req: Request, res: Response) => {
    const getLatest = await mega.getLatest()
    const list = getLatest.dezenas

    return res.render('pages/mega', {
        list
    })
}

export const getByDrawing = async (req: Request, res: Response) => {
    try {
        const { loteria_id, draw } = req.body

        let drawInfo = await mega.getLotteryDataByDrawing(draw)

        let concurso = drawInfo!.concurso
        let date = drawInfo!.data
        let dezenas = drawInfo!.dezenas
        let acumulou = drawInfo!.acumulou
        let acumuladaProxConcurso = drawInfo!.acumuladaProxConcurso

        await mega.fillDrawingTable(loteria_id, concurso, date, dezenas, acumulou, acumuladaProxConcurso)

        let bets = await mega.getBetByDrawing(loteria_id, draw)

        let acertos: string[] = []

        if (bets![0 as keyof typeof bets]['dezenas_apostadas'].length != 1) {
            bets![0 as keyof typeof bets]['dezenas_apostadas'].filter((n: string) => drawInfo!.dezenas.includes(n) ? acertos.push(n) : '')
        } else {
            for (let n of bets![0]['dezenas_apostadas']) {
                let match = n.filter((num: string) => drawInfo!.dezenas.includes(num))
                acertos.push(match)
            }
        }

        return res.render('pages/mega', {
            concurso,
            date,
            dezenas,
            acertos,
            acumulou,
            acumuladaProxConcurso
        })
    } catch (e) {
        console.log(e);
    }

}

export const postBet = async (req: Request, res: Response) => {
    const { loteria_id, concurso, dezenas_apostadas }: IBet = req.body

    try {
        let createBet = await mega.makeOrUpdateBet({ loteria_id, concurso, dezenas_apostadas })

        let sorteioId = await mega.getSorteioId(concurso)

        let betTable = await mega.fillBetTable(sorteioId!.id, createBet!.id)

        return res.status(201).json({ betTable })
    } catch (e) {
        console.log(e);
    }

}