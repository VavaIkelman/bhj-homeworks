const reveal = document.querySelectorAll('div.reveal');
for (let i = 0; i < reveal.length; i++){
    window.addEventListener('scroll', function(){
        if ((window.innerHeight - reveal[i].getBoundingClientRect().top) > 0){
        reveal[i].classList.add('reveal_active');
        };
        if (reveal[i].getBoundingClientRect().bottom < 30){
            reveal[i].classList.remove('reveal_active');
            };
});
}