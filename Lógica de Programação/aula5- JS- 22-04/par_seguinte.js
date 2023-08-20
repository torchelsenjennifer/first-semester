
const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

if(num % 2 == 0){
    console.log(`Proximo par: ${num + 2}`)
}else{
    console.log(`Proximo par: ${num + 1}`)
}

//outra forma de resolver

//let proximo
//if(num % 2 ==0 ){
    //proximo = num + 2
//}else{
    //proximo = num + 1
//}
//console.log(`Proximo par: ${proximo}`)