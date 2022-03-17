import axios from "axios";
import dotenv from 'dotenv';

dotenv.config()

export interface IData {
    nome: string,
    data: string,
    concurso: number,
    dezenas: string[],
    premiações: object[],
    acumulou: boolean,
    acumuladaProxConcurso: string,
}

export default axios.create({
    baseURL: process.env.API_BASE_URL
})