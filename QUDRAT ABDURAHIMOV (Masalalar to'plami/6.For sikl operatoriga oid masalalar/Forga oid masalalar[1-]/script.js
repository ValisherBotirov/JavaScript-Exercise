// Forga oid Qudrat Abduhakimov masalalari
// =========================================
// 1-masala
// let n = 4;
// let k = 5;
// for (i = 0; i < n; i++) {
//   console.log(k + "\n");
// }

// 2-masaala
// let a, b;
// a = 2;
// b = 10;
// let count = 0;
// for (let i = a; i <= b; i++) {
//   console.log(i);
//   count++;
// }
// console.log(`Ekranga chiqarilgan sonlar soni ${count}`);

// 4-masala
// let narx = 10;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} kg konfet narxi -> ${i * narx} so'm`);
// }

// 7-masala
// let a, b;
// a = 1;
// b = 9;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   sum += i;
// }
// console.log(sum);

// 9-masala
// let a, b;
// a = 1;
// b = 3;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   sum += i * i;
// }
// console.log(sum);

// 10-masala
// let n;
// n = 2;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += 1 / i;
// }
// console.log(sum);

// 11-masala
// let n;
// n = 2;
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   sum += (n + i) ** 2;
// }
// console.log(sum);

// 13-masala
// let n = 4;
// for (let i = 1.1; i <= n / 2; i = i + 0.2) {
//   console.log(i);
// }
// for (let i = -1.2; i <= -(n / 2); i = i - 0.2) {
//   console.log(i);
// }

// 14-masala
// let sum = 0;
// let n = 7;
// for (let i = 1; i <= 2 * n - 1; i = i + 2) {
//   sum = sum + i;
// }
// console.log(`${n} sonining kvadrati ${sum}`);

//15-masala
// let a = 3,
//   n = 4;
// let x = a;
// for (let i = 1; i < n; i++) {
//   x = x * a;
// }
// console.log(x);

// 16-masala
// let n = 4,
//   a = 2;
// for (let i = 1; i <= n; i++) {
//   console.log(a ** i);
// }

// 17-masala
// let n = 4,
//   a = 2;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + a ** i;
// }
// console.log(sum);

// 18-masala
// let n = 4,
//   a = 2;
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   sum = sum + (-1) ** i * a ** i;
// }
// console.log(sum);

// 19-masala Faktorial
// let n = 2;
// let x = 1;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   x = x * i;
//   console.log(`${i}! => ${x}`);
// }
// console.log(x);

// 20-masala
// let son = 4;
// let sum = 0;
// let tubSon = function (son) {
//   let result = 1;
//   for (let i = 1; i <= son; i++) {
//     result = result * i;
//   }
//   return result;
// };
// for (let i = 1; i <= son; i++) {
//   // tubSon(i);
//   sum += tubSon(i);
//   console.log(tubSon(i));
// }
// console.log(sum);

// kenguru masalasi
// let x1, v1, x2, v2;
// x1 = 0;
// v1 = 2;
// x2 = 5;
// v2 = 3;
// while (x1 - x2 < 0) {
//   x1 = x1 + v1;
//   x2 = x2 + v2;
//   if (x1 == x2) {
//     console.log("Yes");
//   } else console.log("no");
//   continue;
// }
// if (Math.abs(x2 - x1) % Math.abs(v1 - v2) == 0 && Math.abs(v2 - v1) !== 1) {
//   console.log("yes");
// } else {
//   console.log("No");
// }

// 21-masala
// let son = 2;
// function tubSon(son) {
//   let sum = 1;
//   for (let i = 1; i <= son; i++) {
//     sum = sum * i;
//   }
//   return sum;
// }
// let result = 0;
// for (let i = 1; i <= son; i++) {
//   result = result + 1 / tubSon(i);
// }
// console.log(result + 1);
// // console.log(tubSon(son));

// 22-masala
// let n = 3,
//   x = 2;
// function fak(n) {
//   let son = 1;
//   for (let i = 1; i <= n; i++) {
//     son = son * i;
//   }
//   return son;
// }
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + x ** i / fak(i);
// }
// console.log(sum + 1);
// console.log(fak(n));

// 23-masala
// let n, x;
// n = 2;
// x = 2;

// function fak(n) {
//   let nFak = 1;
//   for (let i = 1; i <= n; i++) {
//     nFak = nFak * i;
//   }
//   return nFak;
// }

// let result = 0;
// for (let i = 0; i <= n; i++) {
//   result = result + ((-1) ** i * x ** (2 * i + 1)) / fak(2 * i + 1);
// }
// console.log(result);

// 27-masala
// let x, n;
// x = 2;
// n = 2;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += ((2 * i - 1) * x ** (2 * i + 1)) / ((2 * i + 1) * (2 * i));
// }
// console.log(x + sum);

// 29-masala
// let a, b, n;
// a = 2;
// b = 10;
// n = 4;
// let x = b - a;
// for (let i = a; i <= b; i = i + x / n) {
//   console.log(i);
// }

// 36-masala
// let n = 5;
// let k = 2;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i ** k;
// }
// console.log(sum);

// 39-masala
// let a, b;
// a = 2;
// b = 8;
// for (i = a + 1; i < b; i++) {
//   for (j = 1; j <= i; j++) {
//     console.log(`${i}`);
//   }
// }

// 40-masala
// let a, b;
// a = 2;
// b = 8;
// for (i = a; i <= b; i++) {
//   for (let j = a; j <= i; j++) {
//     console.log(i);
//   }
// }
