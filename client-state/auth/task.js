 const signinForm = document.getElementById('signin__form'),
       signin = document.getElementById('signin'),
       welcome = document.getElementById('welcome'),
       userId = document.getElementById('user_id'),
       closeBtn = document.getElementById('close_btn');

if (localStorage.getItem('id')){
    welcome.classList.add('welcome_active');
    userId.innerText = localStorage.getItem('id');
} else {
    signin.classList.add('signin_active');
}

 signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(signinForm);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == xhr.DONE && xhr.status == 200){
            let data = JSON.parse(xhr.responseText);
            if (data.success === true) {
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = data.user_id;
                localStorage.setItem('id', data.user_id);
            } else {
                alert('Неверный логин/пароль');
            }
            
        }
    });
    [...signinForm.querySelectorAll('.input')].forEach((item) => item.value = '');
 });
 
closeBtn.addEventListener('click', () => {
    localStorage.removeItem('id');
    window.location.reload();
});