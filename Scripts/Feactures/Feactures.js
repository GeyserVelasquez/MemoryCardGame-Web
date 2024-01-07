export class Carta {

    constructor(ID, Puntaje, imagen) {
        this.ID = ID;
        this.Puntaje = Puntaje; 
        this.imagen = imagen;
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