const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle('active');
    document.querySelector('.navbar_toggleBtn i').classList.toggle('fa-xmark');
    document.querySelector('.navbar_toggleBtn i').classList.toggle('fa-solid');
    document.querySelector('.navbar_toggleBtn i').classList.toggle('fa-bars');
});