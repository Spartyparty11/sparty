const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

function showImage(index) {
    const offset = -index * 100; // Calculate the position to move the carousel
    carouselImages.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.length - 1; // Move to the previous image
    showImage(index);
});

nextButton.addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : 0; // Move to the next image
    showImage(index);
});

