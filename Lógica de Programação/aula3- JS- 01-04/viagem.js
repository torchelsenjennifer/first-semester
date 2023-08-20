const prompt = require("prompt-sync")()

//entradas de dados
const cidade = prompt("cidade:")
const tempoDias = Number(prompt("Nº de dias:"))
const tempoHoras = Number(prompt("Nº horas:"))

// processamento

const total = (tempoDias * 24) + tempoHoras

console.log(`Duração da viagem: ${total}`)
