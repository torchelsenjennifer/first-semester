// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");


// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value; // obtém o conteúdo dos campos
  const gols = Number(frm.inGols.value);

  if (gols == 0) {
    resp1.innerText = `${nome}, você não marcou gols!`;
  } else if (gols == 1) {
    resp2.innerText = `${nome}, você fez apenas 1 gol!`;
  } else {
    resp2.innerText = `${nome}, você fez ${gols} gols, Parabéns!`;
  }

  e.preventDefault(); // evita envio do form
});
