'use strict';

// let ball = 0;
// let ball2 = 0;
// let ballUmumiy = 0;
// let ballUmumiy2 = 0;

// document.querySelector('.score').textContent = '0';
// document.querySelector('.score2').textContent = '0';

// // function ochYop() {
// //   var open = document.getElementsById('player--1');
// //   open.classList.add('player--active');
// // }

// document.querySelector('.btn--roll').addEventListener('click', function () {
//   let randomNumber = Math.trunc(Math.random() * 6 + 1);
//   document.querySelector('.dice').src = `dice-${randomNumber}.png`;
//   // 1-player
//   if (
//     document
//       .querySelector('.player--active')
//       .contains(document.querySelector('#name--0'))
//   ) {
//     ball += randomNumber;
//     document.querySelector('#current--0').textContent = ball;
//     if (randomNumber == 1) {
//       ball = 0;
//       ballUmumiy = 0;
//       document.querySelector('#score--0').textContent = 0;
//       document.querySelector('#current--0').textContent = 0;
//     }
//     document.querySelector('.btn--hold').addEventListener('click', function () {
//       ballUmumiy += ball;
//       document.querySelector('#score--0').textContent = ballUmumiy;
//       ball = 0;
//       document.querySelector('#current--0').textContent = ball;
//       // document.querySelector('.player--0').classList.remove('player--active');
//       // document.querySelector('.player--1').classList.add('player--active');
//       if (randomNumber == 1) {
//         ball = 0;
//         ballUmumiy = 0;
//         document.querySelector('#current--0').textContent = 0;
//         document.querySelector('#score--0').textContent = 0;
//       }
//     });
//     // 2-player uchun
//     if (
//       document
//         .querySelector('.player--active')
//         .contains(document.querySelector('#name--1'))
//     ) {
//       ball2 += randomNumber;
//       document.querySelector('#current--1').textContent = ball2;
//       if (randomNumber == 1) {
//         ball2 = 0;
//         ballUmumiy2 = 0;
//         document.querySelector('#score--1').textContent = 0;
//         document.querySelector('#current--1').textContent = 0;
//       }
//       document
//         .querySelector('.btn--hold')
//         .addEventListener('click', function () {
//           ballUmumiy2 += ball2;
//           document.querySelector('#score--1').textContent = ballUmumiy2;
//           ball2 = 0;
//           document.querySelector('#current--1').textContent = ball2;
//           // document
//           //   .querySelector('.player--1')
//           //   .classList.remove('player--active');
//           // document.querySelector('.player--0').classList.add('player--active');
//           if (randomNumber == 1) {
//             ball2 = 0;
//             ballUmumiy2 = 0;
//             document.querySelector('#current--0').textContent = 0;
//             document.querySelector('#score--0').textContent = 0;
//           }
//         });
//     }
//   }
// });

// if (
//   document
//     .querySelector('.player--active')
//     .contains(document.querySelector('#name--0')) &&
//   ball == 0
// ) {
//   document.querySelector('.btn--hold').addEventListener('click', function () {
//     document.querySelector('.player--0').classList.remove('player--active');
//     document.querySelector('.player--1').classList.add('player--active');
//   });
// } else if (
//   document
//     .querySelector('.player--active')
//     .contains(document.querySelector('#name--1')) &&
//   ball2 == 0
// ) {
//   document.querySelector('.player--1').classList.remove('player--active');
//   document.querySelector('.player--0').classList.add('player--active');
// }

// // Tepadagi shart
// // if (
// //   document
// //     .querySelector('.player--active')
// //     .contains(document.querySelector('#name--0'))
// // ) {
// //   document.querySelector('.btn--hold').addEventListener('click', function () {
// //     ballUmumiy += ball;
// //     document.querySelector('#score--0').textContent = ballUmumiy;
// //     ball = 0;
// //     document.querySelector('#current--0').textContent = ball;
// //     document.querySelector('.player--0').classList.remove('player--active');
// //     // document.querySelector('.player--1').classList.add('player--active');
// //     if (randomNumber == 1) {
// //       ball = 0;
// //       ballUmumiy = 0;
// //       document.querySelector('#current--0').textContent = 0;
// //       document.querySelector('#score--0').textContent = 0;
// //     }
// //   });
// // }

// // document.querySelector('.btn--roll').addEventListener('click', function () {
// //   let randomNumber = Math.trunc(Math.random() * 6 + 1);
// //   document.querySelector('.dice').src = `dice-${randomNumber}.png`;
// //   ball += randomNumber;
// //   document.querySelector('#current--0').textContent = ball;
// //   if (randomNumber == 1) {
// //     ball = 0;
// //     ballUmumiy = 0;
// //     document.querySelector('#score--0').textContent = 0;
// //     document.querySelector('#current--0').textContent = 0;
// //   }
// // });

// // document.querySelector('.btn--hold').addEventListener('click', function () {
// //   ballUmumiy += ball;
// //   document.querySelector('#score--0').textContent = ballUmumiy;
// //   ball = 0;
// //   document.querySelector('#current--0').textContent = ball;
// //   document.querySelector('.player--0').classList.remove('player--active');
// //   document.querySelector('.player--1').classList.add('player--active');
// //   if (randomNumber == 1) {
// //     ball = 0;
// //     ballUmumiy = 0;
// //     document.querySelector('#current--0').textContent = 0;
// //     document.querySelector('#score--0').textContent = 0;
// //   }
// // });

// ===================================================================================================================
// Next effort
// if (
//   document
//     .querySelector('.player--active')
//     .contains(document.querySelector('#name--0'))
// ) {
//   document.querySelector('.btn--hold').addEventListener('click', function () {
//     document.querySelector('.player--0').classList.remove('player--active');
//     document.querySelector('.player--1').classList.add('player--active');
//     if (
//       document
//         .querySelector('.player--active')
//         .contains(document.querySelector('#name--1'))
//     ) {
//       document
//         .querySelector('.btn--hold')
//         .addEventListener('click', function () {
//           document
//             .querySelector('.player--1')
//             .classList.remove('player--active');
//           document.querySelector('.player--0').classList.add('player--active');
//         });
//     }
//   });
// }
// 2-ususl
document.querySelector('.btn--hold').addEventListener('click', function () {
  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.add('player--active');
  document.querySelector('.btn--hold').addEventListener('click', function () {
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  });
});
