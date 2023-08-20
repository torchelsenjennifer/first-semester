const prompt = require("prompt-sync")();

let cont = 0;
let total = 0 ;
do {
  const primeiro = prompt("Nome do primeiro jogador:");
  const resultado1 = Number(prompt("Sets vencidos:"));
  const segundo = prompt("Nome do segundo jogador:");
  const resultado2 = Number(prompt("Sets vencidos:"));


  if (resultado1 > resultado2) {
    console.log(`${primeiro} ganhou o jogo por ${resultado1} x ${resultado2}`);
     total = total + resultado1 + resultado2
  } else {
    console.log(`${segundo} ganhou o jogo por ${resultado2} x ${resultado1}`);
    total = total +  resultado1 + resultado2
  }
  
  cont++;

  continua = prompt("Deseja continuar(S/N): ");

} while (continua == "S" || continua == "s");

console.log(`Foram disputadas ${cont} partidas`);
console.log(`Total de setes: ${total}`)
