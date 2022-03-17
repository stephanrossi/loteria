import api from '../services/api'
import { Request, Response } from 'express'

export const mega = async (req: Request, res: Response) => {
    const numeros_sorteados = []

    try {
        const { data } = await api.get('/mega-sena/latest')

        for (let i in data.dezenas) {
            numeros_sorteados.push({ 'dezenas': data.dezenas[i] })
        }

        return res.render('pages/mega', {
            sorteio: numeros_sorteados,
            data
        })
    } catch (e) {
        console.log(e);
        throw new Error('Algum erro ocorreu')
    }
}

