const prompt = require("prompt-sync")()

const numeros = []
const par = []

do{
    const n = Number(prompt("Digite um numero: "))

    numeros.push(n)

    const continuar = prompt("Deseja continuar? ")
    if (continuar == "N" || continuar == "n") {
        break
    }


}while(true)

for(let i = 0; i< numeros.length; i++){
    if(numeros[i]%2 == 0){
        par[i] = numeros [i] 
    }
}

console.log("\n Pares da lista")
console.log("-".repeat(40))

for(let i = 0 ; i<par.length; i++ ){
    console.log(`${par[i]}`)
}
console.log("-".repeat(40))
console.log(par.length)
