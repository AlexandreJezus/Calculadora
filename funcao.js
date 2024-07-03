function soma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") somaResultado = a + b;
  return somaResultado;
}

function subtracao(c, d) {
  subtracaoResultado = c - d;
  return subtracaoResultado;
}

function multiplicacao(e, f) {
  multiplicacaoResultado = e * f;
  return multiplicacaoResultado;
}

function divisao(g, h) {
  divisaoResultado = g / h;
  return divisaoResultado;
}

function porcentagem(i, j) {
  porcentagemResultado = (i / 100) * j;
  return porcentagemResultado;
}

module.exports = { soma, subtracao, multiplicacao, divisao, porcentagem };
