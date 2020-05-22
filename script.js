const rightEar = document.querySelector('.ear-right');
const leftEar = document.querySelector('.ear-left');
const container = document.querySelector('.container');
const rightEarContainer = document.querySelector('.right-ear-container');
const head = document.querySelector('.head');

const nose = document.getElementById('nose');
rightEar.addEventListener('click', rightOnClick);
leftEar.addEventListener('click', leftOnClick);
nose.addEventListener('click', () => {
  nose.classList.toggle('clicked');
  container.appendChild(nose);
});

function rightOnClick() {
  console.log('right clicked');
  rightEar.classList.toggle('active');

  rightEarContainer.appendChild(rightEar);
}
function leftOnClick() {
  console.log('left clicked');
}
