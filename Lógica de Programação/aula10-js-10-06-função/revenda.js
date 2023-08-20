const prompt = require("prompt-sync")()

const modelos = []
const precos = []

function incluir() {

    console.log("\nInclusão de Veículos")
    console.log("-".repeat(40))
    const x = prompt("Modelo do Veículo: ")
    const y = Number(prompt("Preço R$: "))
    modelos.push(x)
    precos.push(y)

    console.log("Ok! Veículo Cadastrado com Sucesso")
}



function listar() {

    console.log("\nListagem de Veículos")
    console.log("=".repeat(40))
    console.log("Nº Modelo..................: Preço R$.:")
    console.log("---------------------------------------")

    for (let i=0; i < modelos.length; i=i+1) {

        console.log(` ${i+1} ${modelos[i].padEnd(25)} ${precos[i].toLocaleString("pt-br", {minimumFractionDigits: 2}).padStart(10)}`)
    }
}

function totalizar() {
    console.log("\nTotal em Estoque")
    console.log("=".repeat(40))
    if (precos.length == 0) {
        console.log("* Obs.: Não há veículos cadastrados")
        return
    }

    let total = 0

    for (const preco of precos) {
        total = total + preco
    }

    const num = precos.length
    const prMedio = total / num

    console.log(`Nº de Veículos Cadastrados: ${num}`)
    console.log(`Soma do Preço dos Veículos: ${total.toLocaleString("pt-br", {minimumFractionDigits: 2})}`)    
    console.log(`Preço Médio dos Veículos..: ${prMedio.toLocaleString("pt-br", {minimumFractionDigits: 2})}`)

}

// --------- Programa Principal-----------------------------------------

do {

    console.log("\nRevenda Avenida - Controle de Veículos")
    console.log("=".repeat(40))
    console.log("1. Incluir Veículos")
    console.log("2. Listar Veículos")
    console.log("3. Total de Veículos Cadastrados")
    console.log("4. Finalizar")
    const opcao = Number(prompt("Opção: "))

    if (opcao == 1) {
        incluir()
    } else if (opcao == 2) {
        listar()
    } else if (opcao == 3) {
        totalizar()
    } else if (opcao == 4) {
        break
    } else {
        console.log("Opção Inválida")
    }
} while (true)