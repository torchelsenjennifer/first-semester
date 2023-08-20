const prompt = require("prompt-sync")()

const clubes = []

for(let i=0; i<3; i++){
    const n = Number(prompt( i+1+"º Digite o clube: "))
    clubes[i] = n
}

console.log("\n Jogos")
console.log("-".repeat(40))

for(let i =0; i<=clubes.length; i++ ){
      console.log(`${clubes[i]} x  ${clubes[i+1]}`)
}
    