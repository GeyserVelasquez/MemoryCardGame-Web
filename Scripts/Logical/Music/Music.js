async function fetchData() {
    try {
        let response = await fetch('Scripts/Logical/Music/Music.json');
        let data = await response.json();

        // Accede a la información compartida
        let music = data;

        

        // Obtiene la referencia al elemento de audio fuera de la función onclick
        let sound = document.getElementById('sound');
        let audio = document.getElementById('audio');
        let speaker = document.getElementById('speaker');

        if (music.volumen) {
            audio.autoplay = true;
        } else {
            audio.autoplay = false;
        }

        sound.addEventListener("click", function() {
            if (audio.paused){
                audio.play();
                speaker.src = "./Assets/Imagenes/soundON.svg";
                modificarJSON(true);
            } else {
                audio.pause();
                speaker.src = "./Assets/Imagenes/soundOFF.svg";
                modificarJSON(false);
            }
        });

    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

async function modificarJSON(value) {
    try {
        // Paso 1: Leer el archivo JSON existente
        let response = await fetch('Scripts/Logical/Music/Music.json');
        let data = await response.json();

        // Paso 2: Modificar los datos en memoria
        data.volumen = value;

        // Otras operaciones de modificación...

        // Paso 3: Escribir los datos modificados de vuelta al archivo
        await fetch('Scripts/Logical/Music/Music.json', {
            method: 'POST', // Puedes usar 'POST' dependiendo de la configuración del servidor
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        console.log('Archivo JSON modificado exitosamente.');
    } catch (error) {
        console.error('Error al modificar el archivo JSON:', error);
    }
}

// Llama a la función para iniciar la operación
fetchData()