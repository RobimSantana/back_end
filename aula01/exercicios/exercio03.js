/// Escreva um programa que calcule 
// a soma dos numeros de 1 a 100


// Usando o FOR

let soma = 0
for (let i = 1; i <= 100 ; i++) {
    soma += i;
}
console.log(" a soma é de 1 a 100 é = ", soma)


// Usando While

let i = 0, soma1 = 0

while(i <= 100){
    soma1 += i
    i++
}
console.log(soma1)

// Usando FOR de uma forma diferente

let soma3 = 0
const lista = []

for (let i=0; i<= 100; i ++){
    lista.push(i)
}

// For e In

console.log(lista)

for ( i in lista){
    soma3 += parseInt(i)
}
console.log(i)

let soma4 =0
function somar(i){
    soma4 += parseInt(i)
}

lista.forEach(somar)
console.log("numero é ", soma4)