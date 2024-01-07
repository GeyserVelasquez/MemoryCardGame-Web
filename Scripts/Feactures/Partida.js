import { Jugador } from "./Feactures.js";

export class Partida {
    jugador1;
    jugador2; 
    jugadorActual;
    puedesHacerClic = true; 
    cartasDesactivadas = 0; 
    cartasDesactivadasTotal = 0; 
    carta1;
    carta2;
    PuntajeTotalPorTurnoGanador;

    constructor() {
        this.jugador1 = new Jugador("Red");
        this.jugador2 = new Jugador("Blue");
        this.jugadorActual = this.jugador1;
        // this.jugadorActual.aumentarContTurnos(1);
    }
    
    CambiarTurno() {

        let TurnHeader = document.getElementById('TurnHead');

        if (this.jugadorActual === this.jugador1) {

            this.jugadorActual = this.jugador2;
            TurnHeader.innerHTML = "Turno: Blue";
        } else {

            this.jugadorActual = this.jugador1;
            TurnHeader.innerHTML = "Turno: Red";
        }
    }

    manejarEventoCarta(carta) {
        if (this.puedesHacerClic && carta.disabled===false) {

            // carta.disabled = true;
            let imgURL = "Assets/Imagenes/Carta"+carta.id+".jpg"; // en esta parte solo se cambia la imagen para similuar que se voltea la carta
            carta.style.backgroundImage = `url('${imgURL}')`;
            this.cartasDesactivadas++; 

            switch (this.cartasDesactivadas) { //este switch es para validar cuantas cartas se ha levantado actualmente el jugadorActual
                case 1: 
                    this.carta1 = carta;
                    break;
                case 2:
                    this.carta2 = carta;
                    this.puedesHacerClic = false; // aca desactivamos los clicks a otras cartas para evitar errores. 
                    this.iniciarTemporizadorVerificacion(); 
                    break;
            }
        }
    }

    iniciarTemporizadorVerificacion() {
        setTimeout(() => {
            this.verificarJugada();
        }, 800);
    }

    verificarJugada() {
        if (this.carta1 !== null && this.carta2 !== null) 
        { 
            if (this.carta1.id === this.carta2.id){
                    //Aca reiniciamos las variables para la comprobación siguiente
                    this.carta1 = null;
                    this.carta2 = null;
                    this.jugadorActual.puntos+=5;
                    this.cartasDesactivadasTotal++;
                    this.alterarPuntaje();
                    
            } else {

                this.carta1.disabled = false;
                this.carta2.disabled = false;
                let imgURL = "Assets/Imagenes/Carta0.jpg"; // en esta parte solo se cambia la imagen para similuar que se voltea la carta
                this.carta1.style.backgroundImage = `url('${imgURL}')`;
                this.carta2.style.backgroundImage = `url('${imgURL}')`;
                this.CambiarTurno();
                this.jugadorActual.turnos++;
            }

            if (this.cartasDesactivadasTotal == 9) { 
                this.JuegoTerminado();
             }
             // Aqui habilitamos los clicks nuevamente
            this.puedesHacerClic = true;
            this.cartasDesactivadas = 0; 
        }

    }

    JuegoTerminado() {

        if (this.jugador1.getPuntajeTotal() > this.jugador2.getPuntajeTotal()) { 

            this.Ganador = this.jugador1;
        } else {
            this.Ganador = this.jugador2;
        }
        setTimeout(() => {
            let TurnHeader = document.getElementById('TurnHead');
            TurnHeader.innerHTML = "Ganador: " + this.Ganador.nombre;
        }, 500);
        
    }

    alterarPuntaje() {

        let puntos = this.jugadorActual.puntos;

        if (this.jugadorActual === this.jugador1) 
            {
                let puntaje = document.getElementById('RedPoint');
                puntaje.innerHTML = puntos;

            } else {

                let puntaje = document.getElementById('BluePoint');
                puntaje.innerHTML = puntos;
            }
    }
}