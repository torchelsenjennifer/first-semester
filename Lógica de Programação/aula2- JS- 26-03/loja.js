const prompt = require("prompt-sync")()

//entrada de dados
const produto = prompt("Produto: ")
const preco =  Number(prompt("Preco R$: "))

//processamento
const avista = preco -(preco * 0.10)
const parcela = preco/3

//saida de dados
//\n => quebra de linha, uma linha em branco
console.log(`\nPromoção do produto: ${produto}`)
console.log("-".repeat(30))
console.log(`Avista R$: ${avista.toFixed(2)}`)
console.log(`Ou em 3x de R$: ${parcela.toFixed(2)}`)
