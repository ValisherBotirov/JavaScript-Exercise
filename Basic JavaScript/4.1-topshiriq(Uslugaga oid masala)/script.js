let sum = Number(prompt("Umumiy xarajatni kiriting!"));
let usluga;
let xarajat;
if (sum >= 50 && sum <= 300) {
  usluga = (sum * 15) / 100;
  xarajat = sum - usluga;
  console.log(
    `Umumiy xarajat : ${sum}, Xisob : ${xarajat}, Usluga : ${usluga}`
  );
} else if (sum <= 50 || sum >= 300) {
  usluga = (sum * 20) / 100;
  xarajat = sum - usluga;
  console.log(
    `Umumiy xarajat : ${sum}, Xisob : ${xarajat}, Usluga : ${usluga}`
  );
}
