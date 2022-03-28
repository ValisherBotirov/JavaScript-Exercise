// 367-masala
// let n = 12345; //15
// n = String(n);
// console.log(n);
// let sum = 0;
// for (let i = 0; i < n.length; i++) {
//   sum += Number(n[i]);
//   console.log(n[i]);
// }
// console.log(sum);

// 462-masala
// let str = "sherzod";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == "s" && str[i + 1] == "h") {
//     console.log(str[i] + str[i + 1]);
//     0;
//   } else console.log(str[i]);
// }

// 460-masala
// let n = 1;
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= n; j++) {
//     for (let k = 0; k <= n; k++) {
//       if (i + j + k == n) {
//         sum++;
//       }
//     }
//   }
// }
// console.log(sum);

// 139-masala
let n = 10;
let arr = [2432312133];
console.log(arr);
let bir = 0;
let ikki = 0;
let uch = 0;
let turt = 0;
let besh = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 1) bir++;
  if (arr[i] == 2) ikki++;
  if (arr[i] == 3) uch++;
  if (arr[i] == 4) turt++;
  if (arr[i] == 5) besh++;
}
