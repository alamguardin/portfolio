const btnMenu = document.querySelector('#open-menu');
const menu = document.querySelector('#menu');

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('active');
    menu.classList.toggle('active');
});

const btnTheme = document.querySelector('#toggle-theme');

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})