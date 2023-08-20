const prompt = require("prompt-sync")()

let contador = 0

console.log("Informe o nome do aluno ou fim para sair:")

do{
    const nome= prompt("Nome do cliente:")

    if( nome == "Fim" || nome == "fim"){
        break
    }

    const saldo = Number(prompt("Saldo da conta R$:"))

    if( saldo  < 0){
        contador = contador + 1
    }

}while(true)

console.log("-".repeat(40))

if(contador == 0 ){
    console.log("Não há clientes com saldos negativos!")
}else{
console.log(`Nº de clientes com saldo negativo:${contador}`)}