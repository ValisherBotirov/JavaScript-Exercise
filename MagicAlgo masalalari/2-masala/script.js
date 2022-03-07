// ====================================================
// -----------MagicAlgo masalalar------------------------
// 2-masala
// let str = "happy,newyear,enjoy";
// let arr = str.split(",");
// let strnew = arr.join(" ");

// console.log(strnew);
// --------------------------------------------
// 3-masala
// let alf = "abcdefghijklmnopqrstuvwxyz";
// let arr = alf.split("");
// let s = [];
// let tab = "Yangi yil bilan";
// tabrik = tab.split("");
// for (let i = 0; i <= tabrik.length; i++) {
//   if (!s.includes(tabrik[i]) && arr.includes(tabrik[i].toLowerCase())) {
//     s.push(tabrik[i]);
//   }
// }
// console.log(s.length);
// --------------------------
// let input = "Taft";
// let s = "abcdefghijklmnopqrstuvwxyz";
// let b = s.split("");

// let a = input.split("");
// let sum = [];
// for (let i = 0; i < a.length; i++) {
//   if (!sum.includes(a[i]) && b.includes(a[i].toLowerCase())) {
//     sum.push(a[i]);
//   }
// }
// console.log(sum.length);
// --------------------------------------------
// Uchta songa oid masala
// let k = 2;
// let s = 2;

// let x = 0;
// let y = 0;
// let z = 0;
// let arrX = [];
// let arrY = [];
// let a = 0;

// for (let i = 0; i <= k; i++) {
//   arrX.push(x);
//   x++;
//   arrY.push(y);
//   y++;
// }

// for (let i = 0; i < arrX.length; i++) {
//   for (let j = 0; j < arrY.length; j++) {
//     if (s - arrX[i] - arrY[j] <= k && s - arrX[i] - arrY[j] >= 0) a++;
//   }
// }
// console.log(a);
// ------------------------------------------------------

// 4-masala
// let a, b, c, d;
// a = 3;
// b = 5;
// c = 2;
// d = 7;
// if (a * b > d * c) {
//   console.log(a * b);
// } else console.log(d * c);
// ----------------------------------------------

// 5-masala
// let son = 101;
// arr = String(son);
// arr = arr.split("");
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += Number(arr[i]);
// }

// if (son % sum == 0) {
//   console.log("Yes");
// } else console.log("No");
// ----------------------------------------------------

// 6-masala
// let son = 4;
// let count = 0;
// for (let i = 2; i <= son; i++) {
//   if (son % i == 0) {
//     count++;
//   }
// }
// if (count == 1) {
//   console.log(1);
// } else console.log(0);
// ----------------------------------------------------
// 7-masala
// Fibonachi sonlar
// let arr = [2, 1];
// let input = 5;
// let newMember;
// for (let i = 2; i <= input; i++) {
//   newMember = arr[i - 1] + arr[i - 2];
//   arr.push(newMember);
//   console.log(newMember);
// }
// console.log(newMember);

// 9-masala(Arrayga oid)
let input = [[[]]];
let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
for (let i = 0; i < input.length; i++) {
  count++;
  if (typeof input[i] == "object") {
    for (let j = 0; j < input[i].length; j++) {
      count1++;
      if (typeof input[i][j] == "object") {
        for (let k = 0; k < input[i][j].length; k++) {
          count2++;
          // ----
          if (typeof input[i][j][k] == "object") {
            for (let m = 0; m < input[i][j][k].length; m++) {
              count3++;
              if (typeof input[i][j][k][m] == "object") {
                for (let n = 0; n < input[i][j][k][m].length; n++) {
                  count4++;
                  if (typeof input[i][j][k][m][n] == "object") {
                    for (let a = 0; a < input[i][j][k][m].length; a++) {
                      count5++;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
console.log(count + count1 + count2 + count3 + count4 + count5);
