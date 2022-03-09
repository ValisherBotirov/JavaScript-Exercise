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

const universityTatu = {
  name: "TATU",
  talabalarSoni: 9500,
  davomat(jami, kelganlari) {
    console.log(
      `${this.name} universetutida ${jami} talabadan ${
        jami - kelganlari
      } ta talaba kelmagan`
    );
  },
};
universityTatu.davomat(9500, 9400);

let davomat = universityTatu.davomat;
const universityUzmu = {
  name: "UzMU",
  talabalarSoni: 16500,
};
let arr = [17000, 16900];
davomat.call(universityUzmu, 16500, 16450);
davomat.apply(universityUzmu, arr);
