
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    // Toggle the "inactive" class on the desktop menu
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    // Toggle the "inactive" class on the mobile menu
    mobileMenu.classList.toggle('inactive');
}
