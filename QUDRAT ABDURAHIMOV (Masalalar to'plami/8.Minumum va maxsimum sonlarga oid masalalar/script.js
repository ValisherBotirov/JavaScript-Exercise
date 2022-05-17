// 1-masala
// let m = 6;
// const arrA = [1, 2, 3, 4, 5, 6];
// const arrB = [1, 2, 3, 4, 5, 6];
// let max = arrA[0] * arrB[0];
// for (let i = 1; i <= m; i++) {
//   if (arrA[i] * arrB[i] > max) {
//     max = arrA[i] * arrB[i];
//   }
// }
// console.log(max);

// 14-masala
// let b = 60;
// let index = "";
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > b) {
//     index = arr[i];
//     break;
//   }
// }

// if (index) {
//   console.log(index);
// } else console.log("00");

// 19-masala
let n = 10;
let arr = [];
for (let i = 0; i < n; i++) {
  let random = Math.trunc(Math.random() * 30 - 10);
  arr.push(random);
}
console.log(arr);

let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > n) {
    console.log(arr[i]);
    count++;
  }
}
console.log(count);
