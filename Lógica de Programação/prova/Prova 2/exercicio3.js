const prompt = require("prompt-sync")();

const numero = Number(prompt("Número:"));
const simbolo = prompt("simbolo:");

console.log("\n")


let soma =""


for(let i= 1; i<=numero;i++){
       soma = soma + `${simbolo} ` 
}

for(let j=1; j<= numero; j++){
    console.log(`${soma}`)
}

