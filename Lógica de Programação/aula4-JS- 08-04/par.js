const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

const resto = num % 2

if (resto == 0) {
    console.log(`${num} é par`)
} else {
  console.log(`${num} é ímpar`)
}

//outra forma de resolver

//const divisao = num / 2
//if (Number.isInteger(divisao)) {
    //console.log(`${num} é par`)
//} else {
    //console.log(`${num} é ímpar`)
//}