const frm = document.querySelector("form"); // criar uma referencia aos elementos da pagina
const respGrupo = document.querySelector("pre"); //para obter o que vai ser colocado nos campos

const nomes = []; //declara os vetores nomes

frm.addEventListener("submit", (e) => {
  //adiciona um "ouvinte" de evento!

  e.preventDefault(); // EVITA O COMPORTAMENTO PADRÃO DO FORM (QUE É ENVIAR / REFRESH)

  const alunos = frm.inNome.value; // obtem o conteudo do campo nome do competidor do formulario

  nomes.push(alunos); //acrescenta os competidores nos vetores

  alert("Ok! Competidor cadastrado com sucesso!"); // 1 forma de mostrar uma mesagem
  // console.log("Olá " + nome)               // 2 forma de mostrar uma mensagem
  // console.log(`Olá (de novo) ${nome}`)     // 3 forma de mostrar uma mensagem

  frm.inNome.value = ""; //Atribui aos campos de formulários vazio (ou seja, limpa os campos)

  frm.inNome.focus(); //joga o "foco" no campo inNome

  console.log(nomes.join(",")); // join converte um array numa string e separa cada elemento por uma virgula
});

frm.btGrupo.addEventListener("click", () => {
  //adiciona um "ouvinte" de evento para o CLICK no botao btresultado
  //alert("OK") // Realiza um teste
  const num = Number(prompt("Nº de alunos por grupo:"))
  if (nomes.length == 0) {
    //quando o botão for precionado sem informações
    alert("Não há competidores inseridos na lista");
    return;
  }

  let seguencia = "";

  calc = nomes.length/num

  for (let i = 0; i<=nomes.length; i++) {
    seguencia = seguencia + nomes[i] + "\n";
    
  }
  respCompetidores.innerText =
    "\n Grupos \n----------------\n" + seguencia; // mostra
});
