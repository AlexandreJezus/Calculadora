const prompt = require("prompt-sync")();
const funcao = require("./funcao.js");

function mostrarMenu() {
  console.log(
    `Escolha o tipo de operação que deseja realizar: 
    1. Adição, 
    2. Subtração, 
    3. Multiplicação. 
    4. Divisão, 
    5. Porcentagem.
    6. Saida.`
  );
  let op = +prompt("Digite a opção: ");
  return op;
}

function validarNumero(n) {
  return !isNaN(n) && typeof n === "number";
}

function operacao(opcao) {
  if (opcao === 1) {
    console.log("Bem vindo a soma.");
    let a = +prompt("Digite o primeiro número:");
    let b = +prompt("Digite o segundo número a ser somado:");
    let respSoma = funcao.soma(a, b);
    if (validarNumero(a) && validarNumero(b)) {
      console.log(respSoma);
    } else {
      console.log("Digite um número válido.");
    }
  } else if (opcao === 2) {
    console.log("Bem vindo a subtração.");
    let a = +prompt("Digite o primeiro número:");
    let b = +prompt("Digite o segundo número a ser subtraído:");
    let respSubtracao = funcao.subtracao(a, b);
    if (validarNumero(a) && validarNumero(b)) {
      console.log(respSubtracao);
    } else {
      console.log("Digite um número válido.");
    }
  } else if (opcao === 3) {
    console.log("Bem vindo a multiplicação.");
    let a = +prompt("Digite o primeiro número:");
    let b = +prompt("Digite o segundo número para multiplicar:");
    let respMultipĺicacao = funcao.multiplicacao(a, b);
    if (validarNumero(a) && validarNumero(b)) {
      console.log(respMultipĺicacao);
    } else {
      console.log("Digite um número válido.");
    }
  } else if (opcao === 4) {
    console.log("Bem vindo a divisão.");
    let a = +prompt("Digite o primeiro número à ser divido:");
    let b = +prompt("Digite o segundo número para divisor:");
    let respDivisao = funcao.divisao(a, b);
    if (validarNumero(a) && validarNumero(b)) {
      console.log(respDivisao);
    } else {
      console.log("Digite um número válido.");
    }
  } else if (opcao === 5) {
    console.log("Bem vindo a porcentagem.");
    let a = +prompt("Digite o primeiro número para fazer a sua porcentagem:");
    let b = +prompt(
      "Digite o segundo número para calcular a porcentagem deste número:"
    );
    let respPorcentagem = funcao.porcentagem(a, b);
    if (validarNumero(a) && validarNumero(b)) {
      console.log(respPorcentagem);
    } else {
      console.log("Digite um número válido.");
    }
  } else if (opcao === 6) {
    console.log("Saindo");
    process.exit();
  }
}

while (true) {
  let resp = mostrarMenu();
  operacao(resp);
}
