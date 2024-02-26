const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const tituloPortada = document.querySelector(".titulo_portada");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
    tituloPortada.style.visibility = "hidden"; // Oculta el título de la portada
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
    tituloPortada.style.visibility = "visible"; // Muestra el título de la portada
  }
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
    navToggle.setAttribute("aria-label", "Abrir menú");
    tituloPortada.style.visibility = "visible"; // Asegura que el título esté visible al cerrar el menú
  });
});


// Obtener la raíz
const plant = document.querySelector('.plant');

// Función para actualizar la altura de la raíz según el scroll
function updateRootHeight() {
    const scrollY = window.scrollY || window.pageYOffset; // Para compatibilidad con navegadores
    const windowHeight = window.innerHeight;
    const pageHeight = document.body.clientHeight;

    // Calcular la altura de la raíz
    const maxRootHeight = pageHeight - windowHeight;
    const rootHeight = (scrollY / maxRootHeight) * 100; // Convertir a porcentaje

    // Aplicar la altura a la raíz
    plant.style.height = `${rootHeight}px`;
}

// Actualizar la altura de la raíz cuando se hace scroll
window.addEventListener('scroll', updateRootHeight);

// Llamar a la función una vez al inicio para asegurar que la raíz tiene la altura correcta
updateRootHeight();
