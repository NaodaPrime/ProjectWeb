// Array que contendrá las imágenes de la galería
var images = document.querySelectorAll('.gallery-item');
var currentIndex = 0;  // Índice actual en la galería

// Función para abrir el lightbox y mostrar una imagen
function openLightbox(img) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");

    // Mostrar el lightbox y cargar la imagen seleccionada
    lightbox.style.display = "block";  
    lightboxImg.src = img.src;

    // Encontrar el índice de la imagen seleccionada en el array de imágenes
    currentIndex = Array.from(images).indexOf(img);

    // Añadir el listener para el teclado
    document.addEventListener('keydown', handleKeyPress);
}

// Función para cerrar el lightbox al hacer clic fuera de la imagen
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";  // Ocultar el lightbox

    // Eliminar el listener del teclado
    document.removeEventListener('keydown', handleKeyPress);
}

// Evitar que el lightbox se cierre al hacer clic en la imagen o los botones
document.getElementById('lightbox').addEventListener('click', function (event) {
    if (event.target === document.getElementById('lightbox')) {
        closeLightbox();
    }
});

// Función para cambiar de imagen (navegar entre imágenes)
function changeSlide(n) {
    currentIndex += n;  // Cambia el índice actual por el valor de 'n'

    // Si llegamos al final o al principio, aseguramos que el índice esté dentro del rango
    if (currentIndex >= images.length) {
        currentIndex = 0;  // Vuelve al principio
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;  // Vuelve al final
    }

    // Cambiar la imagen mostrada en el lightbox
    var lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = images[currentIndex].src;
}

// Función para manejar el evento de teclas
function handleKeyPress(event) {
    if (event.key === "ArrowRight") {
        changeSlide(1);  // Cambiar a la siguiente imagen
    } else if (event.key === "ArrowLeft") {
        changeSlide(-1); // Cambiar a la imagen anterior
    } else if (event.key === "Escape") {
        closeLightbox(); // Cerrar el lightbox con la tecla Esc
    }
}

  