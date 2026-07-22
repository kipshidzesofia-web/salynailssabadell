console.log("Bienvenido a SalyNails");
// Boton reservar
const boton = document.getElementById("reservarBtn");

// modal
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const form = document.querySelector(".booking-form")
// Abrir modal
boton.addEventListener("click" , function(e){
    e.preventDefault();
    modal.style.display = "flex"
});

// Cerrar modal ()

closeModal.addEventListener("click",function(){
    modal.style.display = "none"
});
// Cerrar haciendo click fuera 
window.addEventListener("click",function(e){
    if(e.target === modal){
        modal.style.display = "none"
    }
});

// Enviar formulario 
form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("✅ ¡Tu reserva fue enviada correctamente!");

    modal.style.display = "none";

     form.reset();
});

const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click",function(){
    menu.classList.toggle("active");
});
const links = document.querySelectorAll(".menu a");

links.forEach(function(link){
    link.addEventListener("click",function(){
        menu.classList.remove("active");
        menuToggle.innerHTML = "&#9776";
    });
});
const questions = document.querySelectorAll(".faq-question");
questions.forEach(function(question){
          
    question.addEventListener("click",function(){
        const answer = this.nextElementSibling;

        answer.classList.toggle("active")
    });
});
 const images = [
   "images/foto1.jpg",
   "images/foto2.jpg",
   "images/foto3.jpg",
   "images/foto4.jpg",
   "images/foto5.jpg"
 ];

 let index = 0;

 const slider = document.getElementById("slider");setInterval(function(){
    index++;

    if(index >= images.length){
        index = 0;

    }
    slider.src = images[index];
 }, 3000);
 const topBtn = document.getElementById("topBtn");

 // Show button when user scrolls down 300px
 window.onscroll = function() {
   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
     topBtn.style.display = "block";
   } else {
     topBtn.style.display = "none";
   }
 };
 
 // Scroll smoothly to top on click
 topBtn.addEventListener("click", () => {
   window.scrollTo({
     top: 0,
     behavior: "smooth"
   });
 });

 