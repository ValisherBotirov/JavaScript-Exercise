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
let n = 2;
let x = 1;
let sum = 0;
for (let i = 1; i <= n; i++) {
  x = x * i;
  console.log(`${i}! => ${x}`);
}
console.log(x);
