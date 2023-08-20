const prompt = require("prompt-sync")()

// entrada de dados
const num = Number(prompt("Número: "))

// processamento 
const vizinho1 = num - 1
const vizinho2 = num + 1

//saída de dados
console.log(`vizinho do ${num}: ${vizinho1} e ${vizinho2}`)