const prompt = require("prompt-sync")()

const nome = prompt("Nome do Aluno:")
const alunos = Number(prompt("Quantidade de alunos:"))
const mensagens = Number(prompt("Quantidade de mensagens:"))

x = (alunos * 0.5/100)

if(mensagens < x){
    console.log(`${nome}, temos que melhorar sua popularidade!`)
}else{
    console.log(`${nome}, você é bem popular na turma!`)
}



