const links = document.querySelectorAll('.has-tooltip'),
      active = document.getElementsByClassName('tooltip tooltip_active');
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';

[...links].forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();  
        if (tooltip.innerText === item.title){
            tooltip.classList.remove('tooltip_active');
            return
        } 
        tooltip.classList.add('tooltip_active');
        tooltip.textContent = item.title;
        tooltip.style.left = item.offsetLeft + document.body.scrollLeft + "px";
        tooltip.style.top = item.offsetTop + document.body.scrollTop + 20 + 'px';
        item.after(tooltip);
    });
});
window.addEventListener('scroll', (e) => {
    tooltip.classList.remove('tooltip_active');
});