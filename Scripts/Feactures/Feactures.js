export class Carta {

    constructor(ID, Puntaje) {
        this.ID = ID;
        this.Puntaje = Puntaje;
        this.siguiente = null; 
    }

    
}

export class Jugador {

    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0;
        this.turnos = 0; 
    }

    getPuntajeTotal(){
        return this.puntos-this.turnos;
    }
    
}