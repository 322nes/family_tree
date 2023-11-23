const develop = document.querySelectorAll('.develop');
const navigationWrench = document.querySelector('.navigation__wrench');
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


// function getSuperSeriesWinner(scores) {
//   let canadaWin = 0;
//   let ussrWin = 0;

//   for (const game of scores) {
//     const canadaScore = game[[0]];
//     const ussrScore = game[[1]];

//     if (canadaScore > ussrScore) {
//       canadaWin += 1;
//     } else if (ussrScore > canadaScore) {
//       ussrWin += 1;
//     }
//   }

//   if (canadaWin > ussrWin) {
//     return 'canada';
//   } if (ussrWin > canadaWin) {
//     return 'ussr';
//   }
//   return null;
// }

// export default getSuperSeriesWinner;