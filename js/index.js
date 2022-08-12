const btnMenu = document.querySelector('#open-menu');
const menu = document.querySelector('#menu');

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('active');
    menu.classList.toggle('active');
});