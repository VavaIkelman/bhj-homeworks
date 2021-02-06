const list = document.getElementsByClassName('items'),
loader = document.getElementById('loader');

let xhr =  new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status == 200) {
        
        showMoney(xhr.responseText);
        loader.classList.remove('loader_active');
    }
});

function showMoney(answer){
    const data = JSON.parse(answer).response.Valute;
    for(let i in data) {
        const {CharCode, Value} = data[i];
        items.insertAdjacentHTML('beforeend',`
            <div class="item">
                <div class="item__code">${CharCode}</div>
                <div class="item__value">${Value}</div>
                <div class="item__currency">руб.</div>
            </div>    
        `);
    };
}