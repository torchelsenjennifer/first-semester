// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");


// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const numero = frm.inNumero.value; // obtém o conteúdo dos campos
  const fim = Number(frm.inFim.value);

  let mesagem

  for(let i=0; i<=numero; i=i+pulo){
    resp1.innerText = `${i}`
}


  e.preventDefault(); // evita envio do form
});

