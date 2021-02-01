const input = document.getElementById('task__input'),
      button = document.getElementById('tasks__add'),
      tasksList = document.getElementById('tasks__list'),
      btnClose = document.getElementsByClassName('task__remove');

function clickDeleteButton(e){
    e.preventDefault();
    e.target.parentElement.remove();
};

function addTask(){
    tasksList.insertAdjacentHTML('beforeend',`
            <div class="task">
              <div class="task__title">
                ${input.value}
              </div>
              <a href="#" class="task__remove">&times;</a>
            </div>`);

    input.value = '';

    btnClose[btnClose.length - 1].addEventListener('click', clickDeleteButton );
};

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value) {
        addTask();
    }
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value) {
        addTask();
    }
});