const slides = document.querySelectorAll('.slider__items .slider__item');
let currentSlide = 0;
const next = document.querySelector('.slider__arrow .slider__arrow_next');
const prev = document.querySelector('.slider__arrow .slider__arrow_prev');
function nextSlide(){
    goToSlide(currentSlide + 1);
}
function prevSlide(){
    goToSlide(currentSlide -1 );
}
function goToSlide(n){
    slides[currentSlide].className = 'slider__item';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slider__item slider__item_active';
}
const sliderArrows = document.querySelectorAll('.slider__arrows .slider__arrow');

[].forEach.call(sliderArrows, function(el){
    el.onclick = function(){
        if (el === next) {
            nextSlide();
        } else {
            prevSlide();
        }
    };
});