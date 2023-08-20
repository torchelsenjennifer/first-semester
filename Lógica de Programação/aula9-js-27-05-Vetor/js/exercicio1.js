const prompt = require("prompt-sync")()

const alunos = []
const notas = []
const aprovados = []
const reprovados = []

do {

    const x = prompt("Digite o nome do aluno: ")
    const y = Number(prompt("Digite a nota do aluno: "))

    alunos.push(x)
    notas.push(y)

    const continuar = prompt("Deseja continuar S/N? ")
    if (continuar == "N" || continuar == "n") {
        break
    }

} while (true)

for (let i = 0; i < alunos.length; i++) {
    if (notas[i] >= 7 && notas[i] <= 10) {
        aprovados.push(`${alunos[i]} - Nota ${notas[i]}`)
    } else {
        reprovados.push(`${alunos[i]} - Nota ${notas[i]}`)
    }
}

console.log("\nLista de Aprovados")
console.log("-".repeat(40))

for (let i = 0; i < aprovados.length; i++) {
    console.log(aprovados[i])
}

console.log("\nLista de Reprovados")
console.log("-".repeat(40))

for (let i = 0; i < reprovados.length; i++) {
    console.log(reprovados[i])
}
