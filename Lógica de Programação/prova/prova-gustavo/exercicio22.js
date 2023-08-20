const prompt = require("prompt-sync")();

let cont = 0;
let total = 0;
let frasco = 0;

console.log("Campanha de Vacinação");
console.log("-".repeat(30))
do {
  const crianca = prompt("Criança:");
  const gotas1 = Number(prompt("Nº de gotas:"));
  console.log(`${crianca} vacinado(a) com ${gotas1} gotas`);

  total = total + gotas1;
  cont++;
  
  if (total >= 30) {
    frasco++;
  }

  continua = prompt("Deseja continuar(S/N): ");
} while (continua == "S" || continua == "s");

console.log("-".repeat(30))
console.log(`Crianças vacinadas: ${cont}`);
console.log(`Total de gotas: ${total}`);
console.log(`Nº de frascos abertos:${frasco}`);
