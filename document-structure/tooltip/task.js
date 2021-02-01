const links = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.style.display = 'block';

[...links].forEach((item) => {
    let top = item.getBoundingClientRect().top;
     if (top > 0 && top < window.innerHeight){
        item.insertAdjacentElement('afterend', tooltip);
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if (item.nextElementSibling === 'tooltip'){
                item.nextElementSibling.remove();
            } else {
                tooltip.textContent = item.title;
                item.after(tooltip);
            }
        });
    }
});