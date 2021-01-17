const btns = document.querySelectorAll('.dropdown__value');

[...btns].forEach((button) => {
    const dropMenu = button.closest('.dropdown').querySelector('.dropdown__list');
    const items = button.closest('.dropdown').querySelectorAll('.dropdown__item');
    button.addEventListener('click', () =>{
       if (dropMenu.className.includes('dropdown__list_active')){
            dropMenu.classList.remove('dropdown__list_active');
        }else {
            dropMenu.classList.add('dropdown__list_active');
        } 
    });
    [...items].forEach((item) => {
        item.addEventListener('click', (e) => {
            button.textContent = item.textContent;
            dropMenu.classList.remove('dropdown__list_active');
            e.preventDefault();
        });
    });
});

