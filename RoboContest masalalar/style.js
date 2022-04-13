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
// let n = 10;
// let arr = [2432312133];
// console.log(arr);
// let bir = 0;
// let ikki = 0;
// let uch = 0;
// let turt = 0;
// let besh = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 1) bir++;
//   if (arr[i] == 2) ikki++;
//   if (arr[i] == 3) uch++;
//   if (arr[i] == 4) turt++;
//   if (arr[i] == 5) besh++;
// }

// 3-masala
// let a = "12342132165451231544687456456123132";
// let b = "2621315646489746456465456";
// a = String(a);
// b = String(b);
// let arr1 = a.split("");
// let arr2 = b.split("");
// let minArr;
// let maxArr;
// if (arr1.length < arr2.length) {
//   minArr = arr1;
//   maxArr = arr2;
// } else {
//   minArr = arr2;
//   maxArr = arr1;
// }

// let arrFarq = Math.abs(arr1.length - arr2.length);

// for (let i = 0; i < arrFarq; i++) {
//   minArr.unshift("0");
// }

// let resultArr = [];
// let reverseArr1 = arr1.reverse();
// let reverseArr2 = arr2.reverse();
// let j = 0;
// for (let i = 0; i < maxArr.length; i++) {
//   resultArr.push(
//     String(((Number(reverseArr1[i]) + Number(reverseArr2[i])) % 10) + j)
//   );
//   j = 0;
//   j += Math.floor((Number(reerseArr1[i]) + Number(reverseArr2[i])) / 10);
// }

// let reverseResultArr = resultArr.reverse();
// console.log(reverseResultArr.join(""));

// 43-masala
// let a = 1;
// let b = 2;
// let c;
// c = a;
// a = b;
// b = c;
// console.log(a, b);

// 71-masala
// let n = 4;
// let count = 0;
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= n; j++) {
//     if (i + j == n) {
//       count++;
//     }
//     j = j + 1;
//   }
// }
// console.log(count);

// 11-masala
// let arr = [54, 65, 72, 20, 3];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// let index = arr.indexOf(max);
// arr.splice(index, 1);

// let max2 = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max2) {
//     max2 = arr[i];
//   }
// }
// console.log(max2);

// 11 -masala
let n = 12;
let count = 0,
  soni = 0;
for (let i = 1; i <= n; i++) {
  count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) count++;
  }
  if (count == 2) soni++;
}
if (soni % 2 !== 0) console.log("Ali");
else console.log("Bobur");
