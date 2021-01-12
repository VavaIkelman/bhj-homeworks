const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modal = document.querySelectorAll('.modal');
// const modalActive = document.getElementsByClassName('modal modal_active');
function showModal(obj){
    obj.classList.add('modal_active');
}
showModal(modalMain);
const btnClose = document.getElementsByClassName('modal__close modal__close_times');
[].forEach.call(btnClose, function(el){
    el.onclick = function(){
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    }
});
document.querySelector('.show-success').onclick = function(){
        modalSuccess.classList.add('modal_active');
};