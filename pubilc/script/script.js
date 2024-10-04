// SLIDE FUNCTION

let slideIndex = 0;
let autoSlideTimeout;

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    console.log("slideIndex:", slideIndex, "total slides:", slides.length); // ตรวจสอบค่า

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(() => plusSlides(1), 5000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function initializeSlides() {
    slideIndex = 1;
    showSlides(slideIndex);
}

window.onload = initializeSlides;