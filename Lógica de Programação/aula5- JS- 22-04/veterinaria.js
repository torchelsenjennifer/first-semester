const prompt = require("prompt-sync")()

const peso = Number(prompt("Peso da Ração (kg): "))
const consumo = Number(prompt("Consumo Diário (gr): "))

const dias = Math.floor((peso * 1000) / consumo)
const sobra = (peso * 1000) % consumo
console.log(`A ração irá durar ${dias} dias`)


if (sobra > 0) {
console.log(`Sobra ${sobra}gr da ração`)
}
