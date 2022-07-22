// import { Request, Response } from 'express'
import { mega } from '../models/Mega.js'

export const getLatest = async (req, res) => {
    const getLatest = await mega.getLatest()
    const list = getLatest.dezenas

    return res.render('pages/mega', {
        list
    })
}

export const getByDrawing = async (req, res) => {
    try {
        const { loteria_id = 1, draw } = req.body

        let drawInfo = await mega.getByDrawing(draw)

        let concurso = drawInfo.concurso
        let date = drawInfo.data
        let dezenas = drawInfo.dezenas
        let acumulou = drawInfo.acumulou
        let acumuladaProxConcurso = drawInfo.acumuladaProxConcurso

        let drawData = await mega.fillDrawingTable(loteria_id, concurso,
            date,
            dezenas, acumulou, acumuladaProxConcurso)

        let bets = await mega.getBetByDrawing(draw)

        let acertos = []

        bets.dezenas_apostadas.filter(n => drawData.dezenas_sorteadas.includes(n) ? acertos.push(n) : '')

        // if (bets.dezenas_apostadas.length <= 1) {
        //     bets.dezenas_apostadas.filter(n => drawData.dezenas_sorteadas.includes(n) ? acertos.push(n) : '')
        // } else {
        //     for (let n of bets.dezenas_apostadas) {
        //         let match = n.filter(num => drawData.dezenas_sorteadas.includes(num))
        //         acertos.push(match)
        //     }
        // }

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

export const postBet = async (req, res) => {
    const { loteria_id, concurso, dezenas_apostadas } = req.body

    try {
        let createBet = await mega.makeBet(loteria_id, concurso, dezenas_apostadas)

        let sorteioId = await mega.getSorteioId(concurso)

        let betTable = await mega.fillBetTable(sorteioId, createBet.id)

        return res.status(201).json({ betTable })
    } catch (e) {
        console.log(e);
    }

}