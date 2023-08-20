const prompt = require("prompt-sync")()

const brasil = Number(prompt("Hora no Brasil:"))

let franca =  brasil + 5

if(franca > 24 ){
    franca = franca - 24
}

console.log()`Hora na Franca: ${franca}`