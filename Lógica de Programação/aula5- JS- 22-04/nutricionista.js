const prompt = require("prompt-sync")()

const nome = prompt("Nome do Paciente:")
const sexo = prompt("Sexo(M/F):")
const altura = Number(prompt("Altura: "))

let peso
//or (ou) em JavaScript => ||
//and (e) em JavaScript => &&

if(sexo == "M"  || sexo == "m"){
    peso = (72.7 * altura) - 58
}else{
    peso = (62.1 * altura) - 44.7
}

console.log(`${nome}, seu peso ideal é: ${peso.toFixed(3)}kg`)

