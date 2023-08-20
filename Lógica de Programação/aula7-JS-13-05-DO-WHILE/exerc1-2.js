//outra forma  do while
let continua
do {
  const nome = prompt("Nome do Funcionário:");
  const salario = Number(prompt("Salário do funcionário:"));

  const salario_final = salario * 0.2 + salario;
  console.log(`Novo salario: ${salario_final}`);

  continua = prompt("Deseja continuar: (S/N)")

} while (continua == "S" || continua == "s");