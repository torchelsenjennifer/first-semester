// cria referência aos elementos da página

const frm = document.querySelector("form");

const lista = document.querySelector("pre");

const nomes = [];

const pesos = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita o envio do form

  if (pesos.includes(Number(frm.inPeso.value))) {
    alert(
      "Erro... Já existe uma aposta com este valor...\nPor gentileza, informe outro peso"
    );

    return;
  }

  // adiciona aos vetores os conteúdos dos campos de formulário

  nomes.push(frm.inNome.value);

  pesos.push(Number(frm.inPeso.value));

  let resposta = "";

  // percorre o array para exibir as apostas

  for (let i = 0; i < nomes.length; i++) {
    resposta = resposta + nomes[i] + " - " + pesos[i] + " gr\n";
  }

  // exibe a resposta na página

  lista.innerText = resposta;

  // limpa o form

  frm.reset();

  // outra forma de limpar o form

  //    frm.inNome.value = ""

  //    frm.inPeso.value = ""

  // joga o foco no campo inNome

  frm.inNome.focus();
});

frm.btVencedor.addEventListener("click", () => {
  if (nomes.length == 0) {
    alert("Não há apostas realizadas...");

    frm.inNome.focus();

    return;
  }

  const pesoCorreto = Number(prompt("Qual o peso correto da melancia? "));

  let nomeVencedor = nomes[0];

  let pesoVencedor = pesos[0];

  for (let i = 1; i < nomes.length; i++) {
    const difVencedor = Math.abs(pesoVencedor - pesoCorreto);

    const difAposta = Math.abs(pesos[i] - pesoCorreto);

    // se a diferença da aposta "atual" for menor: troca-se

    if (difAposta < difVencedor) {
      nomeVencedor = nomes[i];

      pesoVencedor = pesos[i];
    }
  }

  let resposta = `Peso Correto: ${pesoCorreto} gr\n`;

  resposta += "-".repeat(50) + "\n";

  resposta += `Vencedor: ${nomeVencedor}\n`;

  resposta += `Aposta: ${pesoVencedor} gr`;

  alert(resposta);
});
