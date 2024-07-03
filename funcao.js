const opcao = [1, 2, 3, 4, 5];
if (opcao == 1) {
  console.log("teste");
  return;
}
function soma(a, b) {
  if (typeof a !== Number || typeof b !== Number) {
    console.log("Os parâmetros devem ser números.");
  } else somaResultado = a + b;
  console.log("O resultado da soma é: " + somaResultado);
  return;
}

function subtracao(a, b) {
  if (typeof a !== Number || typeof b !== Number) {
    console.log("Os parâmetros devem ser números.");
  } else subtracaoResultado = a - b;
  return;
}

function multiplicacao(a, f) {
  if (typeof a !== Number || typeof b !== Number) {
    console.log("Os parâmetros devem ser números.");
  } else multiplicacaoResultado = a * f;
  return;
}

function divisao(a, b) {
  if (typeof a !== Number || typeof b !== Number) {
    console.log("Os parâmetros devem ser números.");
  } else divisaoResultado = a / b;
  return;
}

function porcentagem(a, b) {
  if (typeof a !== Number || typeof b !== Number) {
    console.log("Os parâmetros devem ser números.");
  } else porcentagemResultado = (a / 100) * b;
  return;
}

module.exports = {
  opcao,
  soma,
  subtracao,
  multiplicacao,
  divisao,
  porcentagem,
};
