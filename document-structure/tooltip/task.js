const links = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';

[...links].forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();     
        if (item.nextElementSibling.className === 'tooltip tooltip_active'){
            item.nextElementSibling.classList.remove('tooltip_active');
        } else {
            tooltip.classList.add('tooltip_active');
            tooltip.textContent = item.title;
            tooltip.style.left = item.offsetLeft + document.body.scrollLeft + "px";
            tooltip.style.top = item.offsetTop + document.body.scrollTop + 20 + 'px';
            item.after(tooltip);
        }
    });
});
window.addEventListener('scroll', (e) => {
    tooltip.classList.remove('tooltip_active');
});