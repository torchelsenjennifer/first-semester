const prompt = require("prompt-sync")();

const titulo = [];
const generos = [];
const duracoes = [];

function incluir() {
  console.log("\nInclusão de Filmes");
  console.log("-".repeat(40));

  const x = prompt("Titulo do Filme: ");
  const y = prompt("Gênero do Filme: ");
  const z = Number(prompt("Duração do Filme(min): "));

  titulo.push(x);
  generos.push(y);
  duracoes.push(z);

  console.log("Ok! Filme Cadastrado com Sucesso");
}

function listar() {
  console.log("\nListagem de Filmes");
  console.log("=".repeat(40));

  console.log("Titulo do Filme...............: Genero.......: Duracao:");
  console.log("-------------------------------------------------------");

  for (let i = 0; i < titulo.length; i++) {
    console.log(
      ` ${i + 1} ${titulo[i].padEnd(25)} ${generos[i].padEnd(15)} ${
        duracoes[i]
      } min`
    );
  }
}

function pesq_genero() {
  console.log("\nPesquisa de filmes por Gênero");
  console.log("=".repeat(40));

  const pesq = prompt("Informe o Gênero do Filme:").toUpperCase(); //  converter letras minusculas em maisculas

  console.log("Titulo do Filme...............: Genero.......: Duracao:");
  console.log("-------------------------------------------------------");

  let existe = 0; // cria uma variavel caso ocorra de ser digitado um genero inexistente

  for (let i = 0; i < titulo.length; i++) {
    if (generos[i].toUpperCase() == pesq) {
      // verifica se o genero do array é igual ao texto presente na variavel pesq

      console.log(
        ` ${i + 1} ${titulo[i].padEnd(25)} ${generos[i].padEnd(15)} ${
          duracoes[i]
        } min`
      );
      existe = 1;
    }
  }
  if (existe == 0) {
    console.log(`* Obs.: Não há filmes do gênero ${pesq}`);
  }
}
function pesq_duracao() {
  console.log("\nPesquisa de filmes por Duração");
  console.log("=".repeat(40));

  const temp = Number(prompt("Informe o tempo de filme:"));

  let tempoFilmes = "";

  for (let i = 0; i < titulo.length; i++) {
    if (duracoes[i] <= temp) {
      console.log(`${i + 1 }  ${titulo[i].padEnd(25) +" "+  generos[i].padEnd(15) +" "+ duracoes[i]} min `); // dicas do tiago s2
    }
  }

  console.log(`${tempoFilmes}`);
}
function excluir() {
  listar();  // chama a função que irá  listar os filmes
  console.log("\nExclusão de Filme");
  console.log("=".repeat(40));

  const esc = Number(prompt("Qual filme deseja excluir(0 para retornar):")); 

  if(esc==0){
    return  // quem chamou foi o programa principal que chamou ele, volta para lá

  }
  if(esc>titulo.length){
    console.log("Número inválido...nenhum filme foi excluido")
    return //volta para o progrma principal
  }

  titulo.splice(esc - 1, 1); // começa 1,2,3,4 e o vetor é 0,1,2,3,4
  duracoes.splice(esc - 1, 1); // splice(posição inicial do vetor[po isso,-1], quantos devems ser excluidos)
  generos.splice(esc - 1, 1);
  
  console.log(`Ok! Filme "${excluir.toString()}" foi excuido com sucesso`)
}

function estatistica() {
  console.log("\nEstatística do cadastro de Filmes");
  console.log("=".repeat(40));

  if(titulo.length==0){

  }
  
  let soma = 0

 //let soma = duracoes.reduce((a,b)=>a+b,0) // dicas do tiago s2 

 //percorre todos os elemenstos do vetor
 for(const duracao of duracoes){
soma = soma + duracao
 }

 //percorre todos os elementos do vetor
 // for (i = 0; i < duracoes.length; i++) { 
   // soma = soma + duracoes[i];
 // }

 const num = titulo.length
 const media = soma / num

  console.log(`Total de Filmes: ${num}`);
  console.log(`Duração Média: ${soma}`); 
  console.log(`Duração Média: ${media.toFixed(1)}`) //dicas do tiago S2

  //310 => 5 horas e 10 minutos
  const horas = Math.floor(soma/60)
  const min = soma % 0

  console.log(`Duração`)

  
}

do {
  console.log("\nControle pessoal de filmes");
  console.log("=".repeat(40));
  console.log("1. Incluir Filmes");
  console.log("2. Listar Filmes");
  console.log("3. Pesquisar por Gênero");
  console.log("4. Pesquisar por Duração");
  console.log("5. Excluir Filmes");
  console.log("6. Estatistica de filmes:");
  console.log("7. Finalizar");

  const opcao = Number(prompt("Opção: "));

  if (opcao == 1) {
    incluir();
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    pesq_genero();
  } else if (opcao == 4) {
    pesq_duracao();
  } else if (opcao == 5) {
    excluir();
  } else if (opcao == 6) {
    estatistica();
  } else if (opcao == 7) {
    break;
  } else {
    console.log("Opção Inválida");
  }
} while (true);
