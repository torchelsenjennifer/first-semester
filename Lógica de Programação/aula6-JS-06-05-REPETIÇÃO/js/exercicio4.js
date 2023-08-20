const prompt = require("prompt-sync")()

const produto = Number(prompt("Produto:"))
const preco = Number(prompt("Preço:"))

//console.log()
// \n para deixar uma linha em branco
console.log(`\nopções de parcelamento - ${produto}`)
console.log("=".repeat(30))  //repetir 30 vezes o traço



for (let i = 1; i <= 10; i++) {
    console.log(`${i}x de R$: ${(preco/i).toFixed(2)}`)
}
console.log("-".repeat(30))

