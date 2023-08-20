const input1 = document.querySelector("#tecla1")
const input2 = document.querySelector("#tecla2")
const input3 = document.querySelector("#tecla3")
const input4 = document.querySelector("#tecla4")
const input5 = document.querySelector("#tecla5")
const input6 = document.querySelector("#tecla6")
const input7 = document.querySelector("#tecla7")
const input8 = document.querySelector("#tecla8")
const input9 = document.querySelector("#tecla9")
const input0 = document.querySelector("#tecla0")
const corrige = document.querySelector("#corrige")
const confirma = document.querySelector("#confirma")
const votobranco = document.querySelector("#branco")
const imgjennifer = document.querySelector("#candidato")
const imgroger = document.querySelector("#candidato1")
const imglula = document.querySelector("#candidato2")
const imgbolsonaro = document.querySelector("#candidato3")
const nome = document.querySelector("#nome")
const partido = document.querySelector("#partido")
const prefe = document.querySelector("#pref")
const num = document.querySelector("#nume")
const textos = document.querySelector("#texto")
const campoprimo =  document.querySelector("#campo1")
const camposegu =  document.querySelector("#campo2")
const finaleira =  document.querySelector("#fim")

input1.addEventListener("click", () => {
    mostrar(input1)
})

input2.addEventListener("click", () => {
    mostrar(input2)
})

input3.addEventListener("click", () => {
    mostrar(input3)
})

input4.addEventListener("click", () => {
    mostrar(input4)
})

input5.addEventListener("click", () => {
    mostrar(input5)
})
input6.addEventListener("click", () => {
    mostrar(input6)
})
input7.addEventListener("click", () => {
    mostrar(input7)
})
input8.addEventListener("click", () => {
    mostrar(input8)
})
input9.addEventListener("click", () => {
    mostrar(input9)
})
input0.addEventListener("click", () => {
    mostrar(input0)
})

corrige.addEventListener("click", () => {
    limpar()
})
confirma.addEventListener("click", () => {
    confirmar()
})
votobranco.addEventListener("click", () => {
    branco()
})



function mostrar(input) {
    if (campo1.value == "") {
        let valor = input.value
        let mostrar = document.getElementById("campo1")
        mostrar.value = valor
    } else if (campo2.value == "") {
        let valor = input.value
        let mostrar = document.getElementById("campo2")
        mostrar.value = valor
    }
    if (campo1.value == 0 && campo2.value == 5) {
        imgjennifer.setAttribute('src', 'jennifer.jpg')
        nome.innerHTML = "Nome: Jennifer Schwanz Torchelsen"
        partido.innerHTML = "Partido: Partido Socialista - PS"

    }
    if (campo1.value == 2 && campo2.value == 2) {
        imgroger.setAttribute('src', 'roger.jpeg')
        nome.innerHTML = "Nome: Roger Rodrigues Garcia"
        partido.innerHTML = "Partido: Partido Bora Jogar Uma - PBJ"

    }
    if (campo1.value == 1 && campo2.value == 3) {
        imglula.setAttribute('src', 'lula2.jpg')
        nome.innerHTML = "Nome: Luiz Inácio Lula da Silva"
        partido.innerHTML = "Partido: Partido do Trabalhador - PT"

    }
    if (campo1.value == 1 && campo2.value == 7) {
        imgbolsonaro.setAttribute('src', 'bolsonaropeixe.png')
        nome.innerHTML = "Nome: Jair Messias Bolsonaro"
        partido.innerHTML = "Partido: Partido Liberal - PL"

    }


}

function limpar() {
    let campo1 = document.getElementById("campo1")
    campo1.value = ""
    let campo2 = document.getElementById("campo2")
    campo2.value = ""
    imgjennifer.setAttribute('src', '')
    imgroger.setAttribute('src', '')
    imglula.setAttribute('src', '')
    imgbolsonaro.setAttribute('src', '')
    nome.innerHTML = ""
    partido.innerHTML = ""
}

function confirmar() {
    if (campo1.value == "" || campo2.value == "") {
        let som = new Audio("confirma.mp3");
        alert("Confirma voto em branco?")
        som.play()
    } else {
        let valor = campo1.value + campo2.value
        let som = new Audio("confirma.mp3");
        if(campo1.value==1 && campo2.value==3){
            alert("Você confirma que seu candidato é: Luiz Inacio Lula da Silva" )
            imglula.setAttribute('src', '')
            nome.innerHTML = ""
            partido.innerHTML = ""
            prefe.innerHTML=""
            num.innerHTML=""
            textos.innerHTML=""
            campoprimo.style.display="none"
            camposegu.style.display="none"
            finaleira.innerHTML="FIM!"
            
        }
        if(campo1.value==2 && campo2.value==2){
            alert("Você confirma que seu candidato é: Roger Rodrigues da Garcia" )
        }
        if(campo1.value==0 && campo2.value==5){
            alert("Você confirma que seu candidato é: Jennifer Schwanz Torchelsen" )
        }
        if(campo1.value==1 && campo2.value==7){
            alert("Você confirma que seu candidato é: Jair Messias Bolsonaro" )
        }
        som.play()
    }
    
    
}
function branco() {
    nome.innerHTML = "Seu voto foi branco!"
}

