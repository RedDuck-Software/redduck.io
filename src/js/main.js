document.addEventListener('DOMContentLoaded', function() {
    wow = new WOW({
        mobile: false,
    });
    wow.init();
    let menu = document.querySelector('.navigation');
    let burgerButton = document.querySelector('.burger');
    let body = document.querySelector('body');
    burgerButton.addEventListener('click', () => {
        menu.classList.toggle('navigation--shown');
        body.classList.toggle('body--overflow');
    })
    let menuItems = document.querySelectorAll('.navigation__item');
    let toTop = document.querySelector('.to-top-wrapper');
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menu.classList.remove('navigation--shown');
            body.classList.remove('body--overflow');
        })
    })
    toTop.addEventListener("click", () => {
        menu.classList.remove('navigation--shown');
        body.classList.remove('body--overflow');
    })
});