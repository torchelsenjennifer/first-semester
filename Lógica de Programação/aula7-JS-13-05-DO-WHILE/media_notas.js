const prompt = require("prompt-sync")()

//contador e acumulador

let contador =0
let soma = 0

console.log("Informe o nome do aluno ou fim para sair:")

do{

    const nome= prompt("Nome do aluno:")
    if( nome == "Fim"){
        break
    }
    
    const nota = Number( prompt("Nota:"))
    contador = contador + 1
    soma = soma + nota
    
}while(true)

const media = soma/contador

console.log("-".repeat(40))
console.log(`Media das notas da turma: ${media.toFixed(1)}`)