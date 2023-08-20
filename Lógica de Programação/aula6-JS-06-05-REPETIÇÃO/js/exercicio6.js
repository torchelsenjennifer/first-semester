const prompt = require("prompt-sync")()

const palavra = prompt("Palavra:")
const num = Number(prompt("Número:"))

let soma=""
for (let i = 1; i < num; i++) {
    soma = soma + palavra + " * " 
}

console.log(soma + palavra)