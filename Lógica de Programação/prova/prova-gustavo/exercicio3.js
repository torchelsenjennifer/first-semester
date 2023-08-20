const prompt = require("prompt-sync")();

const poltronas = Number(prompt("Nº de poltronas:"));


console.log("Filas dos assentos");
console.log("-".repeat(30))

let valor =""
let cont=0;

for(let i= 1; i<=poltronas;i++){
    cont++;
    if(cont==1){
       valor = valor + i + " "
    } else{
        console.log("\n")
        cont=cont+4
        valor = valor + i + " "
    }
}

console.log(`${valor}`)