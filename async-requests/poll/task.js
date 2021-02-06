let question = document.getElementById('poll__title'),
      answers = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();
xhr.open("GET", 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
        let base = JSON.parse(xhr.responseText),
            baseAnswers = base.data.answers;
        question.innerText = base.data.title;
        for ( let answer in baseAnswers){
            let btn = document.createElement('button');
            btn.className = 'pool__answer';
            btn.innerText = baseAnswers[answer];
            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
            });
            answers.appendChild(btn); 
        } 
        
    }
               
}