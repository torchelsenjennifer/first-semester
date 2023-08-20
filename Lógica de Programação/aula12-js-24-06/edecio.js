const prompt = require("prompt-sync")();

const titulos = [];
const generos = [];
const duracoes = [];

function incluir() {
  console.log("\nInclusão de Filmes");
  console.log("-".repeat(40));

  const x = prompt("Título do Filme: ");
  const y = prompt("Gênero do Filme: ");
  const z = Number(prompt("Duração em min.: "));

  titulos.push(x);
  generos.push(y);
  duracoes.push(z);
  console.log("Ok! Filme Cadastrado com Sucesso");
}

function listar() {
  console.log("\nListagem de Filmes Cadastrados");
  console.log("=".repeat(40));

  console.log("\nNº Título..................: Gênero........: Duração");
  console.log("----------------------------------------------------");

  for (let i = 0; i < titulos.length; i = i + 1) {
    console.log(
      `${i + 1} ${titulos[i].padEnd(25)} ${generos[i].padEnd(15)} ${duracoes[i] } min` );
  }
}

function pesq_titulo() {
  console.log("\nPesquisa de Filmes por Título");
  console.log("=".repeat(40));

  // .toUppercase ()= recebe o gênero e converte ele em letras maiúsculas

  const pesqTitulo = prompt("Informe a palavra-chave do título: ").toUpperCase();
  console.log("\nNº Título..................: Gênero........: Duração");
  console.log("----------------------------------------------------");

  let existe = 0;

  // .include= verifica se determinada palavra esta inclusa na variavel
  for (let i = 0; i < titulos.length; i = i + 1) {
    if (titulos[i].toUpperCase().includes(pesqTitulo)) { 
      console.log (`${i + 1} ${titulos[i].padEnd(25)} ${generos[i].padEnd(15)} ${duracoes[i] } min`);
      existe = 1;
    }
  }

  if (existe == 0) {
    console.log(`* Obs.: Não há filmes com a palavra-chave "${pesqTitulo}"`);
  }
}

function pesq_genero() {
  console.log("\nPesquisa de Filmes por Gênero");
  console.log("=".repeat(40));

  // recebe o gênero e converte ele em letras maiúsculas

  const pesqGenero = prompt("Informe o Gênero: ").toUpperCase();
  console.log("\nNº Título..................: Gênero........: Duração");
  console.log("----------------------------------------------------");

  let existe = 0;

  for (let i = 0; i < titulos.length; i = i + 1) {
    if (generos[i].toUpperCase() == pesqGenero) {
      console.log( ` ${i + 1} ${titulos[i].padEnd(25)} ${generos[i].padEnd(15)} ${duracoes[i]} min` );

      existe = 1;
    }
  }

  if (existe == 0) {
    console.log(`* Obs.: Não há filmes do gênero "${pesqGenero}"`);
  }
}

function pesq_duracao() {
  console.log("\nPesquisa de Filmes por Duração");
  console.log("=".repeat(40));

  const pesqDuracao = Number(prompt("Informe a Duração Máxima: "));
  console.log("\nNº Título..................: Gênero........: Duração");

  console.log("----------------------------------------------------");

  let existe = 0;

  for (let i = 0; i < titulos.length; i = i + 1) {
    if (duracoes[i] <= pesqDuracao) {
      console.log(
        `${i + 1} ${titulos[i].padEnd(25)} ${generos[i].padEnd(15)} ${ duracoes[i]} min`);

      existe = 1;
    }
  }

  if (existe == 0) {
    console.log(`* Obs.: Não há filmes com duração até ${pesqDuracao} min`);
  }
}

function excluir() {
  listar(); // chama a função que irá listar os filmes

  console.log("\nExclusão de Filmes");

  console.log("=".repeat(40));

  const numExcluir = Number(
    prompt("Número do filme a excluir (0 para retornar): ")
  );

  if (numExcluir == 0) {
    return;
  }

  if (numExcluir > titulos.length) {
    console.log("Número inválido... nenhum filme foi excluído");

    return;
  }

  // exclui o filme indicado

  // splice(posição inicial do vetor[por isso, -1], quantos devem ser excluídos)

  const excluido = titulos.splice(numExcluir - 1, 1);

  generos.splice(numExcluir - 1, 1);

  duracoes.splice(numExcluir - 1, 1);

  console.log(`Ok! Filme "${excluido.toString()}" foi excluído com sucesso`);
}

function estatistica() {
  console.log("\nEstatística do Cadastro de Filmes");

  console.log("=".repeat(40));

  if (titulos.length == 0) {
    console.log("* Obs.: Não há filmes cadastrados");

    return;
  }

  let total = 0;

  // percorre todos os elementos do vetor

  //    for (let i=0; i<duracoes.length; i++) {

  //        total = total + duracoes[i]

  //    }

  // percorre todos os elementos do vetor

  for (const duracao of duracoes) {
    total = total + duracao;
  }

  const num = titulos.length;
  const media = total / num;

  console.log(`Nº de Filmes Cadastrados: ${num}`);
  console.log(`Duração Total dos Filmes: ${total}`);
  console.log(`Duração Média dos Filmes: ${media.toFixed(1)}`);

  //    310  =>   5 horas e 10 minutos

  const horas = Math.floor(total / 60);
  const min = total % 60;
  console.log(
    `Duração Total dos Filmes em Horas e Minutos: ${horas}h e ${min}min`
  );
}

// ------------------------------------------- Programa Principal

do {
  console.log("\nControle Pessoal de Filmes");
  console.log("=".repeat(40));
  console.log("1. Incluir Filmes");
  console.log("2. Listar Filmes");
  console.log("3. Pesquisar por Título do Filme");
  console.log("4. Pesquisar por Gênero");
  console.log("5. Pesquisar por Duração");
  console.log("6. Excluir Filme");
  console.log("7. Estatística de Filmes");
  console.log("8. Finalizar");
  const opcao = Number(prompt("Opção: "));

  if (opcao == 1) {
    incluir();
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    pesq_titulo();
  } else if (opcao == 4) {
    pesq_genero();
  } else if (opcao == 5) {
    pesq_duracao();
  } else if (opcao == 6) {
    excluir();
  } else if (opcao == 7) {
    estatistica();
  } else if (opcao == 8) {
    break;
  } else {
    console.log("Opção Inválida");
  }
} while (true);
