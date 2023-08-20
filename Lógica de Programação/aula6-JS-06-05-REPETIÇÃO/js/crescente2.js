const prompt = require("prompt-sync")()

const num = Number(prompt("Número:"))

let resposta = ""

for(let i=1; i<=num; i=i+1){
    resposta = resposta + i + ""
    // EVOLUÇÃO PARA A CRIAÇÃO DO VAZIO
    console.log(resposta) 

}
console.log(`Números entre 1 e ${num}: ${resposta}`)
