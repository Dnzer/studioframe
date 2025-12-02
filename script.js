let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// --- Funções para o Modal (Visualizador Grande) ---

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndexModal = 1;

function plusSlidesModal(n) {
  showSlidesModal(slideIndexModal += n);
}

function currentSlideModal(n) {
  showSlidesModal(slideIndexModal = n);
}

function showSlidesModal(n) {
  let i;
  // Note que aqui estamos pegando os slides com a classe 'mySlidesModal'
  let slides = document.getElementsByClassName("mySlidesModal");
  
  if (n > slides.length) {slideIndexModal = 1}
  if (n < 1) {slideIndexModal = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexModal-1].style.display = "block";
}

// Chame a função showSlidesModal(1) pelo menos uma vez para garantir que o primeiro slide seja exibido ao abrir.