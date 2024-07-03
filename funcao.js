const opcao = [1, 2, 3, 4, 5];
function soma(a, b) {
  let somaResultado = a + b;
  if (somaResultado == NaN) {
    console.log("Digite um número válido.");
  }
  console.log("O resultado da soma é: ");
  return somaResultado;
}

function subtracao(a, b) {
  let subtracaoResultado = a - b;
  console.log("O resultado da subtração é: ");
  return subtracaoResultado;
}

function multiplicacao(a, b) {
  let multiplicacaoResultado = a * b;
  console.log("O resultado da multiplicação é: ");
  return multiplicacaoResultado;
}

function divisao(a, b) {
  let divisaoResultado = a / b;
  console.log("O resultado da divisão é: ");
  return divisaoResultado;
}

function porcentagem(a, b) {
  let porcentagemResultado = (a / 100) * b;
  console.log("O resultado da porcentagem é: ");
  return porcentagemResultado;
}

module.exports = {
  opcao,
  soma,
  subtracao,
  multiplicacao,
  divisao,
  porcentagem,
};
