const mensajes = [
    "¡Feliz Cumpleaños!",
    "¡Felices 18!",
    "¡Feliz Día!",
    "¡Si lees esto, me debes 20€!",
    "¡Disfruta tu día!",
    "¡Espero que sea increíble!",
    "¡Feliz cumpleaños Alexia!",
    "¡Espero que tengas un día inolvidable!",
    "¡Feliz cumpleaños!",
    "Hoy es tu día, ¡disfrútalo! 🎈",
    "Que todos tus deseos se hagan realidad. 🎂",
    "¡Cacatua!",
    "Que cada instante sea feliz. 😊",
    "¡Eres una joya! 💎",
    "Más años, más recuerdos. 🎊"
];
const numGlobos = 10; 
const colores = ['#FF69B4', '#FF4500', '#32CD32', '#1E90FF', '#FFD700']; 


function generarGlobo(color) {
    const globo = document.createElement('div');
    globo.className = 'globo';

    globo.style.backgroundColor = color || colores[Math.floor(Math.random() * colores.length)];

    globo.style.top = Math.random() * 30 + 60 + 'vh'; 
    globo.style.left = Math.random() * 90 + 'vw'; 

    const cuerda = document.createElement('div');
    cuerda.className = 'cuerda';
    globo.appendChild(cuerda);
    const mensaje = document.createElement('div');
    mensaje.textContent = mensajes[Math.floor(Math.random() * mensajes.length)];
    mensaje.style.color = 'white'; 
    mensaje.style.fontWeight = 'bold'; 
    mensaje.style.textAlign = 'center'; 
    mensaje.style.marginTop = '40px'; 

    globo.appendChild(mensaje);

    globo.style.animation = 'float 5s linear infinite';

    // Evento para reventar el globo
 
    setTimeout(() => {
        globo.remove();
    }, 5000);

    document.body.appendChild(globo);
}

setInterval(() => {
    for (let i = 0; i < numGlobos; i++) {
        generarGlobo();
    }
}, 1000);

// Función para generar los fuegos artificiales
function crearFuegosArtificiales(x, y) {
    const numExplosiones = 30;
    const coloresFuegos = ['#FF4500', '#FFD700', '#32CD32', '#1E90FF', '#FF69B4'];
    for (let i = 0; i < numExplosiones; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;

        const angle = Math.random() * 2 * Math.PI; // Random angle
        const distance = Math.random() * 150 + 100; // Random distance
        const color = coloresFuegos[Math.floor(Math.random() * coloresFuegos.length)];

        firework.style.backgroundColor = color;
        firework.style.transform = `translate(${distance * Math.cos(angle)}px, ${distance * Math.sin(angle)}px)`;
        firework.style.width = '20px';
        firework.style.height = '20px';

        // Append to body
        document.body.appendChild(firework);

        // Remove firework after animation
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}

// Evento al hacer clic en el botón de fuegos artificiales
document.getElementById('firework-button').addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    crearFuegosArtificiales(x, y);
});
document.getElementById('mostrar-mensaje').addEventListener('click', () => {
    const mensaje = `
Maybe you’re not a magician,
but your heart will lead the way.
With every patient you care for,
you’ll be the best doc someday.
`;
    alert(mensaje);
});