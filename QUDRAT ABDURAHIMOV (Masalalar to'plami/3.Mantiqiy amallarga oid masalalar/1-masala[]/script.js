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

//=========================================
//  Objectlarni birlashtirish
// ========================================

// let user = {
//   name: "Valisher",
// };
// let userAge = {
//   age: 20,
// };
// let userJob = {
//   job: "Fullstact Developer",
// };

// console.log(Object.assign(user, userAge, userJob));

// let arr = [15, -5, 2, -9, -8, 65, -5, -7, 8, -10];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     count++;
//   }
// }
// console.log(count);
// ===================================================
// Kiritilgan sonning raqamlar yig'indisini topadigan son

// let number = prompt((arr = []));
// console.log(`Kiritilgan sonning raqamlar soni:  ${number.length}`);
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//   sum = sum + Number(number[i]);
// }
// console.log(`Kiritilgan sonning raqamlar yig'indisi:  ${sum}`);

// ==========================================
// 10-masala
// let a = 4;
// let b = 3;
// console.log(Boolean(a % 2 == 0 && b % 2 == 1) || (a % 2 == 1 && b % 2 == 0));
// let mantiq = Boolean(Number(prompt("Uylanganmisiz?")));
// function ask(mantiq) {
//   if (mantiq === "ha") {
//     console.log("sen uylangansan");
//   } else if (mantiq === "yoq") {
//     console.log("Uylansang bumaydimi");
//   } else console.log("Qayta urunib koring");
// }

// let arr = [
//   prompt("Ism"),
//   prompt("Familiya"),
//   Number(prompt("Age kirit")),
//   ask() = prompt("Uylanganmisiz?"),
// ];

// ask(mantiq);

// console.log(arr);

// 16-masala[17]
// let son = prompt("Ixtiyoriy son kiriting");
// let uzunlik = son.length;
// let oxirgiRaqam = son % 10;

// console.log(uzunlik, oxirgiRaqam);
// console.log(Boolean(uzunlik == 2 && oxirgiRaqam % 2 == 0));

// 18-masala
// let a, b, c;
// a = -2;
// b = 3;
// c = 2;

// console.log(Boolean(a == -b || b == -c || a == -c));

// 20-masala
// let son = 122;
// let a, b, c;
// c = son % 10;
// a = Math.trunc(son / 100);
// b = Math.trunc((son % 100) / 10);
// console.log(a, b, c);
// console.log(Boolean(a != b && b != c && a != c));

// 21-masala
// let son = 123;
// let a, b, c;
// c = son % 10;
// a = Math.trunc(son / 100);
// b = Math.trunc((son % 100) / 10);
// console.log(a, b, c);
// console.log(Boolean(a < b && b < c));

// let a = Number(prompt("a ni kiriting"));
// let n = Number(prompt("n ni kiriting"));

// for (let i = 1; i < n; i++) {
//   a = a * a;
// }
// console.log(a);

// 23-masala
// let son = 121;
// let a, b, c;
// c = son % 10;
// a = Math.trunc(son / 100);
// b = Math.trunc((son % 100) / 10);
// console.log(a, b, c);
// console.log(Boolean(String(a) == String(c)));

// 34-masala
// let x, y;
// x = 2;
// y = 5;
// console.log(Boolean(x % 2 == 0 && y % 2 !== 0))

//25-masala
// let x, y;
// x = -2;
// y = 5;
// console.log(Boolean(y > 0 && x < 0));

// 29-masala
// let x, y, x1, y1, x2, y2;
// x1 = 1;
// y1 = 2;
// x2 = 8;
// y2 = 7;
// x = 4;
// y = 5;
// console.log(Boolean(y >= y1 && y <= y2 && x >= x1 && x <= x2));
