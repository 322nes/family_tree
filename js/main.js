const develop = document.querySelectorAll('.develop');
// active = document.querySelector('.active'),
const navigationWrench = document.querySelector('.navigation__wrench');
// const developer = document.querySelector('developer');
const did = document.querySelector('#d1');
const didd = document.querySelector('#d2');
const body = document.querySelector('body');

function navigationToggle() {

  function classToggle() {
    for (const name of develop) {
      name.classList.toggle('active');
    }
    body.classList.toggle('active');
  }
  navigationWrench.onclick = classToggle;
};
navigationToggle();

// const navBtnOpen = document.querySelector('#navigation__link');
// const navBtnOpenPlus = document.querySelector('#btnbefore');
// const navBtnPlus = document.querySelector('.navigation__all-plus');
// const navOverlay = document.querySelector('#overlay');
// const margin = document.querySelector('.wrapper');

// function navigationBtnAll() {
//   function toggleNavAll() {
//     navOverlay.classList.toggle('overlay-show');
//     navBtnPlus.classList.toggle('navigation__all-plus--active');
//     navBtnOpenPlus.classList.toggle('navigation__all-btnbefore--active');
//     document.body.classList.toggle('noscroll');
//     navBtnOpen.classList.toggle('marginr');
//     margin.classList.toggle('marginr');
//   };
//   navBtnOpen.onclick = toggleNavAll;
//   navBtnPlus.onclick = toggleNavAll;
//   navOverlay.onclick = toggleNavAll;
// };

// navigationBtnAll();