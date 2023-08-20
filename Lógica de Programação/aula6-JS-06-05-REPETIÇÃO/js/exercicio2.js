const prompt = require("prompt-sync")()

const num = Number(prompt("Número:"))


let resposta = ""

for(let i=2; i<=num; i=i+2){
    resposta = resposta + i + " "

}
console.log(`Pares entre 1 e ${num}: ${resposta} `)
