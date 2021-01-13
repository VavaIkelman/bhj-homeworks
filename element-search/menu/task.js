const menuLink = document.querySelectorAll('.menu__link');
const menuLinkActive = document.getElementsByClassName('menu menu_sub menu_active');
[].forEach.call(menuLink, function(el){
for (let i of menuLink){
i.onclick = function(){
    for (let n  of menuLinkActive){
        menuLinkActive[n].classList.remove('menu_active');
    };
    if (i.nextElementSibling.className === 'menu menu_sub'){
        i.closest('li').querySelector('.menu .menu_sub').classList.add('menu_active');
    } else {
        i.closest('li').querySelector('.menu .menu_sub').classList.remove('menu_active');
    }
        return false;
    }
}
});