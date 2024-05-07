//1. utilizando-se das expressões de função, faça um programa que calcule
// a area de um circulo( Dica: const pi = Math.PI)

// Definindo a constante pi
const pi = Math.PI;

// Função para calcular a área de um círculo
function calcularAreaCirculo(raio) {
    return pi * Math.pow(raio, 2);
}

// Exemplo de uso da função
const raio = 5; // Exemplo de raio
const area = calcularAreaCirculo(raio);

console.log(`A área do círculo com raio ${raio} é ${area.toFixed(2)}`);