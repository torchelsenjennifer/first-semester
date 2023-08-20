const prompt = require ("prompt-sync")()

const nome = prompt("Nome do Aluno:")
const ano = Number(prompt("Ano de Nascimentpo:"))

const idade = 2022 - ano 

console.log(`Idade: ${idade} anos`)

if(idade >= 18){
    console.log(`${nome}, você é maior de idade`)
}else{
    console.log(`${nome}, você é menor de idade`)
}