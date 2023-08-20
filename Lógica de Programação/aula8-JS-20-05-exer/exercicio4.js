const prompt = require("prompt-sync")();
let cont = 0
const numero = Number(prompt("Número:"));

for (let i = 1; i <= numero; i++) {
    if(numero%i==0 )
       cont=cont + 1
}

if(cont ==2 ){
  console.log("Ele é primo!")
}else{
  console.log("Não é primo!")
}
