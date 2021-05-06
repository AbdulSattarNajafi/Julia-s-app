'use strict';
//Side menu toggle
const openMenu = document.querySelector('#menu-toggle');
const closeMenu = document.querySelector('#close-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-llink');
const overLay = document.querySelector('.overlay');
openMenu.addEventListener('click', () => {
  menu.classList.add('active-menu');
  // openMenu.style.display = 'none';
  overLay.classList.add('active-overlay');
  // add listener to disable scroll
  window.addEventListener('scroll', noScroll);
});
menuLinks.forEach(menuLink =>{
  menuLink.addEventListener('click', closeMenuToggle);
});
closeMenu.addEventListener('click', closeMenuToggle);
overLay.addEventListener('click', closeMenuToggle);

function closeMenuToggle() {
  menu.classList.remove('active-menu');
  // openMenu.style.display = 'block';
  overLay.classList.remove('active-overlay');
  // Remove listener to re-enable scroll
  window.removeEventListener('scroll', noScroll);
}
function noScroll() {
  window.scrollTo(0, 0);
}



