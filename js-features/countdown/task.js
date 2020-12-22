const cuntTime = document.getElementById("timer");
function showTimer(cunt){
        cunt = Math.round(startTimer);
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        return `${hours}: ${minutes}: ${seconds}`;    
    }

const showWin = function(){
    cuntTime.textContent -= 1;
     
    if (cuntTime.textContent == 0){
        alert(`Вы победили в конкурсе!`);
        clearInterval(timerId);
        location.reload(true)
    }
}
let timerId = setInterval(showWin, 1000);
