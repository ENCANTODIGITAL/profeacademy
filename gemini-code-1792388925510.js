// ===========================
// VARIABLES GLOBALES Y ELEMENTOS
// ===========================
const cineContainer = document.getElementById('cineContainer');
const cineVideo = document.getElementById('cineVideo');
const temarioList = document.getElementById('temarioList');
const recomendadosList = document.getElementById('recomendadosList');
const toggleMode = document.getElementById('toggleMode');

// ===========================
// FUNCIONES DEL MODO CINE
// ===========================
function openCine(url, categoria) {
  cineVideo.src = url;
  cineContainer.style.display = 'flex';
  // Activa la animación con un pequeño delay
  setTimeout(() => cineContainer.classList.add('active'), 10);
  cargarTemario(categoria);
  cargarRecomendados(categoria);
}

function closeCine() {
  // Quita la clase para iniciar la animación de salida
  cineContainer.classList.remove('active');
  setTimeout(() => {
    cineVideo.src = '';
    cineContainer.style.display = 'none';
  }, 400); // Espera a que termine la transición de CSS
}

function cargarTemario(categoria) {
  const temarios = {
    'Productos Notables': ['Binomio al cuadrado', 'Binomio al cubo', 'Diferencia de cuadrados', 'Ejercicios prácticos'],
    'Fracciones': ['¿Qué es una fracción?', 'Tipos de fracciones', 'Sumar y restar fracciones', 'Problemas aplicados'],
    'Conjuntos': ['¿Qué son los conjuntos?', 'Operaciones entre conjuntos', 'Diagramas de Venn', 'Ejercicios de unión e intersección'],
    'Leyes de Exponentes': ['¿Qué es la potenciación?', 'Multiplicación de bases iguales', 'Potencia de potencia', 'Leyes avanzadas']
  };
  
  // Si la categoría no existe en el diccionario, muestra un temario por defecto
  const items = temarios[categoria] || ['Introducción al tema', 'Ejemplos paso a paso', 'Práctica calificada'];
  temarioList.innerHTML = items.map(t => `<li>${t}</li>`).join('');
}

function cargarRecomendados(categoria) {
  const recomendados = {
    'Productos Notables': ['Factorización básica', 'Expresiones Algebraicas', 'Ecuaciones de primer grado'],
    'Fracciones': ['Números Enteros', 'Razones y Proporciones', 'Operaciones combinadas'],
    'Conjuntos': ['Lógica proposicional', 'Subconjuntos y Potencia', 'Problemas con cardinales'],
    'Leyes de Exponentes': ['Radicación', 'Ecuaciones Exponenciales', 'Notación Científica']
  };
  
  const items = recomendados[categoria] || ['Repaso general', 'Trucos matemáticos', 'Ejercicios avanzados'];
  recomendadosList.innerHTML = items.map(v => `<li>${v}</li>`).join('');
}

// ===========================
// EVENTOS AL CARGAR EL DOM
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Control de Modo Oscuro / Claro
  toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Cambia el ícono del botón según el modo activo
    toggleMode.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
  });

  // 2. Carrusel de Videos Horizontal
  const track = document.querySelector(".video-track");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (track && prevBtn && nextBtn) {
    const scrollAmount = 320; // Ancho de desplazamiento (ancho de tarjeta + gap)

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }
});