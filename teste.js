let apostas = [['01', '02']]
let dezenas = ['03', '04']

let acertos = []

// for (let n of apostas) {
//     let match = n.filter(num => dezenas.includes(num))
//     acertos.push(match)
// }

console.log(apostas.length);

let h = apostas.filter(n => dezenas.includes(n) ? acertos.push(n) : '')

console.log(acertos);