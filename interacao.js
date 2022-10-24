let contador = 0;
let carta;
let carta_virada;
let cont_finalizada = 0;
let cartas_embarlhadas = [];
let img_frente = ['<li class = "diferente" data-tipo ="1" onclick = "virar_1(this)">' +'<div class = "frente face" ><img  src="./midia/explodyparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="1" onclick = "virar_2(this)">' + '<div class = "frente face" ><img  src="./midia/explodyparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="2" onclick = "virar_1(this)">' + '<div class = "frente face" ><img src="./midia/bobrossparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="2" onclick = "virar_2(this)">' + '<div class = "frente face" ><img src="./midia/bobrossparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="3" onclick = "virar_1(this)">' + '<div class = "frente face" ><img src="./midia/fiestaparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="3" onclick = "virar_2(this)">' + '<div class = "frente face" ><img src="./midia/fiestaparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="4" onclick = "virar_1(this)">' + '<div class = "frente face" ><img src="./midia/metalparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="4" onclick = "virar_2(this)">' + '<div class = "frente face" ><img src="./midia/metalparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="5" onclick = "virar_1(this)">' + '<div class = "frente face" ><img src="./midia/revertitparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="5" onclick = "virar_2(this)">' + '<div class = "frente face" ><img src="./midia/revertitparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="6" onclick = "virar_1(this)">' + '<div class = "frente face" ><img src="./midia/tripletsparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="6" onclick = "virar_2(this)">' + '<div class = "frente face " ><img src="./midia/tripletsparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="7" onclick = "virar_1(this)">' + '<div class = "frente face" ><img src="./midia/unicornparrot.gif"/></img></div>',
'<li class = "diferente" data-tipo ="7" onclick = "virar_2(this)">' + '<div class = "frente face" ><img src="./midia/unicornparrot.gif"/></img></div>'];

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

function virar_1(elemento_1){
    elemento_1.classList.add("virada");
    contador++;
    if(contador == 2){
         setTimeout(desvirar, 1000);
         contador = 0;
    }
}
function virar_2(elemento_2){
    elemento_2.classList.add("virada");
    elemento_2.classList.remove("diferente");
    contador++;
    if(contador == 2){
         setTimeout(desvirar, 1000);
         contador = 0;
    }
}
function desvirar(){
    let cartas_viradas = document.querySelectorAll('.virada');
    if(cartas_viradas[0].getAttribute('data-tipo') == cartas_viradas[1].getAttribute('data-tipo')){
        cartas_viradas[0].classList.add('igual');
        cartas_viradas[1].classList.add('igual');
        cartas_viradas[0].classList.remove('diferente');
        cartas_viradas[1].classList.remove('diferente');
        cont_finalizada ++;
        console.log(const_finalizada);
    }
    if(cartas_viradas[0].getAttribute('data-tipo') !== cartas_viradas[1].getAttribute('data-tipo')){
       if(cartas_viradas[0].classList.contains('igual') == false &&
        cartas_viradas[1].classList.contains('igual') == false){
            cartas_viradas[0].classList.remove('virada');
            cartas_viradas[1].classList.remove('virada');
    }
}
}
function finalizada(){
    let todas_viradas = document.querySelectorAll('.virada');
    if(todas_viradas.length == q_cartas){
        alert("finalizado");
    }
    console.log(todas_viradas);
}