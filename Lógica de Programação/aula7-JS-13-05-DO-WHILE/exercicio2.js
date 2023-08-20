const prompt = require("prompt-sync")()

console.log("Digite a descrição da conta ou fim para sair:")

//variaveis aculadores
let total=0

while(true){

const descricao = prompt("Conta:")
if(descricao== "FIM" || descricao=="fim"){
  break
}

const valor = Number(prompt("Valor da conta:"))

total = total + valor
}
console.log("=".repeat(100))
console.log(`Total das contas: ${total}`)
