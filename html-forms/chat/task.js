const chatWidget = document.querySelector('.chat-widget'),
chatInput = document.getElementById('chat-widget__input'),
side = document.querySelector('.chat-widget__side'),
messages = document.getElementById('chat-widget__messages'),
chatContainer = document.querySelector('.chat-widget__messages-container'),

bot = [
    'Кто тут?',
     `Я вас не звал` ,
      `Все заняты перезвоните никогда`,
       `Пока`,
        `Вы нам не подходите!`,
        `Good Bye`,
        "Вы не купили ни одного товара, чтобы так со мной разговаривать!"
];


side.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

chatInput.addEventListener('keydown', (e) => {
    if (chatInput.value !== '' && e.keyCode === 13){
        messages.innerHTML += getMessage(chatInput.value, true);
        chatInput.value = '';
        messages.innerHTML += getMessage(bot[randomItem(0, bot.length - 1)]);
        chatContainer.scrollTop = chatContainer.scrollHeight - chatContainer.getBoundingClientRect().height;
    }
    });

function getMessage(text, isClient = 0){
    const now = new Date();
    return `<div class="message${isClient ? ' message_client' : ''}">
    <div class="message__time">${now.getHours() + ':' + now.getMinutes()}</div>
    <div class="message__text">
      ${text}
    </div>
  </div>`;
}

function randomItem(min, max){
    let randm = min + Math.random() * (max + 1 - min);
    return Math.floor(randm);
}