let contador = 0, i = 0, j = 0;
let carta, primeira_carta, segunda_carta;
let cartas_embarlhadas = [];
let img_frente = ['<li data-tipo ="1" onclick = "virar(this)">' +'<div class = "frente face" ><img  src="./midia/explodyparrot.gif"/></img></div>',
'<li data-tipo ="1" onclick = "virar(this)">' + '<div class = "frente face" ><img  src="./midia/explodyparrot.gif"/></img></div>',
'<li data-tipo ="2" onclick = "virar(this)">' + '<div class = "frente face" ><img src="./midia/bobrossparrot.gif"/></img></div>',
'<li data-tipo ="2" onclick = "virar(this)">' + '<div class = "frente face" ><img src="./midia/bobrossparrot.gif"/></img></div>',
'<li data-tipo ="3" onclick = "virar(this)">' + '<div class = "frente face" ><img src="./midia/fiestaparrot.gif"/></img></div>',
'<li data-tipo ="3" onclick = "virar(this)">' + '<div class = "frente face" ><img src="./midia/fiestaparrot.gif"/></img></div>',
'<li data-tipo ="4" onclick = "virar(this)">' + '<div class = "frente face" ><img src="./midia/metalparrot.gif"/></img></div>',
'<li data-tipo ="4" onclick = "virar(this)">' + '<div class = "frente face" ><img src="./midia/metalparrot.gif"/></img></div>',
'<li data-tipo ="5" onclick = "virar(this)">' + '<div class = "frente face" ><img src="./midia/revertitparrot.gif"/></img></div>',
'<li data-tipo ="5" onclick = "virar(this)">' + '<div class = "frente face" ><img src="./midia/revertitparrot.gif"/></img></div>',
'<li data-tipo ="6" onclick = "virar(this)">' + '<div class = "frente face" ><img src="./midia/tripletsparrot.gif"/></img></div>',
'<li data-tipo ="6" onclick = "virar(this)">' + '<div class = "frente face " ><img src="./midia/tripletsparrot.gif"/></img></div>',
'<li data-tipo ="7" onclick = "virar(this)">' + '<div class = "frente face" ><img src="./midia/unicornparrot.gif"/></img></div>',
'<li data-tipo ="7" onclick = "virar(this)">' + '<div class = "frente face" ><img src="./midia/unicornparrot.gif"/></img></div>'];
function comparador() { 
	return Math.random() - 0.5; 
}

const papagaio = '<div class = "verso face" ><img src="./midia/back.png"/></div>';
let q_cartas = prompt("Digite uma quantidade de cartas em 4 e 14: \n" + 
                "Lembre-se que a quantidade deve ser par.");


while(q_cartas < 4 || q_cartas > 14 || q_cartas%2 != 0){
    q_cartas = prompt("Numero de cartas inválido. Digite novamente:");
}

const lista_de_cartas = document.querySelector('ul');


function adiciona_cartas(){
    for(i = 0; i < q_cartas; i++){
        carta = img_frente[i] + papagaio +'</li>';
        cartas_embarlhadas.push(carta);
    }  
    cartas_embarlhadas.sort(comparador);
    console.log(cartas_embarlhadas);
    lista_de_cartas.innerHTML = cartas_embarlhadas;
}
adiciona_cartas()

function virar(elemento){
    elemento.classList.add("virada");
    contador++;
    if(contador == 2){
         setTimeout(desvirar, 1000);
         contador = 0;
    }
}

function desvirar(){
    let cartas_viradas = document.querySelectorAll('.virada');
    for(i = 0; i< q_cartas.length; i++){
        for(j = 0; j< q_cartas.length; j++){
            if(cartas_viradas[0].getAttribute('data-tipo', i) !== cartas_viradas[1].getAttribute('data-tipo', j) && i!=j
            && cartas_viradas[0].classList.contains('ja_passou') != true &&
            cartas_viradas[1].classList.contains('ja_passou') != true) {     
            cartas_viradas[0].classList.remove('virada')
            cartas_viradas[1].classList.remove('virada');
            }else if( i!=j){
            cartas_viradas[0].classList.add('ja_passou');
            cartas_viradas[1].classList.add('ja_passou');
        }           
     }
}
}

