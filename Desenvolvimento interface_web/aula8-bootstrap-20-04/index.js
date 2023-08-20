// cria referência aos elementos da página
const frm = document.querySelector("form")
const imgCarro = document.querySelector("img#carro")
const spanPreco = document.querySelector("span#preco")

let preco = 65000

frm.fiesta.addEventListener("click",()=> {
    //alert("Oi")
    imgCarro.src = "fiesta.png"
    preco = 65000
    frm.alarme.checked = false
    frm.vidros.checked = false
    mostraPreco()
})

frm.ka.addEventListener("click",()=> {
    //alert("Oi")
    imgCarro.src = "ka.png"
    preco = 52000
    frm.alarme.checked = false
    frm.vidros.checked = false
    mostraPreco()
})

frm.eco.addEventListener("click",()=> {
    //alert("Oi")
    imgCarro.src = "eco.png"
    preco = 80000
    // frm.alarme.checked = false
   // frm.vidros.checked = false

   //outra forma de resolver os opcionais na troca de veículos
   if(frm.alarme.checked){
    preco = preco + 1200
   }
   if(frm.vidros.checked) {
    preco = preco + 2000
   }
   mostraPreco()
})

function mostraPreco(){
  //  spanPreco.innerText = preco.toFixed(2)
  spanPreco.innerText = preco.toLocaleString("pt-br",{minimumFractionDigits: 2})

}

//evento load ocorre quando a página é carregada
window.addEventListener("load", () => {
   mostraPreco()
})

frm.alarme.addEventListener("click", ()=>{
    if(frm.alarme.checked == true){
        preco = preco + 1200
    }else{
        preco = preco - 1200
    }
    mostraPreco()

})
frm.vidros.addEventListener("click", ()=>{
    if(frm.alarme.checked == true){
        preco = preco + 2000
    }else{
        preco = preco - 2000
    }
    mostraPreco()

})