const prompt = require("prompt-sync")();

const dezena = Number(prompt("Dezenas:"));

let j = ""
let cont =0

  if(dezena<100){
    for (let i = dezena; i < 100; i++){
      cont = cont + 1
    }
    for(let j = 1 ; j < cont/10;  j++ ){
      j = j * 10
    }
    

  }else{
    console.log("Não é uma dezena!")
  }
  console.log(`Dezenas até 100: ${j}`)