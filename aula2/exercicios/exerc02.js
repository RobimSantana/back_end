//2. Escreva uma função que receba um array de números como parâmentro e retorno a soma de todos
// os elemntos do array
function somarlista(lista) {
  /*let soma = 0

   for (let i=0; i < lista.length; i++){ // length serve é o tamanho da lista
        soma += lista[i]
    }
    return soma
}
*/
  //segunda forma de fazer
  soma = 0;

  for (elemento in lista) {
    soma += parseInt(lista[elemento]); // PareeInt serve para transformar uma string em inteiro
  }

  return soma;
}

const minhaLista = [1, 5, 3];
const valor1 = somarlista(minhaLista);

console.log(valor1);
