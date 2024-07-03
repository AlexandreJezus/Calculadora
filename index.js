const prompt = require("prompt-sync")();
const funcao = require("./funcao.js");

console.log(
  `Escolha o tipo de operação que deseja realizar: 
  1. Adição, 
  2. Subtração, 
  3. Multiplicação. 
  4. Divisão, 
  5. Porcentagem.`
);
const opcao = prompt("Digite a opção: ");
if (opcao == 1) {
  console.log("Bem vindo a soma.");
  let a = +prompt("Digite o primeiro número:");
  let b = +prompt("Digite o segundo número a ser somado:");
  let respSoma = funcao.soma(a, b);
  if (respSoma == NaN) {
    console.log("Digite um número válido.");
  } else {
    console.log(respSoma);
  }
} else if (opcao == 2) {
  console.log("Bem vindo a subtração.");
  let a = +prompt("Digite o primeiro número:");
  let b = +prompt("Digite o segundo número a ser subtraído:");
  let respSubtracao = funcao.subtracao(a, b);
  if (respSubtracao == NaN) {
    console.log("Digite um número válido.");
  } else {
    console.log(respSubtracao);
  }
} else if (opcao == 3) {
  console.log("Bem vindo a multiplicação.");
  let a = +prompt("Digite o primeiro número:");
  let b = +prompt("Digite o segundo número para multiplicar:");
  let respMultipĺicacao = funcao.multiplicacao(a, b);
  if (respMultipĺicacao == NaN) {
    console.log("Digite um número válido.");
  } else {
    console.log(respMultipĺicacao);
  }
} else if (opcao == 4) {
  console.log("Bem vindo a divisão.");
  let a = +prompt("Digite o primeiro número à ser divido:");
  let b = +prompt("Digite o segundo número para divisor:");
  let respDivisao = funcao.divisao(a, b);
  if (respDivisao == NaN) {
    console.log("Digite um número válido.");
  } else {
    console.log(respDivisao);
  }
} else if (opcao == 5) {
  console.log("Bem vindo a porcentagem.");
  let a = +prompt("Digite o primeiro número para a porcentagem:");
  let b = +prompt(
    "Digite o segundo número para calcular a porcentagem deste número:"
  );
  let respPorcentagem = funcao.porcentagem(a, b);
  if (respPorcentagem == NaN) {
    console.log("Digite um número válido.");
  } else {
    console.log(respPorcentagem);
  }
}
