import { Partida } from "../Feactures/Partida.js";

import { Carta } from "../Feactures/Feactures.js";

import {ListaSimple} from "../Feactures/ListaSimple.js";

const partida = new Partida();

let mazoCartas = new ListaSimple();

for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 2; j++) {
        let nuevaCarta = new Carta(i, 5); //Creacion de carta
        mazoCartas.agregarAlFinal(nuevaCarta); // Anadir Carta a la lista    
    }
}
// Mezclamos las cartas para mostrarlas desorganizadas al iniciar la partida
mazoCartas.shuffle();

// Agregar las cartas al panel en el nuevo orden aleatorio
let tablero = document.getElementById("tablero"); // Obtencion del elemento HTML tablero
let actual = mazoCartas.get(0);
let i=0;
let a = mazoCartas.tamanio;
console.log("tamanio: "+ a);
let imgURL = "Assets/Imagenes/Carta0.jpg";

while (actual !== null)
{   
    let carta = document.createElement("button"); //Creacion de un elemento HTML button
    carta.className = "carta"; //Asiganacion al button la clase CSS "carta"
    carta.id = actual.ID;
    
    // carta.style.backgroundImage = `url('${actual.imagen}')`; //Asignacion del fondo al button "carta"
    carta.style.backgroundImage = `url('${imgURL}')`;
    carta.onclick = () => {

        let ubicacion = "Assets/Imagenes/CartaR.jpg";
        carta.style.backgroundImage = `url('${ubicacion}')`;

        setTimeout(() => {
            partida.manejarEventoCarta(carta);
        }, 400);
    };
    
    tablero.appendChild(carta); //Insertar button "carta" al final del tablero
    actual = actual.siguiente; 
}