const progress = document.getElementById( 'progress' ),
      form = document.getElementById('form');   

form.addEventListener('submit', (e) => {
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    
    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total;
    });

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);

    e.preventDefault();
});