/* Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.*/


//1:
let dia1 = Sábado;
let dia2 = Domingo;
let diaDaSemana = prompt('Digite o dia da semana');


if (diaDaSemana = Sábado, Domingo){
    alert('Bom fim de semana!');
}   else {
    alert('Boa semana!');
}

//2:
numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

//3:
let pontuacao1 = 150;

if(pontuacao1 > 100){
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar');
}

//4:
let saldoConta = 1500;
alert(`Seu saldo é + ${saldoConta}`);

//5:
let nome = prompt('Escreva seu nome');
alert(`Seu nome é ${nome}`);
