// 1-masala
// let son = -5;
// if (son > 0) {
//   son++;
//   console.log(son);
// } else console.log(son);

// 2-masala
// let son = 5;
// if (son > 0) {
//   son++;
//   console.log(son);
// } else {
//   son -= 2;
//   console.log(son);
// }

// 3-masala
// let son = 0;
// if (son > 0) {
//   son++;
// } else if (son < 0) {
//   son -= 2;
// } else son = 10;
// console.log(son);

// 4-masala
// let arr = [10, -5, 25, -5, -4];
// let count = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     count++;
//   }
// }
// console.log(count);

// =======Dars davomidagi amaliyotchalar=============
// let string = "Valisher";
// console.log(string.indexOf("a"));
// console.log(string.lastIndexOf("a"));
// console.log(string.startsWith("V"));
// console.log(string.endsWith("r"));
// console.log(string.slice(-4, 9));
// let str = "Assalom TATU";
// console.log(str.indexOf("sal"));
// console.log(str.indexOf("T"));
// console.log(str.substring(2, 5));
// console.log(str.substring(8, 12));
// console.log(str.substring(2, 5) + " " + str.substring(8, 12));
// let kattaHarf = str.toLocaleUpperCase();
// console.log(kattaHarf);
// let myStr1 = "Sa";
// let myStr2 = "lom";
// let full = " ";
// full = full.concat(myStr1, myStr2);
// console.log(full);
// let str = "  va lish sher bo ti rov ";
// console.log(str.trim());
// console.log(str.trimStart());

// let str = "unique";
// // console.log(str.charAt(4));
// // console.log(str.length);
// str = str.toUpperCase();
// let arr = [];
// arr.push(str.split(""));
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "Q") {
//     arr2.push(arr[i]);
//   }
//   console.log(arr[i]);
// }
// console.log(arr, arr2);

// let myStr = "meyakshanba";
// // let myArr = [];

// console.log(myStr.replace("yak"));
// let str = "salom";
// console.log(str.sub);
// =========================================
// 3-masala
// ========================================

// let a = ["va", "al", 25, 45, "me", 2];
// let arr = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] < 3) {
//     arr.push(a[i]);
//   }
// }
// console.log(arr);
// ======================
// let b = "assalomu alaykum hurmatli yoshlar";
// let a = "a";
// let count = 0;
// for (let i = 0; i < b.length; i++) {
//   if (b[i] === a) {
//     count++;
//   }
// }
// console.log(count);

// let c = 5.2;
// console.log(Math.trunc(c));

// let v = ["a", "b", "c", "d", "v"];
// let g = ["a", "d"];
// console.log(Boolean(v == g));

// let soz = 32;
// console.log(soz.split(""));

// ==============================================================
//  String Metodsga oid amaliyot
// ===============================================
// let str = "Valishera Botirov";
// let str2 = "salom";
// let int = 123;
// let x = str.indexOf("a");
// console.log(x);
// let y = str.lastIndexOf("a");
// let x = String(int);
// console.log(x.indexOf(3));
// console.log(y);
// let x = str.startsWith("V");
// let y = str.endsWith("ov");
// console.log(y);
// console.log(str.slice(-3));
// console.log(str.substring(5, 1));
// console.log(str.concat(str2, "aka"));
// str = str.concat(str2);
// console.log(str);
// console.log(str2.slice(str2.length - 3));
// let string = String(int);
// console.log(string.split(""));
// console.log(str2.split("a"));
// let x = str2.split("");
// console.log(x);
let a = "chesk";
let b = "c";
function myFunction(a, b) {
  let result;
  let arr = a.split("");
  for (let i = 0; i < arr.length; i++) {
    if (a[i] === b) {
      result = b + a;
    } else result = a + b;
  }
  return result;
}
console.log(myFunction(a, b));
