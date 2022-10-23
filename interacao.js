let contador;

let q_cartas = prompt("Digite uma quantidade de cartas em 4 e 14: \n" + "Lembre-se que a quantidade deve ser par.");

while(q_cartas < 4 || q_cartas > 14 || q_cartas%2 != 0){
    q_cartas = prompt("Numero de cartas inválido. Digite novamente:");
}
const lista_de_cartas = document.querySelector('ul');

function adiciona_cartas(){
    for(i = 0; i < q_cartas; i++){
        const cartas = '<li onclick = "virar(this)"><img class = "papagaio" src="./midia/back.png"/></li>';
        lista_de_cartas.innerHTML += cartas;
    }   
}

adiciona_cartas()

function virar(elemento){
    elemento.classList.toggle("virada");
}