const cookie = document.getElementById("cookie"),
clickerCounter = document.getElementById("clicker__counter");
// let speedClick = document.getElementById("clicker__speed");
const quantity = [];
cookie.onclick = function() { 
    clickerCounter.textContent++ ;
    cookie.width = cookie.width === 200 ? cookie.width = 300 : cookie.width = 200;
};
