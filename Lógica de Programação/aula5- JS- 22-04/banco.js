const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor do Saque: "))

if (valor % 10 == 0) { // % SIGNIFICA MODULO
const notas = valor / 10
console.log(`Será pago com ${notas} notas de R$ 10,00`)
} else {
console.log(`Não é possível pagar ${valor} com notas de R$ 10,00`)
}