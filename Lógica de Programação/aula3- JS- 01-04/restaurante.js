// prompt-syncmódulo é uma função que cria funções de prompt, portanto, você precisa chamar prompt-syncpara obter sua função de prompt real.
const prompt = require("prompt-sync")()

//Entrada de dados
const valor = Number(prompt("Valor por kg R$:"))
const consumo = Number(prompt("Quanto cliente serviu(gr):"))

//processamento
const pagar = (consumo/1000) * valor

// saida de dados
console.log(`Valor a pagar R$: ${pagar.toFixed(2)}`)
