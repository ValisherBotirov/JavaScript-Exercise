// Ternary operatori

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

// Fungsiylar

// Function declaration
// ---------------------------------------------------------
// kvadratga ko'tarib beruvchi fungsiya
function daraja(son) {
  console.log("Kvadratga ko'taraman");
  return son ** 2;
  // console.log(son ** 2);
}
let x = 4;
console.log(daraja(x));
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
let son = Number(prompt("Kubga kutarmoqchi bo'lgan sonni kiriting"));
let kub = function (a) {
  return a ** 3;
};
alert(kub(son));
