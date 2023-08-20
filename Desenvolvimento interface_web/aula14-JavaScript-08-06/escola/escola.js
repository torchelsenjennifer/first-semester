// criar uma referencia aos elementos da pagina

const frm = document.querySelector("form"); //para obter o que vai ser colocado nos campos
const respAprovados = document.querySelector("#outAprovados");
const respReprovados = document.querySelector("#outReprovados");

const nomes = []; //declara os vetores nomes
const notas = []; //declara os vetores notas

frm.addEventListener("submit", (e) => { //adiciona um "ouvinte" de evento!

  e.preventDefault(); // EVITA O COMPORTAMENTO PADRÃO DO FORM (QUE É ENVIAR / REFRESH)

  const nome = frm.inNome.value; // obtem o conteudo do campo nome do alunio do formulario
  const nota = Number(frm.inNota.value); // obtem o conteudo do campo nota do alunio do formulario

  nomes.push(nome); //acrescenta nome nos vetores
  notas.push(nota); //acrescenta nota nos vetores

  alert("Ok! Aluno cadastrado com sucesso!"); // 1 forma de mostrar uma mesagem
  // console.log("Olá " + nome)               // 2 forma de mostrar uma mensagem
  // console.log(`Olá (de novo) ${nome}`)     // 3 forma de mostrar uma mensagem

  frm.inNome.value = ""; //Atribui aos campos de formulários vazio (ou seja, limpa os campos)
  frm.inNota.value = ""; // Limpa os formulários

  frm.inNome.focus(); //joga o "foco" no campo inNome

  console.log(nomes.join(",")); // join converte um array numa string e separa cada elemento por uma virgula
  console.log(notas.join(",")); // join converte um array numa string e separa cada elemento por uma virgula
});

frm.btResultados.addEventListener("click", () => {
  //adiciona um "ouvinte" de evento para o CLICK no botao btresultado
  //alert("OK") // Realiza um teste
  if (nomes.length == 0) {  //quando o botão for precionado sem informações
    alert("Não há alunos inseridos na lista");
    return;
  }

  let aprovados = "";
  let reprovados = "";

  for (let i = 0; i < nomes.length; i++) {
    if (notas[i] >= 7) {
      aprovados = aprovados + nomes[i] + " - " + notas[i].toFixed(2) + "\n";
    } else {
      reprovados = reprovados + nomes[i] + " - " + notas[i].toFixed(1) + "\n";
    }
  }
  respAprovados.innerText =
    "\nLista de Aprovados\n----------------\n" + aprovados; // mostra
  respReprovados.innerText =
    "\nLista de Reprovados\n--------------\n" + reprovados; // mostra
});
