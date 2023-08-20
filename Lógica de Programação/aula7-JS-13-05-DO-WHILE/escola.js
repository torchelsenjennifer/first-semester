const prompt = require("prompt-sync")()

let continua = "" 

do { //faça
    const nome = prompt("Nome do Aluno:")
    const nota = Number(prompt("Nota na Prova:"))

    if (nota >= 7) {
        console.log(`Parabéns ${nome}! Você foi aprovado.`)
    } else {
        console.log(`Ops ${nome}. Você foi reprovado...`)
    }
    
    continua = prompt("Deseja continuar (S/N):")


} while (continua == "S" || continua == "s") //enquanto isso

console.log("Bye, bye...")