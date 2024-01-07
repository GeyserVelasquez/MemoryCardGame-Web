export class ListaSimple {

    constructor () {
        this.inicio = null;
        this.tamanio = 0;
    }

    esVacia() {
        return this.inicio === null;
    }

    agregarAlFinal( carta) {
        if (this.esVacia()) {
            this.inicio = carta;
        } else {
            let aux = this.inicio;
            while (aux.siguiente !== null) {
                aux = aux.siguiente;
            }
            aux.siguiente=carta;
        }
        this.tamanio++;
    }

    agregarAlInicio(carta) {
        carta.siguiente = this.inicio;
        this.inicio = carta;
        this.tamanio++;
    }

    get(index) {
        if (index < 0 || index >= this.tamanio) 
        {
            throw new IndexOutOfBoundsException("Índice fuera de los límites de la lista");
        }
        let aux = this.inicio;
        for ( let i = 0; i < index; i++) 
        {
            aux = aux.getSiguiente();
        }
        return aux;
    }

    shuffle(){

        let array = [];
        let n = this.tamanio;
        let actual = this.inicio;

        for (let i = 0; i < n; i++) {
            array.push(actual);
            actual = actual.siguiente;
        }

        // while(aux !== null){
        //     array.push(aux);
        //     aux = aux.siguiente;
        // }

        for (let i = n-1 ; i > 0 ; i--){   
            let j = Math.floor(Math.random() * (i + 1));
            [ array[i], array[j] ] = [ array[j], array[i] ];
        }

        for (let i = 0; i < n; i++) {
            console.log("Id: " + array[i]);
        }

        this.inicio = array[0];
        actual = this.inicio;

        for ( let i=1; i < n; i++) {
            actual.siguiente = array[i];
            actual = actual.siguiente;
        }

        actual.siguiente = null;

    }


}
