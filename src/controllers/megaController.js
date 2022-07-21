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
    const query = req.query.s
    const { concurso, data: date, dezenas, acumulou, acumuladaProxConcurso } = await mega.getByDrawing(query)

    let bets = await mega.getBetByDrawing(concurso)
    console.log(bets.apostas.length);
    console.log(bets.apostas);

    let acertos = []

    if (bets.apostas.length <= 1) {
        bets.apostas.filter(n => dezenas.includes(n) ? acertos.push(n) : '')
    } else {
        for (let n of bets.apostas) {
            let match = n.filter(num => dezenas.includes(num))
            acertos.push(match)
        }
    }

    return res.render('pages/mega', {
        concurso,
        date,
        dezenas,
        acertos
    })
}

export const postBet = async (req, res) => {
    const { concurso, apostas } = req.body

    try {
        await mega.createBet(parseInt(concurso), apostas)

        return res.status(201).json(
            {
                "aposta": apostas
            }
        )
    } catch (e) {
        console.log(e);
    }

}