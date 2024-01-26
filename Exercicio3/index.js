/*
Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
*/


//1:
let contador = 1

while (contador <= 10){
    alert (`${contador++}`);
}

//2:
let contado2 = 10

while ( contado2 != 0){
   alert(`${contado2--}`);
}

//3:
let numeroMaximo3 = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo3 >= 0) {
    console.log(numeroMaximo3);
    numeroMaximo3--;
}

//4:
let numeroMaximo4 = prompt("Digite um número para a contagem progregressiva:");;
let contador4 = 0;

while (contado4 <= numeroMaximo4) {
    console.log(contado4);
    contado4++
}