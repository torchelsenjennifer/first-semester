const prompt = require("prompt-sync")()

// entrada de dados
const conta = Number(prompt("Valor da conta R$: "))
const num = Number(prompt("Número de clientes: "))

// Processamento
const valorCliente= conta/num

//saida
console.log(`Valor por cliente R$:  ${valorCliente.toFixed(2)}`)
//console.log("Valor por cliente R$: + valorCliente.toFixed(2))