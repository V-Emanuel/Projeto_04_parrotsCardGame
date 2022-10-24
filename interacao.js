let contador = 0;
let carta;
let cartas_embarlhadas = [];
let img_frente = ['<div class = "frente face" ><img  src="./midia/explodyparrot.gif"/></div>',
                    '<div class = "frente face" ><img  src="./midia/explodyparrot.gif"/></div>',
                    '<div class = "frente face" ><img src="./midia/bobrossparrot.gif"/></div>',
                    '<div class = "frente face" ><img src="./midia/bobrossparrot.gif"/></div>',
                    '<div class = "frente face" ><img src="./midia/fiestaparrot.gif"/></div>',
                    '<div class = "frente face" ><img src="./midia/fiestaparrot.gif"/></div>',
                    '<div class = "frente face" ><img src="./midia/metalparrot.gif"/></div>',
                    '<div class = "frente face" ><img src="./midia/metalparrot.gif"/></div>',
                    '<div class = "frente face" ><img src="./midia/revertitparrot.gif"/></div>',
                    '<div class = "frente face" ><img src="./midia/revertitparrot.gif"/></div>',
                    '<div class = "frente face" ><img src="./midia/tripletsparrot.gif"/></div>',
                    '<div class = "frente face" ><img src="./midia/tripletsparrot.gif"/></div>',
                    '<div class = "frente face" ><img src="./midia/unicornparrot.gif"/></div>',
                    '<div class = "frente face" ><img src="./midia/unicornparrot.gif"/></div>'];
function comparador() { 
	return Math.random() - 0.5; 
}
const papagaio = '<div class = "verso face" ><img src="./midia/back.png"/></div>';
let q_cartas = prompt("Digite uma quantidade de cartas em 4 e 14: \n" + "Lembre-se que a quantidade deve ser par.");


while(q_cartas < 4 || q_cartas > 14 || q_cartas%2 != 0){
    q_cartas = prompt("Numero de cartas inválido. Digite novamente:");
}

const lista_de_cartas = document.querySelector('ul');

function adiciona_cartas(){
    for(i = 0; i < q_cartas; i++){
        carta = '<li onclick = "virar(this)">' + img_frente[i] + papagaio +'</li >';
        cartas_embarlhadas.push(carta);
    }  
    cartas_embarlhadas.sort(comparador);
    lista_de_cartas.innerHTML = cartas_embarlhadas;
}
adiciona_cartas()

function virar(elemento){
    elemento.classList.add("virada");
    contador++;
}
