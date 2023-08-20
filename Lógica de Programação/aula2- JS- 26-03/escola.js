const prompt = require("prompt-sync")()

//entrda de dados
const nome = prompt("Nome do aluno: ")
const nota1 = Number(prompt("1ª Nota: "))
const nota2 = Number(prompt("2ª Nota: "))

//processamento
const media = (nota1 + nota2)/2

//saida de dados
console.log(`Sua média ${nome}: ${media.toFixed(1)}`)