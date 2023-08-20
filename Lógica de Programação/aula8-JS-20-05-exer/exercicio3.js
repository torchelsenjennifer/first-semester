const prompt = require("prompt-sync")();

let divisor = "";

const numero = Number(prompt("Número:"));

for (let i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    divisor = divisor + i + " ";
  }
}
console.log(`Divisores do ${numero}: ${divisor}`);