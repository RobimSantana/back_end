// Loop While para Calcular a Sequencia de fibonacci
// A sequencia de fibonacci ele vai somando com o numero de cima

let a = 0, b = 1, temp;

while(a < 1000){
    console.log(a);
    temp = a;
    a = b
    b = temp + b
}