"use strict";

let age = 20;
age < 22 ? console.log("20 dan kichik") : console.log("20 dan katta");

let foo = 20;
let too = true;

foo < 30 && foo > 18
  ? console.log("Qabul qilindingiz")
  : foo <= 17
  ? console.log("Yoshiz jud kichik ekan")
  : console.log("Yoshingiz juda katta ekan");

// Fungsiyalar
let birtYear = prompt("Tug'ilgan yilingizni kiriting");
let nowYear = prompt("Joriy yilni kiriting");

function hisobla(birtYear, nowYear) {
  let yosh = nowYear - birtYear;
  return yosh;
}

alert(hisobla(birtYear, nowYear));
