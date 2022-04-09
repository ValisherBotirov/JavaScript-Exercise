// 1-masala
// let a,
//   b,
//   result = 0;
// a = 5;
// b = 2;
// while (a >= b) {
//   a = a - b;
// }
// console.log(a);

// 2-masala
// let a,
//   b,
//   result = 0;
// a = 13;
// b = 2;
// while (a >= b) {
//   a = a - b;
//   result++;
// }
// console.log(result);

// Eng ko'p elemt qatnashgan array

let arr = [
  1, 2, 3, 4, 5, 5, 6, 78, 3, 2, 1, 5, 2, 3, 4, 5, 6, 5, 7, 1, 5, 3, 5,
];

let max = 0;
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = i; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  if (max < count) {
    max = count;
    console.log(max, arr[i]);
  }
}
