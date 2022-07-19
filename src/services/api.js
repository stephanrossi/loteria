import axios from "axios";
import dotenv from 'dotenv';

dotenv.config()

// export interface IPremiacoes {
//     acertos: string;
//     vencedores: number;
//     premio: string;
// }

// export interface IData {
//     loteria: string;
//     nome: string;
//     concurso: number;
//     data: string;
//     local: string;
//     dezenas: string[];
//     premiacoes: IPremiacoes[];
//     estadosPremiados: string[];
//     acumulou: boolean;
//     acumuladaProxConcurso: string;
//     dataProxConcurso: string;
//     proxConcurso: number;
//     timeCoracao?: any;
//     mesSorte?: any;
// }

export default axios.create({
    baseURL: process.env.API_BASE_URL
})