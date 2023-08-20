const prompt = require("prompt-sync")()

const pacientes = Number(prompt("Número de pacientes:"))

if(pacientes<= 5){
    console.log(`Dentista A: ${pacientes}`)
}else{
    //Math.floor: arredonda para baixo
    //Math.ceil: arredonda para cima

    const dentA = Math.floor(pacientes/2)
    const dentB = Math.ceil(pacientes/2)

    console.log(`Dentista A:${dentA}`)
    console.log(`Dentista B:${dentB}`)
}

//outra forma /////////////////////////////////////////////
if(pacientes<= 5){
    console.log(`Dentista A: ${pacientes}`)
}else{
    let dentA
    let dentB
    if(pacientes % 2 == 0){
        dentA = pacientes / 2
        dentB = pacientes / 2
    }else{
        dentA = Math.floor(pacientes/2)
        dentB = Math.floor(pacientes/2) + 1
    }

    console.log(`Dentiste A:${dentA}`)
    console.log(`Dentista B:${dentB} `)
}