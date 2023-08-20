const prompt = require("prompt-sync")();

const pacientes = [];

function incluir() {
  const nome = prompt("Nome do Paciente:");
  pacientes.push(nome);
  console.log("Ok! Paciente cadastrado com sucesso...");
}

function listar() {
  console.log("\nPaciente na Fila de Espera");
  console.log("=".repeat(30));
  
  //forma alternativa de percorrer todos os elementos do vetor
  for (const paciente of pacientes) { 
    console.log(paciente);
  }
}

function atender() {
  console.log();
 
 if(pacientes.length == 0){
    console.log("Não há pacientes na fila de espera")
    return
 }
 //const nome= pacientes[0]
  const nome = prompt(`Nome do paciente:: ${nome}` );
  pacientes.shift(nome); //remove e retorna o nome do paciente removido
}

function Urgência() {
  console.log();
  const nome = prompt("Nome do paciente: ");
  pacientes.unshift(nome);
  console.log("Ok! Paciente cadastrado com sucesso...");
}

do {
  console.log("\nConsultório Odontológico");
  console.log("=".repeat(40));
  console.log("1. Incluir Paciente");
  console.log("2. Lista de pacientes");
  console.log("3. Atender Paciente");
  console.log("4. Incluir Urgência");
  console.log("5. Finalizar");
  const opcao = Number(prompt("Opção: "));
  if (opcao == 1) {
    incluir();
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    atender();
  } else if (opcao == 4) {
    Urgência();
  } else {
    break;
  }
} while (true);
