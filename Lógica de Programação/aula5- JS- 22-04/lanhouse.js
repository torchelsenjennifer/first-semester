const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor da Hora: "))
const tempo = Number(prompt("Tempo de Uso: "))

const pagar = Math.ceil(tempo / 60) * valor  //ARREDONDAR PARA CIMA
console.log(`Pagar R$: ${pagar.toFixed(2)}`)
