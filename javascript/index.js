console.log('hi');

gsap.registerPlugin(ScrollTrigger);

// selectors
const hamburgerMenu = document.querySelector('#hamburger');
const closeIcon = document.querySelector('#close')
const menu = document.querySelector('.menu');

const carousel = document.querySelector('.carousel')
const newsSection = document.querySelector('#news')
const introSection = document.querySelector('#intro')

// functions
function openMenu(){
  hamburgerMenu.classList.add('hidden');
  menu.classList.remove('hidden');
};

function closeMenu(){
  hamburgerMenu.classList.remove('hidden');
  menu.classList.add('hidden');
}

// GSAP
function initIntro() {
  // set up scrollTrigger animation for the when the intro scrolls out
  let designArea = gsap.timeline({
      scrollTrigger: {
          trigger: '#design-image', //referencia de scroll
          scrub: 1,
          start: "top bottom", // position of trigger meets the scroller position
          end: "800 center" // div, view
      }
  });

  designArea.from('.intro__title', {x: -400, duration: 3, opacity: 0, ease: 'power4'})
  designArea.from('#find-your-style', {x: 500, duration: 3}, '-= 3' )

  gsap.from('.universe-t', {y: 400, duration: 1, opacity: 0})

  let telas = gsap.timeline({
    scrollTrigger: {
      trigger: '.telas',
      scrub: 1,
      start: "top bottom",
      end: "center top"
    }
  });

  telas.from('.fc-1', {y: 200, duration: 1, opacity: 0})
        .from('.fc-2', {y: 200, duration: 2, opacity: 0}, '-= 1' )
        .from('.fc-3', {y: 200, duration: 3, opacity: 0}, '-= 2' )
        .from('.fc-4', {y: 200, duration: 3, opacity: 0}, '-= 3' )
}

function initSlides() {
    
  // Animation of each slide scrolling into view

  let tl = gsap.timeline({
      scrollTrigger: {
          trigger: '#intro',
          // start: "40% 50%", // position of trigger meets the scroller position
          start: "top bottom",
          end: "center top",
          markers: false
      }
  });

  tl.from(intro.querySelectorAll('.slide-p'), {
      y: 200,
      duration: 2,
      scrub: 1,
      ease: "power4",
      stagger: 0.1
  })
};
  

// event listeners
hamburgerMenu.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);

window.onload = () => {
  initIntro()
  initSlides()
};