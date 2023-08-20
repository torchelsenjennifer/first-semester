const prompt = require ("prompt-sync")()

const modelo = prompt("Modelo:")
const marca = prompt("Marca:")
const preco = Number(prompt("PreçoR$:"))


// declar uma variavel fora do bloco if e else
let desconto 

if(marca=="Fiat"){
    desconto = preco * 0.10
    // console.log(desconto)
}else{
    desconto = preco * 0.20
    // console.log(desconto)
}

const avista = preco - desconto
console.log(`Desconto de R$: ${desconto.toFixed(2)}`)
console.log(`A Vista R$: ${avista.toFixed(2)}`)