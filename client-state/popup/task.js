const modalMain = document.getElementById('subscribe-modal');
const btnClose = document.querySelector('.modal__close');


    if (!getCookie('popup')){
        modalMain.classList.add('modal_active');    
    } else {
        modalMain.className('modal');
     };

function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    document.cookie = 'popup=closed';
    modalMain.classList.remove('modal_active')
});
