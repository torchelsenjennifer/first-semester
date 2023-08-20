
const prompt = require("prompt-sync")()

const num = Number(prompt("Numero: "))

const raiz = Math.sqrt(num)

//raiz:5
//raiz: 4.876745585959

if(Number.isInteger(raiz)){ //verifica se o número é inteiro
    console.log(`Raiz: ${raiz}`)
}else{
    console.log(`Não há raiz exata para: ${num}`)
}

//outra forma

//if(raiz % 1 == 0){
    //console.log(`Raiz: ${raiz}`)
// }else{
   // console.log(`Não há raiz exata para: ${num}`)
//}


//outra forma
//if(Math.floor(raiz) == raiz){   RETOR UM NÚMERO INTEIRO ABAIXO
   // console.log(`Raiz: ${raiz}`)
//}else{
   // console.log(`Não ha raiz exata para: ${num}`)
//}