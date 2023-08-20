const prompt = require("prompt-sync")()

let pares=""
let impares = ""
const num = Number(prompt("Número:"))

for(let i=2; i<=num; i=i+2){
    if(i==num){
        pares = pares + i
    }else{ 
        pares = pares + i + ", "}
}
for(let i=1; i<=num; i=i+2){
    if(i==num - 1){
        impares = impares + i
    }else{ 
        impares = impares + i + ", "}
}
console.log(`Pares até ${num}: ${pares} `)
console.log(`Impares até ${num}: ${impares} `)

