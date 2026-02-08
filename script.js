const siBoton = document.getElementById('siBoton');
const noBoton = document.getElementById('noBoton');
const musica = document.getElementById('musicaRomantica');
const heartContainer = document.querySelector('.heart-container');
const pregunta = document.getElementById('preguntaPrincipal');

let escalaSi = 1;

// Generar corazones rosados continuamente
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    const size = Math.random() * 15 + 10 + "px";
    heart.style.width = size;
    heart.style.height = size;
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 5 + "s";
    
    heartContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}
setInterval(createHeart, 400);

// Lógica para que el botón NO huya y el SÍ crezca
const moverNo = () => {
    // Agrandar el botón SÍ
    escalaSi += 0.35;
    siBoton.style.transform = `scale(${escalaSi})`;

    // Mover botón NO
    const x = Math.random() * (window.innerWidth - noBoton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBoton.offsetHeight);
    
    noBoton.style.position = "fixed";
    noBoton.style.left = `${x}px`;
    noBoton.style.top = `${y}px`;
};

noBoton.addEventListener('mouseover', moverNo);
noBoton.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Evita clics accidentales en móviles
    moverNo();
});

// Acción al decir que SÍ
siBoton.addEventListener('click', () => {
    // Reproducir "Tú y yo" de La Misma Gente
    musica.play();

    // Cambiar la interfaz
    pregunta.innerHTML = "¿cuantas veces dijiste que no? ❤️";
    pregunta.style.color = "#FF69B4";
    
    siBoton.style.display = "none";
    noBoton.style.display = "none";

    alert("Cuando creas que todo se te derrumba, que nadie esta para ti, cuando todo se vea demasiado mal, ahi estare yo mi amor, para amarte y cuidarte por siempre.");
});