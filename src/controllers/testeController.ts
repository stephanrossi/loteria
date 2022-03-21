import { Request, Response } from 'express';
import prismaClient from '../database/prismaClient';

export const getMega = async (req: Request, res: Response) => {
    const { concurso, data, dezenas, premiacoes, acumulou, acumulado_prox_concurso } = req.body

    const loto = await prismaClient.mega.create({
        data: {
            concurso,
            data: new Date(data),
            dezenas,
            premiacoes,
            acumulou,
            acumulado_prox_concurso
        }
    })
    console.log(loto);

    return res.json(loto)
}
