const dead = document.getElementById(`dead`);
const lost = document.getElementById(`lost`);

for (let i = 1; i < 9; i++){
    function getHole(i){
        let holeClick = document.getElementById(`hole${i}`);
        return holeClick
    }
    let hole = getHole(i);
    hole.onclick = function() {
      if (hole.className.includes(`hole_has-mole`) === true){
            dead.innerHTML++;
        } else {
            lost.innerHTML++;
        } 
        if (dead.textContent == 10){
            alert(`Победа!!!`);
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent == 5){
            alert(`Вы проиграли (((`);
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }        
}    
