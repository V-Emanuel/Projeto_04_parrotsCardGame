let q_cartas = prompt("Quantas cartas você deseja?");

while(q_cartas < 4 || q_cartas > 14 || q_cartas%2 != 0){
    q_cartas = prompt("Numero de cartas inválido. Digite novamnte");
}
alert("tudo certo, nada errado");
