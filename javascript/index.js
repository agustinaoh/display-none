console.log('hi');



// selectors

const hamburgerMenu = document.querySelector('#hamburger');
const closeIcon = document.querySelector('#close')
const menu = document.querySelector('.menu');

const carousel = document.querySelector('.carousel')
const newsSection = document.querySelector('#news')

// functions

function openMenu(){
  hamburgerMenu.classList.add('hidden');
  menu.classList.remove('hidden');
};

function closeMenu(){
  hamburgerMenu.classList.remove('hidden');
  menu.classList.add('hidden');
}


// event listeners

hamburgerMenu.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
