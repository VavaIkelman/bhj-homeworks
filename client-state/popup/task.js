const modalMain = document.getElementById('subscribe-modal');
const btnClose = document.querySelector('.modal__close');


    if (!getCookie('popup')){
        modalMain.classList.add('modal_active');    
    } else {
        modalMain.className('modal');
     };

// const getCookie = (name) => {
//     const value = "; " + document.cookie;
//     let parts = value.split("; " + name + "="); if (parts.length === 2) {
//     return parts.pop().split(";").shift(); 
//     }
// }

function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

btnClose.addEventListener('click', (e) => {
e.preventDefault();
    // setCookie('popup', 'closed');
    document.cookie = 'popup=closed';
    modalMain.classList.remove('modal_active')
});
   
// function setCookie(name, value){
//     let cookieString = name + "=" + escape(value);
//     document.cookie = cookieString;
// }

function deleteCookie(name){ //удаление куки для самопроверки
    let cookieDate = new Date();
    cookieDate.setTime(cookieDate.getTime() - 1);
    document.cookie = name += "=; expires=" + cookieDate.toGMTString();
}
