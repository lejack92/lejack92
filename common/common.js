const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle('active');
});