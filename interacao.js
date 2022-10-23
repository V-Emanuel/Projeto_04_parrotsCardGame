let contador;
let img_frente = ['<img class = "frente face" src="./midia/explodyparrot.gif"/>',
                    '<img class = "frente face" src="./midia/explodyparrot.gif"/>',
                    '<img class = "frente face" src="./midia/bobrossparrot.gif"/>',
                    '<img class = "frente face" src="./midia/bobrossparrot.gif"/>',
                    '<img class = "frente face" src="./midia/fiestaparrot.gif"/>',
                    '<img class = "frente face" src="./midia/fiestaparrot.gif"/>',
                    '<img class = "frente face" src="./midia/metalparrot.gif"/>',
                    '<img class = "frente face" src="./midia/metalparrot.gif"/>',
                    '<img class = "frente face" src="./midia/revertitparrot.gif"/>',
                    '<img class = "frente face" src="./midia/revertitparrot.gif"/>',
                    '<img class = "frente face" src="./midia/tripletsparrot.gif"/>',
                    '<img class = "frente face" src="./midia/tripletsparrot.gif"/>',
                    '<img class = "frente face" src="./midia/unicornparrot.gif"/>',
                    '<img class = "frente face" src="./midia/unicornparrot.gif"/>'];
img_frente.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}

const papagaio = '<img class = "verso face" src="./midia/back.png"/>';
let q_cartas = prompt("Digite uma quantidade de cartas em 4 e 14: \n" + "Lembre-se que a quantidade deve ser par.");


while(q_cartas < 4 || q_cartas > 14 || q_cartas%2 != 0){
    q_cartas = prompt("Numero de cartas inválido. Digite novamente:");
}

const lista_de_cartas = document.querySelector('ul');

function adiciona_cartas(){
    for(i = 0; i < q_cartas; i++){
        const cartas = '<li onclick = "virar(this)">'+ papagaio + img_frente[i] +'</li >';
        lista_de_cartas.innerHTML += cartas;
    }   
}
adiciona_cartas()

function virar(elemento){
    elemento.classList.toggle("virada");
}
