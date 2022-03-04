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

const cafe = {
  cafeName: "MagicCafe",
  taomlari: ["osh", "shorva", "beshtiks", "shashlik"],
  shirinliklar: ["mjzqaymoq", "tort", "paxlava"],
  ichimliklar: ["cola", "pepsi", "choy"],
  ochilishVaqti: {
    dushanba: { open: "8:00", close: "22:00" },
    shanba: { open: "6:00", close: "22:00" },
  },
  location: "Tashkent/Yunusabad/TATU",
  order: function (taom, ichimlik) {
    console.log(
      `Siz ${this.taomlari[taom]} osh buyutma qildix va ${this.ichimliklar[ichimlik]}  buyurtma qildiz `
    );
  },
  buyurtmaniYetkazish: function (x, y, z) {
    // const {x,y,z}=p;
    console.log(
      `Sizni buyurtmangizga quyidagilar kiradi: 1.${this.taomlari[x]},2.${this.shirinliklar[y]},3.${this.ichimliklar[z]}`
    );
  },
  muzqaymoq: function (first, second, third) {
    console.log(
      `Sizning muzqaymog'ingiz ${first},${second},${third} mevalaridan iborat `
    );
  },
};
cafe.buyurtmaniYetkazish(1, 2, 1);

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

let x = [...cafe.taomlari, ...cafe.ichimliklar];
const [ovqat1, ovqat2, ...kerakEmas] = x;
console.log(ovqat1, ovqat2, kerakEmas);

function add(...raqamlar) {
  let sum = 0;
  for (let i = 0; i < raqamlar.length; i++) {
    sum += raqamlar[i];
  }
  console.log(sum);
}
add(1, 2, 3);

console.log(0 || 0 || NaN || 0 || "" || NaN || undefined);
cafe.odam = 0;
console.log(cafe.odam ?? "Bunday qiymat mavjud emas");
