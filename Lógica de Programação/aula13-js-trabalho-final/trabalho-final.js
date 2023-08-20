const prompt = require("prompt-sync")();

const jogadores = [];
const posicao = [];
const time = [];

function incluir() {
  console.log("\nInclusão de jogadores");
  console.log("-".repeat(40));

  const x = prompt("Nome do jogador: ");
  const y = prompt("Posição que joga: ");
  const z = prompt("Time que joga:");

  jogadores.push(x);
  posicao.push(y);
  time.push(z);

  console.log("Ok! Jogadores cadastratos com sucesso!");
}

function listar() {
  console.log("\nListagem de jogadores");
  console.log("=".repeat(40));

  console.log("Jogador...............: Posição.......Time que joga");
  console.log("-------------------------------------------------------");

  for (let i = 0; i < jogadores.length; i++) {
    console.log(
      ` ${i + 1} ${jogadores[i].padEnd(25)} ${posicao[i].padEnd(15)} ${ time[i] } `
    );
  }
}

function pesq_posicao() {
  console.log("\nPesquisa posição");
  console.log("=".repeat(40));

  const pesq = prompt("Informe a posição desejada:").toUpperCase(); //  converter letras minusculas em maisculas

  console.log("Jogador...............Posição.......Nº da Camiseta");
  console.log("-------------------------------------------------------");

  let existe = 0; // cria uma variavel caso ocorra de ser digitado uma posição inexistente

  for (let i = 0; i < jogadores.length; i++) {
    if (posicao[i].toUpperCase() == pesq) { // verifica se o genero do array é igual ao texto presente na variavel pesq
      console.log(
        ` ${i + 1} ${jogadores[i].padEnd(25)} ${posicao[i].padEnd(15)} ${ time[i] }`
      );
      existe = 1;
    }
  }
  if (existe == 0) {
    console.log(`* Obs.: Não há jogadores que joguem nessa posição de ${pesq}`);
  }
}
function pesq_time() {
  console.log("\nPesquisa pelo número da camiseta do jogador");
  console.log("=".repeat(40));

  const team = Number(prompt("Informe o número da camiseta:"));

  for (let i = 0; i < jogadores.length; i++) {
    if (time[i] == team) {
      console.log(`${i + 1 }  ${jogadores[i].padEnd(25) +" "+  posicao[i].padEnd(15) +" "+ time[i]}`); 
    }
  }
//   console.log("Jogador...............Posição.......Nº da Camiseta");
//   console.log("-------------------------------------------------------");

}
function excluir() {
  jogadores();  // chama a função que irá  listar os jogadores
  console.log("\nExclusão de jogador");
  console.log("=".repeat(40));

  const esc = Number(prompt("Qual jogadore deseja excluir(0 para retornar):")); 

  if(esc==0){
    return  // quem chamou foi o programa principal que chamou ele, volta para lá

  }
  if(esc>titulo.length){
    console.log("Número inválido...nenhum jogador foi excluido")
    return //volta para o progrma principal
  }

  jogadores.splice(esc - 1, 1); // começa 1,2,3,4 e o vetor é 0,1,2,3,4
  posicao.splice(esc - 1, 1); // splice(posição inicial do vetor[po isso,-1], quantos devems ser excluidos)
  numero.splice(esc - 1, 1);
  
  console.log(`Ok! Jogador "${excluir.toString()}" foi excuido com sucesso`)
}

function time() {
  console.log("\nTime formado");
  console.log("=".repeat(40));
}


do {
  console.log("\nTime LeBron James (técnico Monty Williams, dos Suns)");
  console.log("\n Conferencia Oeste");
  console.log("=".repeat(40));
  console.log("1. INCLUIR JOGADORES");
  console.log("2. LISTAR JOGADORES");
  console.log("3. PESQUISAR POR POSIÇÃO");
  console.log("4. TIME ATUAL")
  console.log("5. EXCLUIR JOGADOR");
  console.log("6. ANALISAR TIME COMPLETO:");
  console.log("7. Finalizar");

  const opcao = Number(prompt("Opção: "));

  if (opcao == 1) {
    incluir();
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    pesq_posicao();
  } else if (opcao == 4) {
    pesq_time();
  } else if (opcao == 5) {
    excluir();
  } else if (opcao == 6) {
    time();
  } else if (opcao == 7) {
    break;
  } else {
    console.log("Opção Inválida");
  }
} while (true);
