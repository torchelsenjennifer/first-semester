const prompt = require("prompt-sync")()

const num = Number(prompt("Número:"))


let resposta = ""
// como quer mostrar os 10 números seguintes, soma 10 no número digitado para realizar tantas vezes
for(let i=num +1; i<num+10; i++){
    resposta = resposta + i + ", "

}
console.log(`Seguintes ao ${num}: ${resposta} ${num+10}.`)
//acrescenta o ultimo numero somando em ${num+10} para tira a virgula do ultimo

//outra maneira
let result = ""

for (let i = 1 ; i <= 10; i = i +1){
     result = result +(i + num)
     if (i == 10){
        result = result
    }else{
      result = result + ","
    }
}
console.log(`\nSeguintes ao ${num}: ${result}.`)