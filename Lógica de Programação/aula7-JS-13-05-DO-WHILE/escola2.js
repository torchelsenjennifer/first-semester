const prompt = require("prompt-sync")()

console.log("Informe o nome do aluno ou 'Fim' para sair")

do { //faça
    const nome = prompt("Nome do Aluno:")
    if (nome == "fim" || nome =="FIM") {
        break //sai do lado de repetição
    }
    const nota = Number(prompt("Nota na Prova:"))

    if (nota >= 7) {
        console.log(`Parabéns ${nome}! Você foi aprovado.`)
    } else {
        console.log(`Ops ${nome}. Você foi reprovado...`)
    }

    continua = prompt("Deseja continuar (S/N):")


} while (true) //enquanto isso for verdade

console.log("Bye, bye...")