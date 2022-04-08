// let parol = 1111;
// let login = 'Valisher';
// export let d = 39;

// export const loginFunc = function (inputParol, inputLogin) {
//   if (parol === inputParol && login === inputLogin) {
//     console.log('Siz tizimga kirdingiz');
//   }
// };

// const meting = function () {
//   console.log('Hello');
// };
// let a = ' VAlisher';

// export { meting, a };

// export default function (nomi, soni) {
//   console.log(`Siz ${nomi} mahsulotdan ${soni} ta sotib oldingiz`);
// }

// ===========================New practika====================================
// let name = 'Valisher Botirov';
// export let id = 123;
// let age = function (a, b) {
//   return a - b;
// };
// age();
// let d = 20;

// export { name, d, age };

// export class Person {
//   constructor(name, job) {
//     this.name = name;
//     this.job = job;
//   }
// }

// =========Common JS Moduls===============
let login = 'Valisher';
let id = 1111;

function kir(inputLogin, inputId) {
  if (inputLogin == login && inputId == id) {
    console.log('Siz tizimga muvaffaqiyatli kirdingiz');
  } else console.log('Parol yoki id xato');
}

const a = 10;
module.exports = {
  a,
  kir,
};
