const prompt = require("prompt-sync")();

const alunos = [];
const notas = [];

do {
  // lê as 2 variáveis informadas pelo usuário

  const x = prompt("Nome do Aluno: ");
  const y = Number(prompt("Nota: "));

  // adiciona aos vetores

  alunos.push(x);
  notas.push(y);

  const continua = prompt("Continuar (S/N): ");
  if (continua == "N" || continua == "n") {
    break;
  }
} while (true);

console.log("\nLista de Alunos");
console.log("-".repeat(40));

// alunos.length obtém o tamanho do vetor (número de alunos inseridos)

for (let i = 0; i < alunos.length; i++) {
  if (notas[i] >= 7) {
    console.log(`${alunos[i]} - ${notas[i].toFixed(1)} => Aprovado(a)`);
  } else {
    console.log(`${alunos[i]} - ${notas[i].toFixed(1)} = > Reprovado(a)`);
  }
}
