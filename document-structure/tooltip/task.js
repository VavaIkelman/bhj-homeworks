const links = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.style.display = 'block';

[...links].forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (item.nextElementSibling === 'tooltip'){
            item.nextElementSibling.remove();
        } else {
            tooltip.textContent = item.title;
            tooltip.style.left = item.offsetLeft + document.body.scrollLeft + "px";
            tooltip.style.top = item.offsetTop + document.body.scrollTop + 20 + 'px';
            item.after(tooltip);
        }
    });
});