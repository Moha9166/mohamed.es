var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);
function initSlideShow(slideshow) {

  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

  var index = 0, time = 2850;
  slides[index].classList.add('active');  
  
  setInterval( () => {
    slides[index].classList.remove('active');
    
    //Go over each slide incrementing the index
    index++;
    
    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0; 
    
    slides[index].classList.add('active');

  }, time);
}
function hola() {
    document.getElementById("lateral").style.display = "block";
}
function adios() {
    document.getElementById("lateral").style.display = "none";
}
function inicio(){
  window.location.href='../../index.html';
}
function noticias(){
  window.location.href='../../pages/noticias.html';
}
function fotos(){
  window.location.href='../../pages/fotos.html';
}
function videos(){
  window.location.href='../../pages/videos.html';
}
function acerca(){
  window.location.href='../../pages/acerca.html';
}
