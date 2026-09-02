const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Carrossel principal
const track = document.querySelector(".slider-track");
const slides = [...document.querySelectorAll(".slide")];
const dotsBox = document.querySelector(".slider-dots");
let currentSlide = 0;
let autoPlay;

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = `dot ${index === 0 ? "active" : ""}`;
  dot.setAttribute("aria-label", `Ir para imagem ${index + 1}`);
  dot.addEventListener("click", () => goToSlide(index));
  dotsBox.appendChild(dot);
});

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll(".dot").forEach((dot, i) =>
    dot.classList.toggle("active", i === currentSlide)
  );
}

document.querySelector(".prev").addEventListener("click", () => goToSlide(currentSlide - 1));
document.querySelector(".next").addEventListener("click", () => goToSlide(currentSlide + 1));

function startAutoPlay() {
  autoPlay = setInterval(() => goToSlide(currentSlide + 1), 5000);
}
function restartAutoPlay() {
  clearInterval(autoPlay);
  startAutoPlay();
}
track.parentElement.parentElement.addEventListener("mouseenter", () => clearInterval(autoPlay));
track.parentElement.parentElement.addEventListener("mouseleave", restartAutoPlay);
startAutoPlay();

// Carrossel de projetos
const projectTrack = document.querySelector(".project-track");
const projectCards = [...document.querySelectorAll(".project-card")];
let projectIndex = 0;

function cardsPerView() {
  return window.innerWidth <= 760 ? 1 : 3;
}

function updateProjects() {
  const cardWidth = projectCards[0].getBoundingClientRect().width;
  const gap = 22;
  const maxIndex = Math.max(0, projectCards.length - cardsPerView());
  projectIndex = Math.min(Math.max(projectIndex, 0), maxIndex);
  projectTrack.style.transform = `translateX(-${projectIndex * (cardWidth + gap)}px)`;
}

document.querySelector(".project-next").addEventListener("click", () => {
  const maxIndex = Math.max(0, projectCards.length - cardsPerView());
  projectIndex = projectIndex >= maxIndex ? 0 : projectIndex + 1;
  updateProjects();
});

document.querySelector(".project-prev").addEventListener("click", () => {
  const maxIndex = Math.max(0, projectCards.length - cardsPerView());
  projectIndex = projectIndex <= 0 ? maxIndex : projectIndex - 1;
  updateProjects();
});

window.addEventListener("resize", updateProjects);
updateProjects();
