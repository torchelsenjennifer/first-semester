const prompt = require("prompt-sync")()


const nome = prompt("Candidato:")
const acertos = Number(prompt("Número de acertos:"))


if(acertos>= 20 && acertos <= 30){
    console.log(`${nome}, você deve realizar um teste complementar`) 
    //alt + shift + seta para baixo

}else if(acertos< 20){
    //alt + seta para baixo = desloca
    console.log(`${nome}, você foi reprovado do concurso`)
    
}else{
    console.log(`${nome}, você foi aprovado para a segunda fase`)
}


// outra forma de fazer

if(acertos<20){
    console.log(`${nome}, você foi reprovado do concurso`)
}else if(acertos<=30){
    console.log(`${nome}, você deve realizar um teste complementar`) 
}else{
    console.log(`${nome}, você foi aprovado para a segunda fase`)
}

