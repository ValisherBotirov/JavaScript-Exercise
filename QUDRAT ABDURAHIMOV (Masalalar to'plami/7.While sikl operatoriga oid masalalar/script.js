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
// let x = 50;

//

// 18-masala
// let n = 123;
// let s;
// let arr = [];
// while (n > 0) {
//   s = n % 10;
//   // console.log(s);
//   arr.push(s);
//   n = Math.round(n / 10);
// }

// console.log(arr);
// let result = arr.reverse().join("");
// console.log(result + "Natija");

// 19-20-18-masala
// let n = 123456222;
// let s,
//   count = 0;
// while (n > 0) {
//   s = n % 10;
//   n = Math.round(n / 10);
//   if (s == 2) {
//     count++;
//   }
// }

// if (count > 0) {
//   console.log(`${count} ta 2 qatnashgan`);
// } else {
//   console.log("2 soni qatnashmagan");
// }

// 22-masala
// let n = 12;
// let s = 2,
//   count = 0;
// while (n >= s) {
//   if (n % s == 0) {
//     count++;
//   }
//   s++;
// }

// if (count === 1) console.log("Tub son");
// else console.log("Tub son emas");

// 23-masala
// let a = 6,
//   b = 21;
// let result;
// while (b > a) {
//   b = b - a;
//   result = b;
// }

// console.log(result);

// tub ko'paytuvchilarga ajratish

// let a = 4,
//   b = 80;
// let s = 2;
// while (b > 1) {
//   if (b % s == 0) {
//     b = Math.round(b / s);
//     console.log(s);
//   } else {
//     s++;
//   }
// }

// Fibonachi sonlar
// let n = 20;
// let k1 = 1,
//   k2 = 1;
// let i = 3;
// let kn = k2 + k1;
// while (n > kn) {
//   kn = k1 + k2;
//   console.log(kn);
//   k1 = i - 1;
//   k2 = i - 2;
//   i++;
// }

// 24-masala

// let n = 20;
// let k1 = 1,
//   k2 = 1;
// let i = 3;
// let kn = k2 + k1;
// while (n > kn) {
//   kn = k1 + k2;
//   if (n == kn) {
//     console.log("bor");
//     break;
//   } else {
//     console.log("yuq");
//     break;
//   }
//   k1 = i - 1;
//   k2 = i - 2;
//   i++;
// }

// 25-masala
// let n = 20;
// let k1 = 1,
//   k2 = 1;
// let kn = k2 - k1;
// let index = 3;
// while (n >= kn) {
//   kn = k2 + k1;
//   if (kn > n) {
//     console.log(kn);
//     break;
//   }
//   k2 = index - 2;
//   k1 = index - 1;
//   index++;
// }

// 26-masala
// let n = 20;
// let k1 = 1,
//   k2 = 1;
// let kn = k2 - k1;
// let arr = [];
// let index = 3;
// while (n >= kn) {
//   kn = k2 + k1;
//   arr.push(kn);
//   if (kn > n) {
//     let length = arr.length;
//     for (let i = 1; i < arr.length; i++) {
//       console.log(arr[i]);
//       // console.log(length);
//     }
//     console.log(arr[length - 1], arr[length - 2]);
//   }
//   k2 = index - 2;
//   k1 = index - 1;
//   index++;
// }

// 28 - masala;
// let e = 20;
// let a1 = 2,
//   k = 2;
// let akx = a1;
// let ak = a1 + 1 / akx;
// while (Math.abs(ak - akx) < e) {
//   ak = a1 + 1 / akx;
//   akx = a1;
//   a1 = k++;
// }

// // 30-masala
// let a, b, c;
// a = 4;
// b = 5;
// c = 3;
// let s = a * b;
// let count = 0;
// let sqr = c * c;
// while (s > sqr) {
//   count++;
//   sqr += c * c;
// }
// console.log(count);

// 30-masala //2-usul
let a, b, c;
a = 6;
b = 9;
c = 3;

let count1 = 0;
let count2 = 0;

let x = c;
let y = c;
while (a >= x) {
  count1++;
  x += c;
}

while (b >= y) {
  count2++;
  y += c;
}

console.log(count1 * count2);
