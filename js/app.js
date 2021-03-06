'use strict';
//Side menu toggle
const openMenu = document.querySelector('#menu-toggle');
const closeMenu = document.querySelector('#close-menu');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
openMenu.addEventListener('click', () => {
  menu.classList.add('active-menu');
  // add listener to disable scroll
  window.addEventListener('scroll', noScroll);
});

//Closing the Menu
closeMenu.addEventListener('click', closeMenuToggle);
main.addEventListener('click', closeMenuToggle);

//Function for closing the Menu
function closeMenuToggle() {
  menu.classList.remove('active-menu');
  // Remove listener to re-enable scroll
  window.removeEventListener('scroll', noScroll);
};

//When the menu is open body is not scrollable
function noScroll() {
  window.scrollTo(0, 0);
};

//Curernt year for footer
const footerDate = document.querySelector('#footer-date');
footerDate.textContent = new Date().getFullYear();



