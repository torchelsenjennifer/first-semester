const prompt = require("prompt-sync")()

const num = Number(prompt("Número:"))

for(let i=num; i>=1; i=i-1){
    console.log(i)
}
console.log("Fogo!")