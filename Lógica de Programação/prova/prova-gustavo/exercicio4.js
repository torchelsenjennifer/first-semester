const prompt = require("prompt-sync")();

const num = Number(prompt("Número:"));

let divisores = "";
let total = 0;

for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    if (i < num - 1) {
      divisores = divisores + i + ",";
    }
    total = total + i;
  }
}

console.log(`Divisores do ${num}: ${divisores} `);
console.log(`Soma dos divisores: ${total}`);
if (total == num) {
  console.log(`Portanto, ${num}  é um número PERFEIRO`);
} else {
  console.log(`Portanto, ${num} NÃO é um número perfeito!`);
}
