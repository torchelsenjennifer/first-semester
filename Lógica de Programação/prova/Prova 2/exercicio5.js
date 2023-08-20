const prompt = require("prompt-sync")();

let ordem = 1;
cont = 0;
const alunos = [];

console.log("Informe os competidores ou fim para sair")
console.log("=".repeat(30))

do {
    const x = prompt(`${ordem} ` + "º " + " Aluno(a): ")
    if (x == "fim" || x == "Fim") {
        break
    }
    alunos.push(x);
    ordem++
    cont++


} while (true)

console.log("\n")
console.log("Lista dos competidores:")
console.log("-".repeat(30))

for (let i = cont; i>0; i--) {
    console.log(`${alunos[i]}`);
}