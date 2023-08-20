// adiciona o pacote para entrada de dados via prompt ao projeto
const prompt = require("prompt-sync")()

// entrada
const num = Number(prompt("Número: "))

// processamento
const dobro = num * 2

//saída de dados
console.log("Dobro é: " + dobro)