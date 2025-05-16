function start() {
  document.getElementById("popup").style.display = "none";
}

function toggleVale(element) {
  const contenido = element.querySelector('.contenido');
  if (contenido.style.display === "block") {
    contenido.style.display = "none";
  } else {
    contenido.style.display = "block";
  }
}

const sections = document.querySelectorAll('.section');

function revealOnScroll() {
  const triggerPoint = window.innerHeight - 100; // 100px antes de la parte inferior de la pantalla
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerPoint) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
