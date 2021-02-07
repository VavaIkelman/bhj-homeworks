const textarea = document.getElementById('editor'),
btnClear = document.getElementById('clear');

textarea.value = localStorage.getItem('text');

textarea.addEventListener('keyup', (e) => {
    localStorage.setItem('text', textarea.value);
});

btnClear.addEventListener('click', () => textarea.value = '');