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

// let arr = [
//   1, 2, 3, 4, 5, 5, 6, 78, 3, 2, 1, 5, 2, 3, 4, 5, 6, 5, 7, 1, 5, 3, 5,
// ];

// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   let count = 0;
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       count++;
//     }
//   }
//   if (max < count) {
//     max = count;
//     console.log(max, arr[i]);
//   }
// }

// Arrayni 2ta boshidan 2ta oxiridan chiqaradi

// let arr = [1, 2, 3, 4, 5];
// let p = 0,
//   q = arr.length - 1;
// let index = 0;
// let newArr = [];
// for (let i = 0; i < (arr.length + 1) / 2; i++) {
//   if (index % 4 == 0) {
//     newArr.push(arr[p]);
//     if (p != q) {
//       newArr.push(arr[p + 1]);
//     }
//     p += 2;
//   } else {
//     newArr.push(arr[q]);
//     if (q != p) {
//       newArr.push(arr[q - 1]);
//     }
//     q -= 2;
//   }
//   index += 2;
// }

// console.log(newArr);

// =======================================
// Eng ko'p elemt qatnashgan array
// let arr = [1, 2, 3, 4, 5, 5, 6, 3, 2, 1, 5, 2, 3, 4, 5, 6, 5, 7, 1, 5, 3, 5];
// let count,
//   max = 0,
//   index;
// for (let i = 0; i < arr.length; i++) {
//   count = 0;
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] == arr[j]) {
//       count++;
//     }
//   }
//   if (max < count) {
//     max = count;
//     index = arr[i];
//     console.log(max, count, index);
//   }
// }

//3-masala
// let n = 13,
//   k = 5;
// let count = 0;
// while (n >= k) {
//   n = n - k;
//   count++;
// }
// console.log(`Qoldiq : ${n}`);
// console.log(`Butun qismi : ${count}`);

// 4-masala
// let n = 80;
// let s = 3;
// while (n >= s) {
//   s *= 3;
// }
// if (s / 3 == n) {
//   console.log("3 ning darajasi");
// } else console.log("3 ning darajasi emas");

// 5-masala
// let n = 32; // n = 2 ^ k
// let k = 0;
// while (n >= 2) {
//   n = n / 2;
//   k++;
// }
// console.log(k);

// 6-masala
// let n = 5,
//   res = 1;
// if (n % 2 == 0) {
//   while (n >= 2) {
//     res = res * n;
//     n -= 2;
//   }
// } else {
//   while (n >= 1) {
//     res = res * n;
//     n -= 2;
//   }
// }
// console.log(res);

// 7-masala
// let n = 30;
// let k = 0;
// while (k * k < n) {
//   k++;
// }
// console.log(k);

// ""// 9-masala
// let n = 82;
// let k = 1;
// while (3 ** k < n) {
//   k++;
// }
// console.log(k);""

// 10-masala
// let n = 81;
// let k = 1;
// while (3 ** k <= n) {
//   k++;
// }
// console.log(k - 1);

// 11-masala
// let n = 46;
// let k = 1,
//   sum = 0;
// while (sum <= n) {
//   sum += k;
//   k++;
// }
// console.log(k-1, sum);

// 15-masala
// let s = 100; //s2 = 200
// let p = 20,
//   i = 0;
// let sum = s;
// while (sum < 2 * s) {
//   sum += (sum * p) / 100;
//   i++;
// }
// console.log(i, sum);

// 17-masala
// let n = 14; // n / m
// let m = 3,
//   count = 0,
//   mod = m;
// while (m <= n) {
//   count++;
//   m += m;
//   console.log(count);
// }
// // console.log(mod);
// // console.log(n - mod * count);
// console.log(count);
let x = 43;
