const prompt = require("prompt-sync")();

const num = Number(prompt("Número:"));

if (num >= 5) {
  for (let i = 0; i <= num; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
}
console.log("Ops...Número deve ser maior igual a 5")
