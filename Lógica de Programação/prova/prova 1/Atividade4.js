const prompt = require("prompt-sync")()

const nome = prompt("Nome do jogador:")
const gols = Number(prompt("Quantidade de gols:"))

if(gols==0){
    console.log(`${nome}, você não marcou gols!`)
}else if(gols==1){
    console.log(`${nome}, você fez apenas ${gols} gol!`)
}else{
    console.log(`${nome}, você fez ${gols} gols, parabéns!`)
}
