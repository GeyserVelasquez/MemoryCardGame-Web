window.addEventListener('DOMContentLoaded', function() {

    //Logica para que las etiquetas de audio se pongan en true

    fetch('Scripts/Logical/Music/Music.js')
    .then(response => response.json())
    .then(data => {
        // Hacer algo con los datos recibidos
        // let audio = document.getElementById('audio');
        // audio.autoplay = data;
        console.log(data);
    })
    .catch(error => {
      // Manejar cualquier error que ocurra
      console.error('Error:', error);
    });

    // ver si true o false 
    
    // play o pause de ser el caso

    let audio = document.getElementById('audio');

    if (audio.autoplay){
        audio.play();
    } else {
        audio.pause();
    }
    
    sound.addEventListener("click", function() {
        let audio = document.getElementById('audio');
        let speaker = document.getElementById('speaker');
        if (audio.paused){
            audio.play();
            speaker.src = "./Assets/Imagenes/soundON.svg";
        } else {
            audio.pause();
            speaker.src = "./Assets/Imagenes/soundOFF.svg";
        }
    });
}); 