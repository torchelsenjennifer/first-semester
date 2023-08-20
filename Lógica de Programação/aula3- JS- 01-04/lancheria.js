const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor do lanche:"))
const bairro  = prompt("Bairro de Entrega:")

//quando a variavel pode receber outro valor, declara-se como let
let taxaEntrega = 5

if(bairro == "Laranjal"){ //comparação com dois sinais de igual
    taxaEntrega = 10
}

if (valor >= 200)
{
    taxaEntrega = 0
}




const total = valor + taxaEntrega

console.log(`Total com tax de entrega R$: ${total.toFixed(2)}`)
