const prompt = require("prompt-sync")()

let aprovado =0
let reprovado =0
console.log("Informe o nome do aluno ou fim para sair:")

do{
    const nome= prompt("Nome do aluno:")
    if( nome == "Fim"){
        break
    }

    const conceito= prompt("Conceito do aluno(A, B, C e D):")
    
    if(conceito == "A" || conceito =="B" || conceito =="C"){
        aprovado = aprovado + 1
    } else if(conceito == "D"){
        reprovado = reprovado +1
    }
}while(true)

console.log("-".repeat(40))
console.log(`Aprovados:${aprovado} e reprovados:${reprovado}`)