const prompt = require("prompt-sync")()

const modelo = prompt("Modelo:")
const avaliacao = Number(prompt("Valor de avaliação:"))
const ano = Number(prompt("Ano de fabricação:"))

const seguro =  avaliacao * 0.04
const desconto = (2022 - ano) * 50
const pagar = seguro - desconto

console.log() // gera uma linha em branco
console.log(`Proposta de seguro - ${modelo}`)
console.log(`-------------------------------`)
console.log(`Valor do seguro R$: ${seguro.toFixed(2)}`)
console.log(`Valor do desconto R$: ${desconto.toFixed(2)}`)
console.log(`Valor à pagar R$: ${pagar.toFixed(2)}`)
