// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");


// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value; // obtém o conteúdo dos campos
  const gols = Number(frm.inGols.value);

  let mesagem

  if (gols == 0) {
    mesagem = "Você não carcou gols"
  } else if (gols == 1) {
    mesagem = "Você fez apenas 1 gol"
  } else {
    mesagem = `Parabéns, Você fez ${gols} gols`
  }

  resp2.innerText = mesagem

  e.preventDefault(); // evita envio do form
});
