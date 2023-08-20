const prompt = require("prompt-sync")()

//entrada de dados
const modelo = prompt("Modelo: ")
const preco =  Number(prompt("Preco R$: "))

// Processamento
const entrada = preco * 0.50
const parcela = entrada / 12

// saída de dados
console.log('Promoção do veículo ${modelo}')
console.log("-".repeat(40))
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12 x de R$: ${parcela.toFixed(2)}`)
