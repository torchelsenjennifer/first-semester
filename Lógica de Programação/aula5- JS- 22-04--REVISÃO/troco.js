const prompt = require("prompt-sync")()

const conta = Number(prompt("Valor da conta:"))
const pago = Number(prompt("Valor pago:"))

let total = pago - conta

if(conta<pago){
    console.log(`TrocoR$: ${(total).toFixed(2)}`)
}else if(conta == pago){
    console.log("Obrigado! Volte sempre!")
}else{
    console.log(`Ops...Faltou R$:${(conta-pago).toFixed(2)}`)
}