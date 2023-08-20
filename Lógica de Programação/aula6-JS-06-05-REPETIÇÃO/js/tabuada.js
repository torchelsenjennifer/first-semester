const prompt = require("prompt-sync")()

const num = Number(prompt("Número:"))

//console.log()
// \n para deixar uma linha em branco
console.log(`\nTabuada do ${num}`)
console.log("-".repeat(30))  //repetir 30 vezes o traço


//para i (incrmentando), começando em 1
//enquanto que 1 for <=10
//a cada repetição (volta), i deve receber i+ 1
for(let i=1; i<=10; i++){
  console.log(`${num} x ${i} = ${num * i }`)
}
console.log("-".repeat(30))

