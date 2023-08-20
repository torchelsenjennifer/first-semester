const prompt = require("prompt-sync")();

let soma = ""

const nome = prompt("Nome:")
const numero = Number(prompt("Número:"));

for(let i = 1; i<= numero; i++){
    soma = soma + "*"
}

console.log(soma + nome + soma)