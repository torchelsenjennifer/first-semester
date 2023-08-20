const prompt = require("prompt-sync")();

let contador = 0;
let soma = 0;
let maior = 0;
console.log("Informe número ou 0 para sair:");

do {
  const numero = Number(prompt("Número:"));

  if (numero == 0) {
    break;
  }
  contador = contador + 1;
  soma = soma + numero;
  if (numero >= maior) {
    maior = numero;
  }
} while (true);

console.log("-".repeat(40));

console.log(`Números digitados: ${contador}`);
console.log(`Soma dos números: ${soma}`);
console.log(`Maior número: ${maior}`);
