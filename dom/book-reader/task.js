const book = document.getElementById('book'),
size = document.querySelectorAll('.book__control_font-size .font-size');
size.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        addClasses(item, 'font-size_active');
    });
});
function addClasses(elem, classActive){
    elem.parentElement.querySelector('.' + classActive).classList.remove(classActive);
    elem.classList.add('font-size_active');

    book.className = 'book';
    if (elem.getAttribute('data-size') === 'small'){
        book.classList.add('book_fs-small')
    } else if (elem.getAttribute('data-size') === 'big'){
        book.classList.add('book_fs-big')
    }else{
        book.className = 'book';
    }
}