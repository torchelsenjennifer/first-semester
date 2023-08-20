console.clear()
const prompt = require("prompt-sync")()

const produtos = []
const precos = []
const quantidades = []
const precoTotalProduto = []

function incluir() {
    console.clear()
    console.log("Inclusão de Produtos")
    console.log("-".repeat(40))

    const produto = prompt("Produto: ")
    const preco = Number(prompt("Preço R$ (por unidade e Kg): "))
    const quantidade = Number(prompt("Quantidade: "))

    produtos.push(produto)
    precos.push(preco)
    quantidades.push(quantidade)
    precoTotalProduto.push(preco * quantidade)
    console.log("\nProduto cadastrado com sucesso!")
}


function mostrar() {
    console.clear()
    console.log("Resumo do Carrinho")
    console.log("-".repeat(40))

    console.log("\nNº Produto....................... Quantidade................ Preço Unitário (R$)............... Preço Total (R$)................")
    console.log("=".repeat(128))
    for (let i = 0; i < produtos.length; i++) {
        console.log(`${i + 1}. ${produtos[i].padEnd(30)} ${quantidades[i].toString().padEnd(26)} ${precos[i].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).toString().padEnd(34)} ${precoTotalProduto[i].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
    }

    let quantidadeTotal = 0
    let precoTotal = 0

    for (const quantidade of quantidades) {
        quantidadeTotal += quantidade
    }

    for (const preco of precoTotalProduto) {
        precoTotal += preco
    }

    console.log("\n")
    console.log("-".repeat(128))

    console.log(`Soma total de produtos no carrinho: ${quantidadeTotal}`)
    console.log(`Valor total do carrinho: ${precoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
}


function pesquisarProduto() {
    let contador = 0
    const pesqProduto = prompt("Produto: ").toLowerCase()
    console.log("\nNº Produto....................... Quantidade................ Preço Unitário (R$)............... Preço Total (R$)................")
    console.log("=".repeat(128))
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].toLowerCase().includes(pesqProduto) && pesqProduto != "") {
            console.log(`${i + 1}. ${produtos[i].padEnd(30)} ${quantidades[i].toString().padEnd(26)} ${precos[i].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).toString().padEnd(34)} ${precoTotalProduto[i].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
            contador++
        }
    }

    if (contador == 0) {
        console.log("Sua busca não foi encontrada!\n")
    }
}


function pesquisarPreco() {
    let contador = 0
    const pesqPrecoMin = Number(prompt("Preço min.: "))
    const pesqPrecoMax = Number(prompt("Preço máx.: "))

    console.log("\nNº Produto....................... Quantidade................ Preço Unitário (R$)............... Preço Total (R$)................")
    console.log("=".repeat(128))
    for (let i = 0; i < produtos.length; i++) {
        if (precos[i] <= pesqPrecoMax && pesqPrecoMin >= 0 && precos[i] >= pesqPrecoMin) {
            console.log(`${i + 1}. ${produtos[i].padEnd(30)} ${quantidades[i].toString().padEnd(26)} ${precos[i].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).toString().padEnd(34)} ${precoTotalProduto[i].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
            contador++
        }
    }

    if (contador == 0) {
        console.log("Sua busca não foi encontrada!")
    }
}


function pesquisar() {
    do {

        console.log("\nProcurar por:")
        console.log("=".repeat(40))

        console.log("1. Produto")
        console.log("2. Preço")
        console.log("3. Voltar")

        const opcao = Number(prompt("Opção: "))


        if (opcao == 1) {
            console.clear()
            pesquisarProduto()
        } else if (opcao == 2) {
            console.clear()
            pesquisarPreco()
        } else if (opcao == 3) {
            console.clear()
            return
        } else {
            console.log("Opção inválida")
        }

    } while (true)
}

function remover() {
    console.log("\nRemover Produto")
    console.log("=".repeat(40))

    pesquisarProduto()

    console.log("\n")

    do {
        const excluir = Number(prompt("Digite o número do produto que deseja excluir? (0 para sair): "))
        if (excluir != NaN && excluir <= produtos.length && excluir != 0) {
            produtos.splice(excluir - 1, 1)
            precos.splice(excluir - 1, 1)
            quantidades.splice(excluir - 1, 1)
            precoTotalProduto.splice(excluir - 1, 1)
            console.log("Produto removido com sucesso!")
            break
        } else if (excluir == 0) {
            break
        }
        console.log("Número ou parametro errado\n")
    } while (true)
}

function pagamentoVista() {
    let precoTotal = 0

    for (const preco of precoTotalProduto) {
        precoTotal += preco
    }

    console.log("\n")
    console.log("-".repeat(128))

    do {
        console.log(`Valor total à pagar: ${precoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
        const valorPagar = Number(prompt("Informe o valor a pagar (R$): "))

        if (valorPagar < precoTotal) {
            console.log("Valor inválido\n")
        } else {
            console.log(`Troco: ${(valorPagar - precoTotal).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
            console.log("Obrigado, volte sempre!!")
            return
        }
    } while (true)

}

function pagamentoVista() {
    let precoTotal = 0

    for (const preco of precoTotalProduto) {
        precoTotal += preco
    }

    console.log("\n")
    console.log("-".repeat(128))

    do {
        console.log(`Valor total à pagar: ${precoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
        const valorPagar = Number(prompt("Informe o valor a pagar (R$): "))

        if (valorPagar < precoTotal) {
            console.log("Valor inválido\n")
        } else {
            console.log(`Troco: ${(valorPagar - precoTotal).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
            console.log("Obrigado, volte sempre!!")
            return true
        }
    } while (true)

}

function pagamentoCredito() {
    let precoTotal = 0

    for (const preco of precoTotalProduto) {
        precoTotal += preco
    }

    console.log("\n")
    console.log("-".repeat(128))

    do {
        console.log(`Valor total à pagar: ${precoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
        const valorVezes = Number(prompt("Informe em quantas vezes desejas pagar (até 5x): "))

        if (valorVezes <= 0 || valorVezes > 5) {
            console.log("Valor inválido\n")
        } else {
            console.log(`Valor à pagar: ${valorVezes}x de ${(precoTotal / valorVezes).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
            console.log("Obrigado, volte sempre!!")
            return true
        }
    } while (true)

}


function pagamentoDebito() {
    let precoTotal = 0

    for (const preco of precoTotalProduto) {
        precoTotal += preco
    }

    console.log("\n")
    console.log("-".repeat(128))

    do {
        console.log(`Valor total à pagar: ${precoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
        const valorPagar = Number(prompt("Informe o valor a pagar (R$): "))

        if (valorPagar < precoTotal || valorPagar > precoTotal) {
            console.log("Valor inválido\n")
        } else {
            console.log(`Troco: ${(valorPagar - precoTotal).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
            console.log("Obrigado, volte sempre!!")
            return true
        }
    } while (true)

}

function finalizarCompra() {
    do {

        console.log("\nSelecione o método de pagamento")
        console.log("=".repeat(40))

        console.log("1. À vista")
        console.log("2. Cartão de Crédito")
        console.log("3. Cartão de Débito")
        console.log("4. Voltar")

        const opcao = Number(prompt("Opção: "))

        if (opcao == 1) {
            console.clear()
            if (pagamentoVista() == true) {
                return true
            }
        } else if (opcao == 2) {
            console.clear()
            if (pagamentoCredito() == true) {
                return true
            }
        } else if (opcao == 3) {
            console.clear()
            if (pagamentoDebito() == true) {
                return true
            }
        } else if (opcao == 4) {
            console.clear()
            return
        } else {
            console.log("Opção inválida")
        }

    } while (true)

}


do {
    console.log("\nCarrinho de Compras")
    console.log("=".repeat(40))

    console.log("1. Adicionar no Produto")
    console.log("2. Mostrar Carrinho de Compras")
    console.log("3. Pesquisar Produtos no Carrinho")
    console.log("4. Remover Produto do Carrinho")
    console.log("5. Finalizar Compra")
    console.log("6. Cancelar Compra")

    const opcao = Number(prompt("Opção: "))


    if (opcao == 1) {
        console.clear()
        incluir()
    } else if (opcao == 2) {
        console.clear()
        mostrar()
    } else if (opcao == 3) {
        console.clear()
        pesquisar()
    } else if (opcao == 4) {
        console.clear()
        remover()
    } else if (opcao == 5) {
        console.clear()
        if (finalizarCompra() == true) {
            break
        }
    } else if (opcao == 6) {
        break
    } else {
        console.log("Opção inválida")
    }


} while (true)