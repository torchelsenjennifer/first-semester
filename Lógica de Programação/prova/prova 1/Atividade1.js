const prompt = require("prompt-sync")()

const filme = prompt("Filme:")
const duração = Number(prompt("Duração:"))

console.log(`A duração do filme ${filme} é de ${duração}`)

