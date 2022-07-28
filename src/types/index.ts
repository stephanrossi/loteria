export interface ILottery extends IBet {
    loteria_i: number
    dezenas: string[]
    date: string
    dezenas_sorteadas: string[]
    acumulou: boolean
    acumuladaProxConcurso: string
}

export interface IBet {
    loteria_id?: number
    loteriaId: number
    concurso?: number
    concursoNumber:number
    dezenas_apostadas: string[]
}

export interface Premiacao {
    acertos: string;
    vencedores: number;
    premio: string;
}

export interface Cidade {
    cidade: string;
    vencedores: string;
    latitude: string;
    longitude: string;
}

export interface EstadosPremiado {
    nome: string;
    uf: string;
    vencedores: string;
    latitude: string;
    longitude: string;
    cidades: Cidade[];
}

export interface ILotteryData {
    concurso: number;
    data: string;
    dezenas: string[];
    acumulou: boolean;
    acumuladaProxConcurso: string;
}

export interface axiosReturn {
    loteria: string;
    nome: string;
    concurso: number;
    data: string;
    local: string;
    dezenas: string[];
    premiacoes: Premiacao[];
    estadosPremiados: EstadosPremiado[];
    acumulou: boolean;
    acumuladaProxConcurso: string;
    dataProxConcurso: string;
    proxConcurso: number;
    timeCoracao?: any;
    mesSorte?: any;
}