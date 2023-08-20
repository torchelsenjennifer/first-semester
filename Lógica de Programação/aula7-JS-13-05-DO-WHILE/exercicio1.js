const prompt = require("prompt-sync")();

console.log("Digite o nome do funcionário ou fim para sair:");

while (true) {
  let salario_final = 0;

  const nome = prompt("Nome do Funcionário:");

  if (nome == "fim") {
    break;
  } else {
    const salario = Number(prompt("Salário do funcionário:"));
    // recomendado declarar com const, mais de uma atriução colocar let
    const salario_final = salario * 0.2 + salario; 
  }
}





