import axios from "axios";

interface IData {
    nome: string,
    data: string,
    concurso: number,
    dezenas: string[],
    premiações: object[],
    acumulou: boolean,
    acumuladaProxConcurso: string,
}

export async function getData<T = unknown>(url: string) {
    const { data: AxiosResponse<IData> } = await axios.get<IData[]>(url)

return data
}