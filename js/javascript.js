document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.carousel-inner img');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 3000); // Cambiar de imagen cada 3 segundos

    function nextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }
});
