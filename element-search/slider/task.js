const slides = document.querySelectorAll('.slider__item');
const dots = [...document.querySelectorAll('.slider__dot')];
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
let currentSlide = 0;

next.onclick = () => {
    if (currentSlide + 1 === slides.length){
        currentSlide = 0;
    } else {
        currentSlide += 1;
    }
    showSlide(currentSlide);
}
prev.onclick = () => {
    if (currentSlide - 1 < 0){
        currentSlide = slides.length - 1;
    } else {
        currentSlide -= 1;
    }
    showSlide(currentSlide);
}

dots[currentSlide].classList.add('slider__dot_active');
dots.forEach((item, i) => item.onclick = () => {
    showSlide(i);
    currentSlide = i;
});

function showSlide(i){
    [...slides].forEach((item) => item.classList.remove('slider__item_active'));
    dots.forEach((item) => item.classList.remove('slider__dot_active'));
    slides[i].classList.add('slider__item_active');
    dots[i].classList.add('slider__dot_active');
}