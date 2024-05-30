document.addEventListener('DOMContentLoaded', function () {
    var carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleCaptions'), {
        interval: 3000, // Cambiar de imagen cada 3 segundos
        ride: 'carousel'
    });
});

