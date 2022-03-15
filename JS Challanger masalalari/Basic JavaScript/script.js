// 22-masala
// function solve(a, b) {
//   let arr = a.split("");
//   let newArr = [];
//   let result = [];
//   let count = 0;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     count++;
//     newArr.push(arr[i]);
//     if (count == 3) {
//       newArr.push(b);
//       count = 0;
//     }
//   }
//   for (let i = newArr.length - 1; i >= 0; i--) {
//     result.push(newArr[i]);
//   }
//   let javob = result.join("");
//   console.log(javob);
// }
// solve("1234567", ".");

// 23-masala
// let str = "bnchmf";
// let alf = "abcdefghijklmnopqrstuvwxyz";
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//   let x = alf.indexOf(str[i]);
//   arr.push(alf[x + 1]);
// }
// let rusult = arr.join("");
// console.log(rusult);

// Sizga string ko'rinishida harflar ketma-ketligi beriladi.Sizning vazifangiz bu harflar ketma-ketligini ingiliz alifbosida bitta keyin kelgan harf bilan alishtirib to'g'ri so'zni hosil qilib berishingiz kerak.Masalan "bnchmf" kelsa "coding" so'zini qaytarish kerak

// tub son masalasi
// let a = 30;
// let tubSonArr = [];
// let count = 0;
// for (let i = 0; i <= a; i++) {
//   count = 0;
//   for (let j = 0; j <= i; j++) {
//     if (i % j == 0) {
//       count++;
//     }
//   }
//   if (count == 2) {
//     // console.log(i);
//     tubSonArr.push(i);
//   }
// }
// let sortArr = [];

// sortArr = tubSonArr.sort((a, b) => a - b);
// console.log(tubSonArr);

// String metodlariga oid masala
// function myFunc(a, b) {
//   a = a[0].split("%").join("").toUpperCase() + a.slice(1).split("%").join("");
//   b = b.split("%").join("").split("").reverse().join("");
//   return a + b;
// }
// console.log(myFunc("java", "tpi%rcs"));

// 17-masala
function myFunction(a, b) {
  a = a.split(" ");
  if (b.includes(a)) {
    return b + a;
  } else return a + b;
}
console.log(myFunction(" think, therefore I am", "I"));
