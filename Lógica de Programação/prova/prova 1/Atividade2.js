const prompt = require("prompt-sync")()

const quantidade = Number(prompt("Quantidade total de ovos da fazenda:"))

total =  Math.floor(quantidade/12) 

console.log(`Pode-se preencher ${total} caixa de ovos.`)