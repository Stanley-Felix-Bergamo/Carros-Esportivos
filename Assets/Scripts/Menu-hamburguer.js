const btnMobile = document.getElementById('navegacao__btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('navegacao');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);