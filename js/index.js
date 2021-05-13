'use strict';
//Side menu toggle
const openMenu = document.querySelector('#menu-toggle');
const closeMenu = document.querySelector('#close-menu');
const mainContainer = document.querySelector('.main');
const menu = document.querySelector('.menu');
openMenu.addEventListener('click', () => {
  menu.classList.add('active-menu');
  // add listener to disable scroll
  window.addEventListener('scroll', noScroll);
});

//Closing the Menu
closeMenu.addEventListener('click', closeMenuToggle);
mainContainer.addEventListener('click', closeMenuToggle);

//Close Menu function
function closeMenuToggle() {
  menu.classList.remove('active-menu');
  // Remove listener to re-enable scroll
  window.removeEventListener('scroll', noScroll);
};

//When the menu is open the page not scrolling
function noScroll() {
  window.scrollTo(0, 0);
};