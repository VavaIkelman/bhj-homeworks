const book = document.getElementById('book'),
size = document.querySelectorAll('.book__control_font-size .font-size'),
textColor = document.querySelectorAll('.book__control_color .color'),
background = document.querySelectorAll('.book__control_background .color');
size.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        addClasses(item, 'font-size_active');
    });
});
textColor.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        addClasses(item, 'color_active');
    });
});
background.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        addClasses(item, 'color_active');
    });
});
function addClasses(elem, classActive, classPref, datasetName){
    elem.parentElement.querySelector('.' + classActive).classList.remove(classActive);
    elem.classList.add(classActive);

    book.className = 'book';

    if (elem.getAttribute('data-size') === 'small'){
        book.classList.add('book_fs-small')
    } else if (elem.getAttribute('data-size') === 'big'){
        book.classList.add('book_fs-big')
    }else{
        book.className = 'book';
    }
    if (elem.getAttribute('data-text-color') === 'black'){
        book.classList.add('book_color-black')
    } else if (elem.getAttribute('data-text-color') === 'gray'){
        book.classList.add('book_color-gray')
    }else if (elem.getAttribute('data-text-color') === 'whitesmoke'){
        book.classList.add('book_color-whitesmoke');
    }
    if (elem.getAttribute('data-bg-color') === 'black'){
        book.classList.add('book_bg-black')
    } else if (elem.getAttribute('data-bg-color') === 'gray'){
        book.classList.add('book_bg-gray')
    }else if (elem.getAttribute('data-bg-color') === 'white'){
        book.classList.add('book_bg-white');
    }
}