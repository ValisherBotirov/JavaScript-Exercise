// let son = 15568999;
// let x, y;
// x = Math.trunc(son / 100);
// y = x % 10;
// console.log(y);

// Objectni ichidagi valuelarni qo'shish
// let oylik = {
//   Ali: 100,
//   Vali: 500,
//   Anvar: 200,
// };
// let sum = 0;
// for (let key in oylik) {
//   sum = sum + oylik[key];
// }

// console.log(sum);

// Masala agar object tupelari numver bo'lsa uni qiymatini 3ga ko'paytirib yangi object hosil qiling

let menu = {
  widht: 200,
  height: 150,
  firstName: "Valisher",
};
let myArr = [];
let a = 1;
for (let key in menu) {
  myArr.push(menu[key]);
}
for (let i = 0; i < myArr.length; i++) {
  if (typeof myArr[i] === "number") {
    myArr[i] *= 3;
    console.log(myArr[i]);
  } else console.log(myArr[i]);
}
// console.log(funcObj(menu));
console.log(myArr);

// for (let key in menu) {
//   if (typeof (menu[key] === "number")) {
//     menu[key] = menu[key] * 3;
//   }
// }
// console.log(menu);
