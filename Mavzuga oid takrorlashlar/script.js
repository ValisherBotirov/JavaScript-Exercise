// "use strict";

// const myName = "Valisher";

// function age() {
//   const birtYear = 2002;

//   function calcAge() {
//     let job = "Developer";
//     console.log(`My name is ${myName} and  my age ${2022 - birtYear}`);
//   }
//   calcAge();
//   age();
// }
// // age();
// let x = 10;

// let arrow = () => {
//   console.log(this);
// };
// arrow();

// function a() {
//   var b = 10;
//   console.log(x);
// }
// a();
// console.log(b);

// let x = 10;
// if (x > 5) {
//   var a = 10;
// }
// console.log(a);

//

// function calc() {
//   let x = 20;
//   let y = 10;
//   let calc2 = function () {
//     console.log(this.x);
//   };
//   calc2();
// }
// calc();
// let a = 10;
// let b = 5;

// let aboutMe = {
//   name: "Valisher",
//   surname: "Botirov",
//   age: 20,
//   birtYear: 2002,
//   nowYear: 2022,
//   study: {
//     university: "TATU",
//   },

//   calc: function () {
//     return this.birtYear - this.nowYear;
//   },
// };

// console.log(aboutMe.calc());

// ======================================================
// MagicCafe objecti

// const cafe = {
//   cafeName: "MagicCafe",
//   taomlari: ["osh", "shorva", "beshtiks", "shashlik"],
//   shirinliklar: ["mjzqaymoq", "tort", "paxlava"],
//   ichimliklar: ["cola", "pepsi", "choy"],
//   ochilishVaqti: {
//     dushanba: { open: "8:00", close: "22:00" },
//     shanba: { open: "6:00", close: "22:00" },
//   },
//   location: "Tashkent/Yunusabad/TATU",
//   order: function (taom, ichimlik) {
//     console.log(
//       `Siz ${this.taomlari[taom]} osh buyutma qildix va ${this.ichimliklar[ichimlik]}  buyurtma qildiz `
//     );
//   },
//   buyurtmaniYetkazish: function (x, y, z) {
//     // const {x,y,z}=p;
//     console.log(
//       `Sizni buyurtmangizga quyidagilar kiradi: 1.${this.taomlari[x]},2.${this.shirinliklar[y]},3.${this.ichimliklar[z]}`
//     );
//   },
//   muzqaymoq: function (first, second, third) {
//     console.log(
//       `Sizning muzqaymog'ingiz ${first},${second},${third} mevalaridan iborat `
//     );
//   },
// };
// cafe.buyurtmaniYetkazish(1, 2, 1);
// ==============================================================================
// let [birinchi, , , uchunchi] = cafe.taomlari;
// [birinchi, uchunchi] = [uchunchi, birinchi];
// console.log(birinchi, uchunchi);

// // Masala ichma ich arrayga oid
// let b;
// let arr = [1, 2, 3, [4, 5, 6]];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "object") {
//     b = arr[i][0];
//     break;
//   }
// }
// console.log(b);

// =====================================================
// Destiraction Object

// let {
//   cafeName,
//   taomlari,
//   ichimliklar,
//   ochilishVaqti: { dushanba },
// } = cafe;
// console.log(cafeName);
// console.log(taomlari);
// console.log(ichimliklar);
// console.log(dushanba
//   );
// -------------------------
//   const c = {
//     x:4,
//     b:8
//   }

// let y = function(obj){
//   const {a,b} = obj;
//   console.log( a+b);
// }

// y(c);

// let ichimlik = cafe.ichimliklar;
// let newIchimlik = ["fanta ", "limon choy", "kampot"];
// let newArr = [...ichimlik, ...newIchimlik];
// console.log(newArr);
// let newShirinlik = [...cafe.shirinliklar];
// console.log(newShirinlik);

// =======================================================================
// O'tilgan mavzular bo'yicha amaliyot
// console.log("Uyga vazifalar kichik amaliyotchalar");
// let obj = {
//   name: "Valisher",
//   age: 20,
// };
// let newObj = { surname: "Botirov", job: "Developer", ...obj };
// console.log(newObj);
// Spreaddan fungsiya argumenti sifatida foydalanish
// function add(x, y, z) {
//   console.log(x + y + z);
//   console.log(x);
//   console.log(y);
//   console.log(z);
// }
// let array = [1, 2, 3];
// add(...array);
// Stringni sochib olishga misol
// let y = "Toshkent";
// console.log(...y);
// let count = 0;
// for (let i = 0; i < y.length; i++) {
//   count++;
// }
// console.log(count);
// console.log(y.length);

// Spreat yordamida arraydan nusxa olish
// let v = ["I", "love", "TUIT"];
// let m = ["Uzbekistan yoshlari"];
// // let copy = [...v, "Valisher"];
// let newarr = [...v, ...m];
// console.log(newarr);

// Fungsiyaga argument sifatida objectni berish
// function myFunc(obj) {
//   const { a, b, c } = obj;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// let x = {
//   a: 20,
//   b: 10,
//   c: 5,
// };
// myFunc(x);

// Ichma-ich turgan objectlarni variableni o'zgartirish
// let me = {
//   name: "Valisher",
//   age: 20,
//   me2: {
//     surname: "Botirov",
//   },
// };
// const { name } = me;
// console.log(me.name);

// Elementlarni birlashtirish usullari

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [x, y, ...kerakEmas] = arr;
// console.log(x, y, ...kerakEmas);

// let x = [...cafe.taomlari, ...cafe.ichimliklar];
// const [ovqat1, ovqat2, ...kerakEmas] = x;
// console.log(ovqat1, ovqat2, kerakEmas);

// function add(...raqamlar) {
//   let sum = 0;
//   for (let i = 0; i < raqamlar.length; i++) {
//     sum += raqamlar[i];
//   }
//   console.log(sum);
// }
// add(1, 2, 3);

// console.log(0 || 0 || NaN || 0 || "" || NaN || undefined);
// cafe.odam = 0;
// console.log(cafe.odam ?? "Bunday qiymat mavjud emas");

// For of loopi
// let a = [1, 2, 3, 4, 5, 6, 7];
// for (let elemet of a) {
//   console.log(elemet);
// }
// console.log("for ni asli bilan");
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }
// let newArr = [...cafe.ichimliklar, ...cafe.taomlari];
// console.log(newArr);
// for (let [a, b] of newArr.entries()) {
//   console.log(`${a + 1} - ${b}`);
// }

// let obj = {
//   name: "Valisher",
//   age: 20,
//   job: "Developer",
// };

// =====================================================
//--------------- Shaxsiy amaliyotlarim-----------------
//======================================================
// let x = "Valisher";
// let y = [...x];
// console.log(y);
// const [a, ...add] = y;
// console.log(a);
// console.log(add);

// let obj = {
//   name: "Valisher",
//   age: 20,
//   job: "Developer",
//   city: "Tashkent",
// };

// const { age, ...other } = obj;
// console.log(age);
// console.log(other);

// let myName = function (...str) {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   }
//   console.log(str);
// };
// myName(add);

// for-in xossasi
// let obj = {
//   name: "Valisher",
//   age: 20,
// };

// for (let key in obj) {
//   console.log(`${key} - ${obj[key]}`);
// }

// for (let key in obj) {
//   console.log(obj[key]);
// }

// Spedga oid masala

// function cheecSpeed(speed) {
//   let point = 0;
//   if (speed <= 70) {
//     console.log("Ok");
//   } else if (speed > 70) {
//     point = Math.trunc((speed - 70) / 5);
//     if (point < 12) {
//       console.log(point);
//     } else console.log("Guvohnoma olib qo'yiladi");
//   }
// }

// cheecSpeed(60);

// N sonigacha bo'lgan 3ga va 5ga bolinuvchi sonlarni yig'indisini chiqarib beruvchi dastur

// function sum(limit) {
//   let sum3 = 0;
//   let sum5 = 0;
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 == 0) {
//       sum3 += i;
//     }
//   }
//   for (let i = 0; i <= limit; i++) {
//     if (i % 5 == 0) {
//       sum5 += i;
//     }
//   }
//   return sum3 + sum5;
// }
// console.log(sum(10));

// Obektning string toifaga ega bo'lgan key va valuelarini chiqarish
// let obj = {
//   name: "Valisher",
//   surname: "Botirov",
//   age: 20,
//   stage: 1,
//   job: "Developer",
// };

// function srt(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "string") {
//       console.log(key, obj[key]);
//     }
//   }
// }
// srt(obj);
// ---------------------------------------------------
// for-of ga oid

// let arr = ["a", "b", "c", 1, 2];
// for (let key of arr.entries()) {
//   console.log(key[0] + 1, key[1]);
// }
//
// ----------------------------------------------------
// Elementlarni qisqartirish
// let about = {
//   name: "Valisher",
//   city: "Tashkent",
// };
// const obj = {
//   about,
//   order() {
//     console.log("Hello");
//   },
// };

// obj.order();
// console.log(obj.about);
// ------------------------------------------------
// Objectlarga nisbatan for-of loopini ishatish
// let obj = {
//   name: "Valisher",
//   surnam: "Botirov",
//   age: 20,
//   job: "Developer",
//   city: "Tashkent",
// };
// for (let key of Object.entries(obj)) {
//   console.log(key[0], key[1]);
// }

// for (let key of Object.keys(obj)) {
//   console.log(key);
// }

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// // ====================================================
// // -----------MagicAlgo masalalar------------------------
// // 2-masala
// let str = "happy,newyear,enjoy";
// let arr = str.split(",");
// let strnew = arr.join(" ");

// console.log(strnew);
// --------------------------------------------
// Yangiz mavzu
// let set = new Set("aallii");
// console.log(set);
// console.log(set.size);
// console.log(set.has("l"));
// console.log(set.add("v"));
// let arr = [1, 2, 3, 4, 5];
// let s = new Set(arr);
// console.log(s);

// Map operatori
// const me = new Map();
// me.set("name", "Valisher");
// me.set(1, 20);
// console.log(me.get(1));
// console.log(me.get("name"));
// console.log(me);

// let arr = [1, 2];
// const rest = new Map([
//   [name, "Valisher"],
//   [1, 20],
//   ["familiya", "Botirov"],
// ]);
// rest.set(arr, "Name");
// console.log(rest);
// console.log(rest.get(1));
// console.log(rest.get(arr));

// Mapga oid real loyihacha
// let kun = prompt("Kunni kiriting!").toLocaleLowerCase();
// let ishKuni = ["dushanba", "seshanba", "chorshanba", "payshanba", "juma"];
// let notIshKuni = ["shanba", "yakshanba"];

// let ish = new Map([
//   [true, "Ish kuni"],
//   [false, "Ish kuni emas"],
// ]);
// if (ishKuni.includes(kun)) {
//   console.log(ish.get(true));
// } else console.log(ish.get(false));

// Mapga oid real loyihacha-2
// let savol = new Map([
//   ["savol", "O'zbekistonni poytaxti: "],
//   [1, "Toshknet"],
//   [2, "Samarqand"],
//   [3, "Buxoro"],
//   ["javob", 1],
//   [true, "Javob togri"],
//   [false, "Javob noto'ri"],
// ]);
// console.log(savol.get("Savol"));
// for (let [key, val] of savol) {
//   if (typeof key == "number") {
//     console.log(`${key}-javob: ${val}`);
//   }
// }
// const kirit = Number(prompt("Javob raqamini kiriting"));
// kirit == savol.get("javob")
//   ? console.log(savol.get(true))
//   : console.log(savol.get(false));

// Qurt masala
// let h, a, b;
// h = 43;
// a = 9;
// b = 7;
// let n = 0;
// let sum = 0;

// while (sum + a <= h) {
//   sum = sum + a - b;
//   n++;
// }
// console.log(n);

// Qo'shimcha amaliyotlar
// let str = "hello,world,unique";
// // let arr = str.split(",");
// let arr = [...str];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== ",") {
//     newArr.push(arr[i]);
//   }
// }
// console.log(arr);
// console.log(newArr.join(" "));

// let set = new Set("Vaalir");
// let arr = ["a", "b", "a", 1, 2, 1, "b"];
// let newSet = new Set(arr);
// console.log(set);
// console.log(newSet);
// console.log(set.size);
// console.log(newSet.size);
// console.log(set.has("a"));
// newSet.add(3);
// set.delete("a");
// console.log(set);
// // for (let elemet of set) {
// //   console.log(elemet);
// // }
// const arr2 = [...set];
// console.log(arr2);

// let map = new Map();
// map.set("name", "Valisher");
// map.set(1, 20);
// console.log(map.get("name"));

// console.log(map.has("name"));
// // map.delete(1);
// console.log(map);
// console.log(map.size);
// for (let [key, val] of map) {
//   console.log(key, val);
// }

// let obj = {
//   name: "Valisher",
//   age: 20,
//   job: "Developer",
//   city: "Tashkent",
//   book: "Atomic Habits",
// };

// let me = new Map(Object.entries(obj));
// console.log(me);

// let arr = [...me];
// console.log(...arr);

// Farhod Dadajonov amaliyot
// const marks = [81, 74, 86, 59, 77];
// function calc(marks) {
//   let sum = 0;
//   let arf;
//   for (let i = 0; i < marks.length; i++) {
//     sum = sum + marks[i];
//   }
//   arf = sum / marks.length;
//   if (arf >= 0 && arf <= 50) {
//     console.log("F");
//   } else if (arf > 50 && arf <= 60) {
//     console.log("D");
//   } else if (arf > 60 && arf <= 70) {
//     console.log("C");
//   } else if (arf > 70 && arf <= 80) {
//     console.log("B");
//   } else if (arf > 80 && arf <= 100) {
//     console.log("A");
//   }
// }
// calc(marks);

// 10-
// let arr = [1, 2, 3];
// let arr2 = [4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < i; j++) {
//     console.log(arr[i]);
//   }
// }

// let str = "assalomu Alaykum kursdoshlar yaxshimisizlar";
// let arr = str.split(" ");
// let newArr = [];
// //console.log(arr[0].toUpperCase());
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i][0].toLowerCase()) {
//     arr[i][0] === arr[i][0].toUpperCase();
//   }

//   // newArr.push(arr[i]);
// }
// let nameStr = "9998 1221 6542 9876";
// let str = nameStr.slice(-4);
// console.log(str.padStart(19, "**** "));
// ---------------------------------a
// let car = [
//   { name: "Malibo", cost: 1200 },
//   { neme: "Tracker", cost: 1000 },
//   { neme: "Gentra", cost: 1000 },
//   { neme: "Cobolt", cost: 1000 },
// ];

// let auto = function (marka, narx) {
//   switch (marka) {
//     case "chevrolet":
//       for (let i = 0; i < car.length; i++) {
//         if (car[i].narx > 1000) {
//           console.log(car[i]);
//         }
//       }
//   }
// };
// auto("chevrolet", 1000);
// ----------------------------------------------------------
// Kutubxona objectini yaratib uni fungsiyani ichida foydalanish
// let library = {
//   name: "Alisher Navoiy",
// };

// let obj = {
//   name: "Valisher",
//   age: 20,
//   id: 0998,
// };
// // let idMe = Number(prompt("Id raqamingizni kiriting!"));

// let myFunc = function (obj, lib) {
//   if (idMe == obj.id) {
//     console.log(`Xush kelibsiz ${obj.name}! ${lib.name} kutubxonasiga`);
//   } else console.log("Parolni xato kiritdingiz...");
// };

// myFunc(obj, library);

// Tub sonlar
// let son = 23;
// let count = 0;
// for (let i = 2; i <= son; i++) {
//   for (let j = 2; j <= i; j++) {}
//   if (son % i == 0) {
//     count++;
//   }
// }
// if (count == 1) {
//   console.log("Son tub son");
// }
// if (count >= 2) {
//   console.log("Son tub son emas");
// }
// --------------------------------------------
// First class and Higher order class

// function calc(a) {
//   return function (x, y) {
//     return a + x * y;
//   };
// }

// let d = calc(10);
// console.log(d(10, 1));

// function add(a, b) {
//   return a + b;
// }
// let result = add(5, 10);
// function qosh(a, x) {
//   return a + x;
// }
// console.log(qosh(5, result));

// function count() {
//   let counter = 0;
//   return function () {
//     console.log(counter++);
//   };
// }

// let str = "Salom dunyo";
// console.log(str.split(""));

// Js calculator

// function qush(a, b) {
//   console.log(a + b);
// }
// function ayir(a, b) {
//   console.log(a - b);
// }
// function kopaytir(a, b) {
//   console.log(a * b);
// }
// function bolisg(a, b) {
//   console.log(a / b);
// }

// let calc = function (x, y, fn) {
//   fn(x, y);
// };

// calc(10, 5, qush);

// Ichma ich fungsiyalar
// function salom(ism) {
//   console.log("1-fungsiya");
//   return function (name) {
//     console.log("2-fungsiya");
//     return function (age) {
//       console.log("3-fungsiya");
//       console.log(`${ism} ${name} ${age}`);
//     };
//   };
// }
// salom();
// let a = salom("Valisher");
// let b = a("Botirov");

// let c = b(19);
// salom("Botriov")("Valisher")(20 );

// Aply va Call methodlari

// const universityTatu = {
//   name: "TATU",
//   talabalarSoni: 9500,
//   davomat(jami, kelganlari) {
//     console.log(
//       `${this.name} universetutida ${jami} talabadan ${
//         jami - kelganlari
//       } ta talaba kelmagan`
//     );
//   },
// };
// universityTatu.davomat(9500, 9400);

// let davomat = universityTatu.davomat;
// const universityUzmu = {
//   name: "UzMU",
//   talabalarSoni: 16500,
// };
// let arr = [17000, 16900];
// davomat.call(universityUzmu, 16500, 16450);
// davomat.apply(universityUzmu, arr);

// let me = {
//   name: "Valisher",
//   order(modul, age, loc) {
//     console.log(modul, age, loc);
//   },
// };
// me.order("Developer", 20, "Tashkent");

// let you = {
//   name: "Senoior",
// };

// let newOrder = me.order;
// let yourOrder = newOrder.bind(you);
// newOrder("Valisher", 20, "Samarqand");
// newOrder("Valisher", 20, "Samarqand + Tashkent");

let magicPhone = {
  name: "Samsung",
};
magicPhone.phones = 0;
magicPhone.buy = function () {
  console.log(++this.phones);
};
console.log(magicPhone.phones);
let func = magicPhone.buy.bind(magicPhone);

document.getElementById("btn").addEventListener("click", function () {
  document.querySelector(".btn-sqr").textContent = magicPhone.phones++;
});

// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// let str = "9982 5698 1235 6984";
// let newStr = str.slice(-4);
// console.log(newStr);
// console.log(newStr.padStart(19, "**** "));

// function multple(x, y) {
//   return x * y;
// }

// function calc(a, func) {
//   return a + func;
// }
// console.log(calc(10, multple(2, 5)));

// function yosh(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// let x = yosh(2);
// console.log(x(6));
// console.log(" ");
// for (let i = "*"; i.length < 8; i = i + "*") {
//   console.log(i);
// }

// let line1 = "* * * * * * * * * * *";
// let line2 = " * * * * * * * * * * * ";
// let rusult;
// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(line1);
//   } else console.log(line2);
// }
// Basic JavaScriptning objecti
// 1-masala
// let obj = {
//   content: "Asiya",
//   country: "UZB",
// };

// console.log(obj.country);

// (function (country) {
//   console.log(country);
// })("Samarqand");

// let arr = [1, -2, -5, -8, 4, 6, -9, -16];

// function calc(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(calc(arr));

// splice and slice
// let arrNew = ["u", "m", "i", "d"];
// console.log(arrNew.slice(2));
// let srt = arrNew.slice(-2, -1);
// console.log(srt);
// console.log(arrNew);
// console.log(arrNew.splice(0, 2));
// console.log(arrNew);

// concat
// let arr1 = ["Valisher"];
// let arr2 = ["Botirov"];
// let y = [...arr1, ...arr2, "TUIT"];
// console.log(y);
// console.log(arr2.concat(arr1, "TUIT"));
// console.log(arr2);
// console.log(arr1);

// join methodi
// let arr = ["Salom"];
// console.log(arr);
// console.log(arr.join(" "));
// let arr2 = ["s", "a", "l", "o", "m"];
// console.log(arr2);
// console.log(arr2.join(" "));

// AT methodi
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.at(-2));
// // console.log[arr.length(-2)]

// For each
// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function (val, key, arr) {
//   console.log(arr);
// });
// ======================================================
// Mapga ishlatilishi
// let map = new Map([
//   ["USD", "Amerika dollari"],
//   ["UZB", "O'zbekiston sumi"],
//   ["EUR", "Yevro"],
// ]);
// map.forEach(function (val, key) {
//   console.log(`${key}- ${val}`);
// });
// // Arraylarda ishlatilishi
// let arrFor = [100, -200, 500, -450, -320, 300, -800, 1600];
// arrFor.forEach(function (val, key) {
//   if (val > 0) {
//     console.log(`Kirim bo'lgan summa ${val}`);
//   } else console.log(`Chiqim bo'lgan summalar ${val}`);
// });
// Setda ishlatilihsi
// let set = new Set("1 2 3 3 3 2 5");
// console.l;

// ============================================
// map methodi
// let arr = [10, 20, 30, 40, 50];
// let x = arr.map(function (val, key) {
//   return val * 10;
// });
// console.log(x);

// convert dollor to sum
// let dollor = [100, 200, 150, 300];
// let dollorToUzb = 10900;
// let uzb = dollor.map(function (val) {
//   return val * dollorToUzb;
// });
// console.log(uzb);

// --------------------------------------
// Filterga misol
// let dollor = [100, 200, 150, 300];
// // let dollorToUzb = 10900;
// let uzb = dollor.filter(function (val) {
//   return val > 150;
// });
// console.log(uzb);

// --------------------------------------------------------
// let botirovPay = {
//   name: "Valisher Botirov",
//   balance: 2000,
//   transaction: [],
//   pin: 1218,
// };

// let umidPay = {
//   name: "Umid Rustamon",
//   balance: 3000,
//   transaction: [],
//   pin: 1228,
// };

// ================================================
// bir martalik fungsiya
// (function () {
//   console.log("Hello world");
// })();

// slice methodi
// let arr = ["V", "a", "l", "i", "sh", "e", "r"];
// console.log(arr.slice(-3));
// console.log(arr.slice(0, 3));
// console.log(arr);

// splice methodi
// let arr = ["V", "a", "l", "i", "sh", "e", "r"];
// console.log(arr.splice(3));
// console.log(arr);

// reverce methodi
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.reverse());
// console.log(arr);

// concat methodi
// let arr1 = [1, 2, 3];
// let arr2 = [6, 5, 4];
// console.log(arr1.concat(arr2));

// join metodi
// let arr = ["v", "a"];
// console.log(arr.join(""));

// at methodi
// let arr = ["Valisher", "Botirov"];
// console.log(arr.at());

// forEach loopi
// let arr = [1, 5, 9, -10, -12, 54];
// arr.forEach(function (key, val, arr) {
//   if (key < 0) {
//     console.log(key);
//   }
// });
// mapga ishlatish
// let str = new Map([
//   ["name", "Valisher"],
//   ["surname", "Botirov"],
//   ["age", 20],
//   ["job", "Developer"],
// ]);

// str.forEach((key, val, arr) => {
//   if (typeof key == "number") {
//     console.log(key);
//   }
// });

// let mySet = new Set("name", "name", "surname", "tuit", 20, 2002);
// mySet.forEach(function (key, val, set) {
//   if (typeof key == "number") {
//     console.log(key);
//   }
// });

// ----------------------------------------
// map metodi
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let map = arr.map(function (val) {
//   return val * 10;
// });
// console.log(map);

// let filter = arr.filter(function (val) {
//   return val > 5;
// });
// console.log(filter);

// let newMap = [
//   ["name", "Valisher"],
//   ["age", 20],
//   ["birtYear", 2002],
//   ["city", "Tashknet"],
// ];

// let cv = newMap.map(function (key, val) {
//   return val;
// });
// console.log(cv);

// ====================================
// reduse mehtodi
// sonlar yigindisi
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let x = arr.reduce(function (sum, val, key) {
//   return sum + val;
// }, 0);
// console.log(x);

// array elemtlaridan kattasini aniqlash
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let x = arr.reduce(function (katta, val) {
//   if (katta < val) return val;
//   else return katta;
// }, arr[0]);
// console.log(x);
// let arrNew = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let max;
// max = arrNew[0];
// for (let i = 0; i < arrNew.length; i++) {
//   if (arrNew[i] > max) {
//     max = arrNew[i];
//   }
// }
// console.log(max);

// let me = {
//   name: "Alisher",
//   age: 20,
// };

// let me2 = {
//   name: "Bobosher",
//   age: 20,
// };

// let me3 = {
//   name: "Valisher",
//   age: 20,
// };

// const arr = [me, me2, me3];
// let x = arr.findIndex(function (val) {
//   return val.name === "Valisher";
// });

// console.log(x);

// ============================================
// Chaining Methods
// let arr = [1, 2, 3, 4, 5];
// let obshi = arr
//   .filter((val) => {
//     return val > 2;
//   })
//   .map(function (val) {
//     return val * 2;
//   })
//   .reduce(function (sum, val) {
//     return sum + val;
//   }, 0);
// console.log(obshi);

// some va every metodlar

// let arr = [1, 2, 0, 6];
// let bor = arr.some(function (val) {
//   return val < 1;
// });
// console.log(bor);

// let yoq = arr.every((val) => val > 1);
// console.log(yoq);

// flat and flatMap methods
// let arr = [1, [2, 3, [5, 4, [1]]], 5, [6]];
// let y = arr.flat(3);
// console.log(y);

// let arr = [1, [2, 3, [5, 4, [1]]], 5, [6]];
// let arr2 = [1, [2, 3, [5, 4, [1]]], 5, [6]];
// let arr3 = [1, [2, 3, [5, 4, [1]]], 5, [6]];

// let newArr = [arr, arr2, arr3];

// let x = newArr.flatMap(function (val) {
//   return val;
// });

// console.log(x);

// let obj1 = {
//   name: "Umid",
//   arrObj: [1, 2, 3, [4, 5]],
// };
// let obj2 = {
//   name: "Umid",
//   arrObj: [1, 2, 3, [1, 7]],
// };
// let obj3 = {
//   name: "Umid",
//   arrObj: [1, 2, 3, [4, 5]],
// };

// let arr = [obj1, obj2, obj3];
// let mixArr = arr.flatMap(function (val) {
//   return val.arrObj;
// });

// console.log(arr);

// let litter = ["a", "n", "c", "f", "m"];
// console.log(litter.sort());
// =====================================================
// o'zim yechmoqchi bo'lgan usul
// let input = "fhkasfmagsadidadsacsadjsodaft";
// let array = input.split("");

// let m = array.indexOf("m");
// let a = array.indexOf("a");
// let g = array.indexOf("g");
// let i = array.indexOf("i");
// let c = array.indexOf("c");
// let s = array.indexOf("s");
// let o = array.indexOf("o");
// let f = array.indexOf("f");
// let t = array.indexOf("t");

// let mArr = [];
// let mHarfi = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] == "m" || array[i] == "a") {
//     mHarfi.push(array[i]);
//     mArr.push(array.splice(0, m + 1));
//   }
// }

// console.log(array);
// console.log(mArr);
// console.log(mHarfi);

// let arr = [];
// for (let i = 0; i < input.length; i++) {
//   if (
//     input[i] == "m" ||
//     input[i] == "a" ||
//     input[i] == "g" ||
//     input[i] == "i" ||
//     input[i] == "c" ||
//     input[i] == "s" ||
//     input[i] == "o" ||
//     input[i] == "f" ||
//     input[i] == "t"
//   ) {
//     arr.push(input[i]);
//   }
// }
// let set = new Set(arr);
// let newArr = [...set];
// console.log(newArr);
// let m = newArr.indexOf("m");
// let a = newArr.indexOf("a");
// let g = newArr.indexOf("g");
// let i = newArr.indexOf("i");
// let c = newArr.indexOf("c");
// let s = newArr.indexOf("s");
// let o = newArr.indexOf("o");
// let f = newArr.indexOf("f");
// let t = newArr.indexOf("t");

// if (m > a && a > g && g > i && i > c && c > s && s > o && o > f && f > t) {
//   console.log("topdim");
// } else console.log("topolmadim");

// =================================================
// Anvarni usuli
// let input = "fhkasfmagsadidadsacsadjsodaft";
// let key = "magicsoft";
// let j = 0;
// for (let i = 0; i < input.length; i++) {
//   if (input[i] == key[j]) {
//     j++;
//   }
// }
// if (j == 9) console.log("topdim");
// else console.log("topolmadim");
// // console.log(key[j]);
// ========================================

// let obj1 = {
//   name: "Valisher",
//   age: 20,
// };
// let obj2 = {
//   name: "Diyor",
//   age: 20,
// };
// let obj3 = {
//   name: "Jamil",
//   age: 20,
// };
// let obj4 = {
//   name: "Alex",
//   age: 20,
// };

// let arr = [obj1, obj2, obj3, obj4];

// let x = arr.findIndex((val) => val.name == "Alex");
// console.log(arr.splice(3));
// console.log(arr);
// console.log(x);

// Baxtli sondi topish
// ================================================
// ===============================================
// let son = 4447474444477777;
// son = String(son);
// let arr = [];
// for (let i = 0; i < son.length; i++) {
//   if (son[i] == 4 || son[i] == 7) {
//     arr.push(son[i]);
//   }
// }
// if (arr.length == son.length) {
//   console.log("Baxtli son");
// } else console.log("Bxtli emas");
// console.log(son.length);
// console.log(arr.length);
// ===============================================
// ===============================================

// let son = 56;
// for (let i = 0; i < son; i++) {
//   let xona = [i];
//   for (let j = 0; j < xona; j++) {
//     if (xona[j] == 4 || xona[j] == 7) {
//       console.log(xona);
//     }
//   }
// }

// let arr = [4, 7];
// let str = String(47);

// ========================================================
// =========================================================

// let arr = [3, 2, 1, 6, 5, 4];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > arr[i + 1]) {
//     [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//   }
//   console.log(arr[i]);
// }

// let str = "bsamndjk";
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//   if (str.charCodeAt(i) > str.charCodeAt(i + 1)) {
//     [str[i], str[i + 1]] = [str[i + 1], str[i]];
//   }
//   arr.push(str[i]);
// }
// console.log(arr);

// let nbr = "1";
// console.log(nbr.charCodeAt());
// console.log(String.fromCharCode(49));

// let x = [1, 233333, 6, 8, 3, 5];
// x.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else return -1;
// });
// console.log(x);

// console.log(x.sort());

// let str = "valisher";
// let arr = ["valisher", "bo"];
// console.log(str.charCodeAt());
// console.log(String.fromCharCode(118));

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let x = arr.every(function (val) {
//   return val > 3;
// });
// console.log(x);
// let html = `<li class="item">Salom</li>`;
// for (let i = 0; i < 20; i++) {
//   document.querySelector(".link").insertAdjacentHTML("beforeend", html);
// }
// document.querySelector(".link").innerHTML = " ";
// =============================================

// fill and from methods
// let x = new Array(10);
// x.fill(5, 2, 8); //(value,start,end)
// console.log(x);

// from metodi
// let y = Array.from({ length: 50 }, function (val, key) {
//   return (key + 1) * 2;
// });
// console.log(y);

// let a = Array.from([1, -5, 4, -2, -3, 8], function (val) {
//   if (val > 0) {
//     return val * 2;
//   }
// });
// console.log(a);

// let v = Array.from({ length: 10 }, (val, key) => key + 1);
// console.log(v);

// toFixed
// let x = 1.249;
// let y = x.toFixed(2);
// console.log(typeof y);

// let x = "12";
// x = +x;
// console.log(typeof x, x);

// Number.isNan metodi
// let x = "24.7px";
// let c;
// c = Number(parseFloat(x));
// console.log(c);

// x = "m24px";
// c = Number(parseInt(x));
// console.log(c);

// let n = Number.isNaN(Number.parseFloat(x));
// console.log(n);

// console.log(Number.isFinite(12 / 0));

// console.log(Math.sqrt(25));
// let arr = [];

// for (let i = 0; i < 10; i++) {
//   let c = Math.trunc(Math.random() * 200) - 100;
//   arr.push(c);
// }
// console.log(arr);

// function random(a, b) {
//   return Math.trunc(Math.random() * (b - a + 1) + a);
// }

// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(random(-10, 10));
// }
// console.log(arr);

// console.log(Math.trunc(-2.6));
// console.log(Math.round(-2.8));
// console.log(Math.floor(-2.8));

// let son = 45;
// let birlik;
// let unlik;
// birlik = son % 10;
// unlik = Math.trunc(son / 10);
// let arr = [];
// // console.log(unlik, birlik);
// switch (unlik) {
//   case 1:
//     arr.push("o'n");
//     break;
//   case 2:
//     arr.push("yigirma");
//     break;
//   case 3:
//     arr.push("o'ttiz");
//     break;
//   case 4:
//     arr.push("qirq");
//     break;
//   case 5:
//     arr.push("ellik");
//     break;
//   case 6:
//     arr.push("oltmish");
//     break;
//   case 7:
//     arr.push("yetmish");
//     break;
//   case 8:
//     arr.push("sakson");
//     break;
//   case 9:
//     arr.push("to'qson");
//     break;
// }
// switch (birlik) {
//   case 1:
//     arr.push("bir");
//     break;
//   case 2:
//     arr.push("ikki");
//     break;
//   case 3:
//     arr.push("uch");
//     break;
//   case 4:
//     arr.push("to'rt");
//     break;
//   case 5:
//     arr.push("besh");
//     break;
//   case 6:
//     arr.push("olti");
//     break;
//   case 7:
//     arr.push("yetti");
//     break;
//   case 8:
//     arr.push("sakkiz");
//     break;
//   case 9:
//     arr.push("to'qqiz");
//     break;
// }
// console.log(...arr);
// let b = 15;
// console.log(b.toString(2));
// let big = Number.MAX_SAFE_INTEGER;
// console.log(big);
// console.log(2 ** 53);

// console.log(2n + BigInt(10));
// // Date bilan ishlash
// let hozir = new Date();
// console.log(hozir);

// let kecha = new Date(2022, 2, 14);
// console.log(kecha);

// // console.log(new Date(`March , 13 , 2022`));

// let yil = hozir.getFullYear();
// console.log(yil);
// let oy = hozir.getMonth();
// console.log(oy);

// let qoida = hozir.toISOString();
// console.log(qoida);

// let xozir = new Date().getTime();
// let son = 5 * 365 * 24 * 60 * 60 * 100;
// // let nowYear = new Date(5 * 365 * 24 * 60 * 60 * 100);
// console.log(xozir);
// let kelasiYil = x + son;
// let kun = new Date(kelasiYil.getDay(kelasiYil));
// console.log(kun);

// Amaliy mashg'ulotcha
// let birinchiSana = prompt("1-sanani kiriting (04/03/2022)");
// let ikkinchiSana = prompt("2-sanani kiriting (04/03/2024)");
// birinchiSana = birinchiSana.split("/").reverse();
// ikkinchiSana = ikkinchiSana.split("/").reverse();
// let time1 = new Date(...birinchiSana).getTime();
// let time2 = new Date(...ikkinchiSana).getTime();
// let farq = time2 - time1;
// let yil = Math.trunc(farq / (1000 * 60 * 60 * 24 * 12 * 365));
// let oy = Math.trunc(farq / (1000 * 60 * 60 * 24 * 12));
// let kun = Math.trunc(farq / (1000 * 60 * 60 * 24));

// console.log(`${yil} yil , ${oy} oy , ${kun} kun ortiq`);

// Xalqaro soatlar bilan ishlash
// let hozirInternational = new Date();
// let options = {
//   day: "numeric",
//   month: "numeric",
//   weekday: "long",
//   year: "numeric",
//   minute: "numeric",
// };

// let uzb = new Intl.DateTimeFormat("ru-RU", options).format(hozirInternational);
// console.log(uzb);

// let hozirInternational = new Date();
// let options = {
//   day: "numeric",
//   month: "numeric",
//   weekday: "long",
//   year: "numeric",
//   minute: "numeric",
// };

// let davlat = navigator.language;
// console.log(davlat);

// let uzb = new Intl.DateTimeFormat(davlat, options).format(hozirInternational);
// console.log(uzb);

// let sozlanma = {
//   style : "decimal"
// }

// setTimeOut functions and setInterval
// a = Number(prompt("a ni kiriting"));
// b = Number(prompt("b ni kiriting"));
// setTimeout(
//   function (a, b) {
//     console.log(a + b);
//   },
//   3000,
//   a,
//   b
// );

// a = Number(prompt("Yoshingizni kiriting"));

// let t = setTimeout(
//   function (a) {
//     console.log(a);
//   },
//   3000,
//   a
// );

// if (a > 18) {
//   clearTimeout(t);
// }

// setInterval(function () {
//   console.log("salom");
// }, 2000);

// let x = 60;
// setInterval(function () {
//   --x;
//   if (x == 0) {
//     x = 60;
//   }
//   console.log(x);
// }, 100);

// let minut = 5;
// let sekund = 59;

// let x = setInterval(function () {
//   sekund--;
//   if (sekund == 0) {
//     sekund = 59;
//     minut--;
//   }
//   if (minut == -1 && sekund == 00) {
//     clearInterval(x);
//   }
//   console.log(`${minut} : ${String(sekund).padStart(2, "0")}`);
// }, 5);

// let time = new Date();
// let options = {
//   day: "numeric",
//   month: "numeric",
//   year: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
//   weekday: "long",
// };
// let til = new Intl.DateTimeFormat("en-US", options).format(time);
// console.log(til);

// let a = 12515463456.32;
// let sozlama = {
//   style: "decimal",
//   style: "currency",
//   currency: "USD",

//   style: "unit",
//   unit: "celsius",
// };
// let conver = new Intl.NumberFormat("en-US", sozlama).format(a);
// console.log(conver);

let a = 5;
let b = 5;
let m = 4;
let n = 6;
let maxKatta, minKatta, maxKichik, minKichik;
if (a >= b) {
  maxKatta = a;
  minKatta = b;
} else {
  maxKatta = b;
  minKatta = a;
}
if (m >= n) {
  minKichik = m;
  minKichik = n;
} else {
  maxKichik = n;
  minKichik = m;
}

if (
  maxKatta * minKatta > maxKichik * minKichik &&
  maxKatta > maxKichik &&
  minKatta > minKichik
) {
  console.log(maxKatta * minKatta - maxKichik * minKichik);
} else if (
  maxKatta * minKatta > maxKichik * minKichik &&
  (maxKatta < maxKichik || minKatta < minKichik)
) {
  console.log(a * b);
} else if (a * b == m * n) {
  console.log(0);
}
