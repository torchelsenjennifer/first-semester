const prompt = require("prompt-sync")()

const produtos = [] // declaração dos vetores (array) produtos e precos
const precos = []

do {

    const x = prompt("Produto: ") // lê as 2 variáveis informadas pelo usuário
    const y = Number(prompt("Preço R$: "))

    produtos.push(x)   // adiciona aos vetores
    precos.push(y)

    const continua = prompt("Continuar (S/N): ")
    if (continua == "N" || continua == "n") {
        break
    }

} while (true);

console.log("\nLista de Compras")
console.log("-".repeat(40))

const tam = produtos.length // obtém o tamanho do vetor (número de elementos)
let soma = 0
//soma = " Ana"
//nome.padEnd(10)

for (let i=0; i<tam; i++) {
    console.log(`${produtos[i].padEnd(20)} - R$ ${precos[i].toFixed(2)}`)
    soma = soma + precos[i]
}

console.log("-".repeat(40))
console.log(`Total da compra R$: ${soma.toFixed(2)}`)
