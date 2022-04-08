// import './by.js';
// import { loginFunc, d as d1 } from './by.js';
// import * as unv from './by.js';
// import sotibol from './by.js';

// loginFunc(1111, 'Valisher');
// console.log(d1);

// console.log(unv.a);

// sotibol('Karta', 36);

// ===================yangi practika=====================
// import './by.js';
// import { id } from './by.js';
// console.log(id);
// import * as obshi from './by.js';
// console.log(obshi.d, obshi.name, obshi.age(2022, 2002));

// import { Person } from './by.js';
// let student = new Person('Valisher', 'Job');
// console.log(student);

// ===============================================================
// ====================Top level await============================

// 1-usul awaitni o'zini yozish(asunc fungsiyasiz)
// console.log('Hello');
// const country = await fetch('https://restcountries.com/v2/name/uzbekistan');
// const [dataJson] = await country.json();
// console.log(dataJson);
// console.log(country);
// console.log('Salom');

// 2-usul asugn fungsiya yordamida bu bilan kodlarimiz senhiron
// console.log('Hello');
// async function solve() {
//   const country = await fetch('https://restcountries.com/v2/name/uzbekistan');
//   const [dataJson] = await country.json();
//   console.log(dataJson);
//   console.log(country);
// }
// solve();
// console.log('Salom');

// ===========The modue pattern=============
const online = (function () {
  const cart = [];
  const maxsulotlarSoni = 100;
  const ishchilarSoni = 10;
  const pulMiqdori = 10_000_000;

  const sotibOlish = function (nomi, soni) {
    cart.push({ nomi, soni });
    let name = 'Valisher';
    console.log(
      `Siz ${nomi} mahsulotimizdan sotib oldingiz ${soni} ta miqdorda`
    );
    return name;
  };
  return { sotibOlish, pulMiqdori, cart };
})();

// online.ishchilarSoni;
online.sotibOlish('Apple', 10);
let soqqa = online.pulMiqdori;
console.log(soqqa);
console.log(online.cart);
