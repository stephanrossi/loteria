const LotteryStringtoInt = async (lotteryString: string) => {
    // if (typeof lotteryString !== 'string') {
    //     return "Dado enviado não é uma string"
    // }

    switch (lotteryString) {
        case 'mega-sena':
            return 1
            break;
        case 'quina':
            return 2
            break;
        case 'lotomania':
            return 3
            break;
        default:
            // return "Loteria não cadastrada."
            break;
    }
}

export default LotteryStringtoInt