export interface Premiacao {
    acertos: string;
    vencedores: number;
    premio: string;
}

export interface ILottery {
    loteria: string;
    nome: string;
    concurso: number;
    data: string;
    local: string;
    dezenas: string[];
    premiacoes: Premiacao[];
    estadosPremiados: any[];
    acumulou: boolean;
    acumuladaProxConcurso: string;
    dataProxConcurso: string;
    proxConcurso: number;
    timeCoracao?: any;
    mesSorte?: any;
}