
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', togleDesktopMenu);

function togleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}