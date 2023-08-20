const prompt = require("prompt-sync")()

const num = Number(prompt("Número:"))

console.log(`\nNúmeros entre ${num} e 1: `)

for(let i=num; i>=1; i=i-1){
    console.log(i)
}