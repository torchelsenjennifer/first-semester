const prompt = require("prompt-sync")()

//entrada de dados
const produto = prompt("Produto:")
const preco = Number(prompt("Preco R$:"))

//processamento
const promocao = preco * 2.50
//const promocao = (preco * 2) + (preco/2)
const desconto = preco * 0.50

//saida de dados
console.log(`Promocao do produto= ${produto}`)
console.log("---------------------------------")
console.log(`Leve 3 por apenas R$:  ${promocao.toFixed(2)}`)
console.log(`O 3º custa só R$: ${desconto.toFixed(2)}`)

