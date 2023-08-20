const prompt = require("prompt-sync")()

const num = Number(prompt("Número:"))

let crescente=""
let decrescente = ""

for(let i=1; i< num; i++){
    crescente = crescente + i + ", "
}
for(let j=num ; j>= 1; j--){
    if(j==1){
        decrescente = decrescente + j
    }else
    decrescente = decrescente + j + ", "
}

console.log(`Contagem: ${crescente}${decrescente} `)

