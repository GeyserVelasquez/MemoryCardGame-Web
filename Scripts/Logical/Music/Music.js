// Obtener un booleano

function isVolumen() {
    const ajusteMusicaGuardado = localStorage.getItem('ajusteMusica');
    const volumen = ajusteMusicaGuardado === 'true';
    return volumen;
}

console.log(isVolumen());

let sound = document.getElementById('sound');
let audio = document.getElementById('audio');
let speaker = document.getElementById('speaker');

if (isVolumen()) {
    audio.autoplay = true;
    audio.play();
    speaker.src = "./Assets/Imagenes/soundON.svg";
} else {
    audio.autoplay = false;
    audio.pause();
    speaker.src = "./Assets/Imagenes/soundOFF.svg";
}

sound.addEventListener("click", function() {
    if (audio.paused){
        audio.play();
        speaker.src = "./Assets/Imagenes/soundON.svg";
        localStorage.setItem('ajusteMusica', "true");
    } else {
        audio.pause();
        speaker.src = "./Assets/Imagenes/soundOFF.svg";
        localStorage.setItem('ajusteMusica', "false");
    }
});