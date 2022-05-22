// 6-masala
// let x = 123456;
// x = x.toString();
// let count = 0;
// let sum = 0;

//--// arrow function
// digitCountFunc = (number) => {
//   number = number.toString();
//   for (let i = 0; i < number.length; i++) {
//     sum += +number[i];
//     count++;
//   }
//   return sum;
// };

//--//declaration function
// function digitCountFunc(number) {
//   number = number.toString();
//   for (let i = 0; i < number.length; i++) {
//     sum += +number[i];
//     count++;
//   }
//   return sum;
// }

//--//expesion function
// const digitCountFunc = function (number) {
//   number = number.toString();
//   for (let i = 0; i < number.length; i++) {
//     sum += +number[i];
//     count++;
//   }
//   return sum;
// };

// console.log(digitCountFunc(123456));

// 7-masala
inverDigit = (number) => {
  const arr = [];
  number = number.toString();
  for (let i = number.length - 1; i >= 0; i--) {
    arr.push(x[i]);
  }
  let result = arr.join("");
  return result;
};

console.log(inverDigit(123));

// let x = 123;
// x = x.toString();
// for (let i = x.length - 1; i >= 0; i--) {
//   console.log(x[i]);
//   arr.push(x[i]);
// }
// console.log(arr.join(""));
