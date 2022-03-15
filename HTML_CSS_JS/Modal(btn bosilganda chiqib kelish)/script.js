'use strict';
document.querySelector('.show-modal').addEventListener('click', function () {
  document.querySelector('.hidden').style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
});
document.querySelector('.show2').addEventListener('click', function () {
  document.querySelector('.hidden').style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
});
document.querySelector('.show3').addEventListener('click', function () {
  document.querySelector('.hidden').style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
});

document.querySelector('.close-modal').addEventListener('click', function () {
  document.querySelector('.hidden').style.display = 'none';
  document.querySelector('.overlay').style.display = 'none';
});

document
  .querySelector('.close-modal')
  .addEventListener('keydown', function (a) {
    if (a.key == 'Tab') {
      document.querySelector('.hidden').style.display = 'none';
      document.querySelector('.overlay').style.display = 'none';
    }
  });
