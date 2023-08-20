const prompt = require("prompt-sync")()

const num = Number(prompt("Número:"))

let resposta = ""

for(let i=1; i<=num; i=i+1){
    resposta = resposta + i + ","
}
console.log(`Números entre 1 e ${num}: ${resposta}`)

// formas de retirar a útima virgula

// Forma 1) acrescentando uma condição dentro da repetição
let resposta2 = ""

for(let i=1; i<=num; i=i+1){
    if( i == num){
       resposta2 = resposta2 + i  
    }else{
        resposta2 = resposta2 + i + ","
    }
}
console.log(`\nNúmeros entre 1 e ${num}: ${resposta2}`)


//forma 2) Isolando o útimo número
let resposta3=""

for(let i=1; i<num; i=i+1){
    resposta3 = resposta3 + i + ", "
}
// quando finalizar o for, anexa o último número
resposta3 = resposta3 + num 

console.log(`\nNúmeros entre 1 e ${num}: ${resposta3}`)


//forma 3) Isolando o último número
let resposta4="1"

for(let i=2; i<=num; i=i+1){
    resposta4 = resposta4 + "," + i
}
// anexa primeiro a virgula e depois o número
resposta3 = resposta3 + num

console.log(`Números entre 1 e ${num}: ${resposta4}`)