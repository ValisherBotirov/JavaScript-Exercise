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
let a = 10;
let b = 5;

let aboutMe = {
  name: "Valisher",
  surname: "Botirov",
  age: 20,
  birtYear: 2002,
  nowYear: 2022,
  study: {
    university: "TATU",
  },

  calc: function () {
    return this.birtYear - this.nowYear;
  },
};

console.log(aboutMe.calc());
