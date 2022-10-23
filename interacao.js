let contador;
const cartas = [];
let q_cartas = prompt("Quantas cartas você deseja?");

while(q_cartas < 4 || q_cartas > 14 || q_cartas%2 != 0){
    q_cartas = prompt("Numero de cartas inválido. Digite novamente:");
}
const lista_de_cartas = document.querySelector('ul');
function adiciona_cartas(){
    for(i = 0; i < q_cartas; i++){
        const item = '<li><img class = "papagaio" src="./midia/back.png"/></li>';
        lista_de_cartas.innerHTML = lista_de_cartas.innerHTML + item;
    }
    
}
adiciona_cartas()