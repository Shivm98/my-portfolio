// ************ sticky navigation
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// ************ toggle navigation
const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', toggleMenu);

const listItems = document.querySelectorAll('li');
listItems.forEach(li => {
    li.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}


// ********* progress bar
const progressBar = document.querySelectorAll('.progress-bar');
progressBar.forEach(el => {
    animateProgressBar(el);
})

function animateProgressBar(progressBar){
    const interval = setInterval(() => {
        const computedStyle = getComputedStyle(progressBar);
        const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
        progressBar.setAttribute("data-label",`${width}`);
        progressBar.style.setProperty('--width', width + .1);
        if(width > 99.9){
            clearInterval(interval);
        }
    });
    return;
}