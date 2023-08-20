const prompt = require("prompt-sync")()

const nome = prompt("Nome:")
const meses = Number(prompt("Quantidade de meses:"))

ano= Math.floor(meses/10)
mes= meses%10

if(meses<=12){
    console.log(`${nome} possui ${ano} ano(s) e ${mes} meses.`)
} else if(meses>12){
    console.log(`${nome} possui ${ano} ano(s).`)
}
