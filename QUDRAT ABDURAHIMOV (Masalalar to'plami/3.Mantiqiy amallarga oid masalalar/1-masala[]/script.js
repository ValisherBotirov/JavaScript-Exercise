// let A = 20;
// console.log(Boolean(A > 0));
// A = 21;
// console.log(Boolean(A % 2 !== 0));
// A = 2;
// let B = 5;
// console.log(Boolean(A > 2 && B <= 3));
// let C = 6;
// console.log(Boolean(A <= B && B <= C));
// 9-masala
let a = 4;
let b = 4;
console.log(Boolean(a % 2 == 0 || b % 2 == 0));

//=========================================
//  Objectlarni birlashtirish
// ========================================

let user = {
  name: "Valisher",
};
let userAge = {
  age: 20,
};
let userJob = {
  job: "Fullstact Developer",
};

console.log(Object.assign(user, userAge, userJob));

// let arr = [15, -5, 2, -9, -8, 65, -5, -7, 8, -10];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     count++;
//   }
// }
// console.log(count);
