const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropMenuDesplegable = document.querySelector('.menu_desplegable')

toggleBtn.onclick = function () {
    dropMenuDesplegable.classList.toggle('open')
    const isOpen = dropMenuDesplegable.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

/* script para la slider-navigation */

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
        
    btns.forEach((btn) => {
        btn.classList.remove("active"); /* Este foreach hace que los puntos se desactiven cuando se toca y activa otro  */
    });

    slides.forEach((slide) => {
        slide.classList.remove("active"); 
    });

    contents.forEach((content) => {     /* Esta parte de codigo es para cambiar el contenido entre los puntos*/
        content.classList.remove("active"); 
    });  

    btns[manual].classList.add("active"); /* Linea de codigo que cambia el estado de los puntos de inactivos a activos */
    slides[manual].classList.add("active"); /* Linea de codigo que cambia el estado de los puntos de inactivos a activos */
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => { /* Complementa la linea de arriba para activar los puntos */
        sliderNav(i);
    });
});

/* codigo para el formulario*/
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
}