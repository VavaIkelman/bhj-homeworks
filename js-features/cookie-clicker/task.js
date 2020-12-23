const cookie = document.getElementById("cookie"),
clickerCounter = document.getElementById("clicker__counter");
cookie.onclick = function() {
    let counter = clickerCounter.textContent;
    clickerCounter.textContent++ ;
    cookie.width = cookie.width === 200 ? cookie.width = 300 : cookie.width = 200;
};
