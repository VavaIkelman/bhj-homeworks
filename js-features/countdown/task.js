let x = setInterval(function(){ 
    const countTime = document.getElementById("timer");
    countTime.textContent -= 1;  
    if (countTime.textContent == 0){
        alert(`Вы победили в конкурсе!`);
        clearInterval(x);
        location.reload(true);
    };
}, 1000);
