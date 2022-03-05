// let sum = Number(prompt("Umumiy xarajatni kiriting!"));

let bell = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let usluga = [];
let total = [];

let foiz;
let xarajat;

for (let i = 0; i < bell.length; i++) {
  if (bell[i] >= 50 && bell[i] <= 300) {
    foiz = (bell[i] * 15) / 100;
    xarajat = bell[i] + foiz;
    usluga.push(foiz);
    total.push(xarajat);
  } else if (bell[i] < 50 || bell[i] > 300) {
    foiz = (bell[i] * 20) / 100;
    xarajat = bell[i] + foiz;
    usluga.push(foiz);
    total.push(xarajat);
  }
}
console.log(usluga);
console.log(total);

// splice includes indexOf unshift
