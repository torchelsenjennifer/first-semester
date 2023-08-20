const prompt = require("prompt-sync")()

const diciplina = prompt("Nome da diciplina:")
const primeiro = Number(prompt("Pontos obtiddos no 1ª semestre:"))
const segundo = (prompt("Pontos obtidos no 2ª semestre:"))


if(primeio=>0 && primeio<=30 || segundo>=0 && segundo<=30){
    soma = primeiro + segundo
    console.log(`Soma dos pontos ${soma}`)
    if(soma<20){
        console.log(`Você está reprovado em ${diciplina}`)
    }else if(soma<60){
        falta = 60 - soma
        console.log(`Você precisa de ${falta} no 3º trimestre em ${diciplina}`)
    }else{
        console.log(`Você está aprovado em ${diciplina}`)
    }
}
    
