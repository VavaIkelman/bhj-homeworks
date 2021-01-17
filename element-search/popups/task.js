const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');
const modalSuccess = document.getElementById('modal_success');
const modal = document.querySelectorAll('.modal');

const btnClose = document.getElementsByClassName('modal__close');
[...btnClose].forEach((item) => item.onclick = () => {
    const active = document.getElementsByClassName('modal_active');
    [...active].forEach((item => item.classList.remove('modal_active')))
});     

const showSuccess = document.querySelector('.show-success');
showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};