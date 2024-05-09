'use strict';

/* hamburger menu */
const btnOpenHamburger = document.querySelector('.header__hamburger');
const btnCloseHamburger = document.querySelector('.header__hamburger-close');
const navMenu = document.querySelector('.header__nav-menu');
const logoHamburger = document.querySelector('.header__logo-hamburger');


function openMenuHamburger () {
    navMenu.style.display = 'block';
    btnOpenHamburger.style.display = 'none';
    btnCloseHamburger.style.display = 'inline-block';
    logoHamburger.style.marginBottom = '.8rem';
}

function closeMenuHamburger () {
    navMenu.style.display = 'none';
    btnOpenHamburger.style.display = 'inline-block';
    btnCloseHamburger.style.display = 'none';
    logoHamburger.style.marginBottom = '0';
}

btnOpenHamburger.addEventListener('click', openMenuHamburger);
btnCloseHamburger.addEventListener('click', closeMenuHamburger);


/* modal window */
const formSwitch = document.querySelector('.form__input-switch');
const inputPassword = document.querySelector('.form__input_password');

formSwitch.addEventListener('click', () => {
    formSwitch.classList.toggle('form__input-switch_active');
    if(inputPassword.getAttribute('type') === 'password') {
        inputPassword.setAttribute('type', 'text')
    } else {
        inputPassword.setAttribute('type', 'password')
    }
})

const modalWindow = document.querySelector('.modal-window');
const buttonOpenForm = document.querySelector('.btn');
const buttonOpenFormFromNav = document.querySelector('.header__nav-menu-list-item_btn');
const buttonOpenFormFromFooter = document.querySelector('.footer__list-item_btn');
const buttonCloseForm = document.querySelector('.form__exit');

buttonOpenForm.addEventListener('click', () => {
    modalWindow.style.display = 'block';
})

buttonOpenFormFromNav.addEventListener('click', () => {
    modalWindow.style.display = 'block';
})

buttonOpenFormFromFooter.addEventListener('click', () => {
    modalWindow.style.display = 'block';
})

buttonCloseForm.addEventListener('click', () => {
    modalWindow.style.display = 'none';
})
modalWindow.addEventListener('click', (event) => {
    if(event.target.classList.contains('modal-window')) {
        modalWindow.style.display = 'none';
    }
})

/* to close all windows on the page */
window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
        modalWindow.style.display = 'none';
        navMenu.style.display = 'none';
        btnOpenHamburger.style.display = 'inline-block';
        btnCloseHamburger.style.display = 'none';
        logoHamburger.style.marginBottom = '0';
    }
})