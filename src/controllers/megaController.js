// import { Request, Response } from 'express'
import { mega } from '../models/Mega.js'

export const latest = async (req, res) => {
    const getLatest = await mega.getLatest()
    const list = getLatest.dezenas

    return res.render('pages/mega', {
        list
    })
}

export const byDrawing = async (req, res) => {
    const query = req.query.s
    const drawInfo = await mega.getByDrawing(query)

    let concurso = drawInfo.concurso
    let date = drawInfo.data
    let dezenas = drawInfo.dezenas
    let acumulou = drawInfo.acumulou
    let acumuladaProxConcurso = drawInfo.acumuladaProxConcurso

    mega.create(concurso, date, dezenas, acumulou, acumuladaProxConcurso)

    let acertos = []

    const apostadas = [['11', '27'], ['40', '58']]

    for (let n of apostadas) {
        let match = n.filter(num => dezenas.includes(num))
        acertos.push(match)
    }

    return res.render('pages/mega', {
        concurso,
        date,
        dezenas,
        acertos
    })

}