let boutonBurger = document.querySelector('.boutonBurger');
let menuBurger = document.querySelector('.menuBurger');

let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');

function toggleMenu() {
    menuBurger.classList.toggle('menuBurgerOpen');
    span1.classList.toggle('span1Open');
    span2.classList.toggle('span2Open');
    span3.classList.toggle('span3Open');
}

boutonBurger.addEventListener('click', toggleMenu);