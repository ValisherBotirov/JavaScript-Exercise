// 6-masala
let x = 123456;
x = x.toString();
let count = 0;
let sum = 0;

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
const digitCountFunc = function (number) {
  number = number.toString();
  for (let i = 0; i < number.length; i++) {
    sum += +number[i];
    count++;
  }
  return sum;
};

console.log(digitCountFunc(123456));
