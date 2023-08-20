const prompt = require("prompt-sync")();

const simb1 = prompt("Primeiro Simbolo:");
const simb2 = prompt("Segundo Simbolo:");
const num = Number(prompt("Número:"));

let simbolo = "";

for (let i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    simbolo = simbolo + simb2;
  } else if (i % 2 == 1) {
    simbolo = simbolo + simb1;
  }
}
console.log(simbolo)

