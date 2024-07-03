const prompt = require("prompt-sync")();
const funcao = require("./funcao.js");

let a = prompt("Digite o primeiro número:");
let b = prompt("Digite o segundo número:");
const opcao = prompt(
  `Escolha o tipo de operação que deseja realizar: 
  1. Adição, 
  2. Subtração, 
  3. Multiplicação. 
  4. Divisão, 
  5. Porcentagem.`
);
