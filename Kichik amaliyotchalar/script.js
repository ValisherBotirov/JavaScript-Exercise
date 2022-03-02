// Ternary operatori
// ===============================================

// -----------------------------------------------
// if and else if

// let age = 20;
// if (age > 21) {
//   console.log("Son 20 dan katta");
// } else if (age < 20) {
//   console.log("Son 20 dan kichik");
// } else console.log("Son 20 ga teng");

// age > 21
//   ? console.log("20 dan katta")
//   : age < 20
//   ? console.log("20 dan kichik")
//   : console.log("Son 20 ga teng");
// ---------------------------------------------------
// Ichma ich sikl

// let age = 20;
// let pass = true;
// if (age >= 20) {
//   if (pass) {
//     console.log("2 lasi ham to'g'ri");
//   } else console.log("1-si togri");
// } else console.log("1-si notogri");

// age >= 20
//   ? pass
//     ? console.log("2 lasi ham togri")
//     : console.log(1 - togri)
//   : console.log("1-si notogri");
// --------------------------------------------------------
// ===================================================
// Fungsiylar
// ==================================================
// Function declaration
// ---------------------------------------------------------
// kvadratga ko'tarib beruvchi fungsiya
// function daraja(son) {
//   console.log("Kvadratga ko'taraman");
//   return son ** 2;
//   // console.log(son ** 2);
// }
// let x = 4;
// console.log(daraja(x));
// daraja(4);
// ------------------------------------------------------------
// ikki sonni yig'indisi dasturi
// let a = Number(prompt("1-sonni kiriting"));
// let b = Number(prompt("2-sonni kiritng"));
// function yigindi(x, y) {
//   return x + y;
// }

// let c = yigindi(a, b);
// alert(`Ikki sonning yig'indisi ${c} ga teng`);
// --------------------------------------------------------------

// Function expression
// -----------------------------------------------------------------
// kopaytma dasturi

// let a = Number(prompt("1-sonni kiriting"));
// let b = Number(prompt("2-sonni kiritng"));
// let kopaytma = function (x, y) {
//   console.log("Ko'paytmani hisoblab beradi");
//   return x * y;
// };

// console.log(kopaytma(a, b));
// --------------------------------------------------------------

// kubga ko'taruvchi dastur
// let son = Number(prompt("Kubga kutarmoqchi bo'lgan sonni kiriting"));
// let kub = function (a) {
//   return a ** 3;
// };
// alert(kub(son));

// ===============================================================================
// Basic Array Operators
// ============================================================
// ---------------------------------

// let arr = ["Valisher", "Diyor", "Jamil"];
// console.log(arr);
// arr.push("Bekxod");
// console.log(arr);
// arr.unshift("Aziz");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.splice(1, 0);
// console.log(arr);
// =====================================================
// Object va uni chaqirish usullari
// ==================================================
// -----------------------------------
// "use strict";

// let about = {
//   firstName: "Valisher",
//   lastName: "Botirov",
//   age: "20",
//   job: ["Developer", [24, 48]],
// };

// console.log(about.firstName, about.lastName);
// console.log(about.job[1][0]);

// console.log(about["firstName"]);
// ====================================================
// This ko'rsatgichi
// ===============================================

// let aboutMe = {
//   birth: 2002,
//   now: 2022,
//   caclAge: function () {
//     return this.now - this.birth;
//   },
// };

// console.log(aboutMe.caclAge());

// ==============================================
// For operatori
// =============================================
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let juftSon = function (n) {
//   for (let i = 1; i <= n; i += 2) {
//     console.log(i);
//   }
// };

// juftSon(100);

// let toqSon = function (n) {
//   for (let i = 0; i <= n; i += 2) {
//     console.log(i);
//   }
// };

// toqSon(100);

// topshiriqcha

// let birth = [1996, 1998, 2000, 2002];
// let age = [];
// let yosh;
// let now = 2022;

// let calcAge = function () {
//   for (let i = 0; i < birth.length; i++) {
//     yosh = now - birth[i];
//     age.push(yosh);
//     console.log(yosh);
//   }
// };

// calcAge();

// let person = {
//   firstName: "Valisher",
//   lastName: "Botirov",
//   person2: {
//     age: 20,
//     location: "Tashkent",
//   },
// };

// console.log(person.person2["age"]);

// ===================================================================
//          Ichma-ich sekillar

// let hafta = [
//   "Dushunba",
//   "Seshanba",
//   "Chorshanba",
//   "Payshanba",
//   "Juma",
//   "Shanba",
// ];
// let inc = 2;
// for (let i = 0; i < hafta.length; i++) {
//   console.log(hafta[i]);
//   for (let j = 1; j < inc; j++) {
//     console.log(`${j} para`);
//   }
//   inc++;
// }

// Dasturcha 2 talik sikl

// for (let i = 0; i <= 6; i++) {
//   switch (i) {
//     case 0:
//       console.log("Dushanba");
//       break;
//     case 1:
//       console.log("Seshanba");
//       break;
//     case 2:
//       console.log("Chorshanba");
//       break;
//     case 3:
//       console.log("Payshanba");
//       break;
//     case 4:
//       console.log("Juma");
//       break;
//     case 5:
//       console.log("Shanba");
//       break;
//     case 6:
//       console.log("Yakshanba");
//       break;
//   }

//   for (let j = 0; j <= 6; j++) {
//     if (i <= 5) {
//       console.log(`${i + 1} para dars bor`);
//     } else console.log("Dars yoq");
//   }
// }

//        dastur 5dan katta toq son chiqar

// let rand = Math.trunc(Math.random() * 10);
// while (rand <= 5 || rand % 2 !== 1) {
//   console.log(`toq son ${rand}`);

//   rand = Math.trunc(Math.random() * 10 + 1);
// }

// console.log(`Stop ${rand}`);

// let x1, x2, y1, y2;
// x1 = 4;
// y1 = 3;
// x2 = 6;
// y2 = 1;
// if (x1 == x2 || y1 == y2) {
//   console.log("yes");
// } else console.log("no");
