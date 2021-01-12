const menuLink = document.querySelectorAll('.menu__link');
// const menuLink = document.getElementsByTagName('a');
[].forEach.call(menuLink, function(el){
for (let i of menuLink){
i.onclick = function(){
    if (i.nextElementSibling.className === 'menu menu_sub'){
        i.closest('li').querySelector('.menu .menu_sub').classList.add('menu_active');
    } else {
        i.closest('li').querySelector('.menu .menu_sub').classList.remove('menu_active');
    }
        return false;
    }
}
});