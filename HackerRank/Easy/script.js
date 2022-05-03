// let ball = 78;
// if (ball < 37 || ball % 5 == 0) {
//   console.log(ball);
// } else if (ball > 37) {
//   for (let i = ball; i <= 100; i++) {
//     if (i % 5 == 0) {
//       let x = i - ball;
//       if (x < 3) {
//         console.log(i);
//         break;
//       } else console.log(ball);
//       break;
//     }
//   }
// }

// 2-objni valusini 1-objga berish

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// for (let i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
//   console.log(arr1[i], arr2[j]);
// }

let obj1 = { name: "Valisher", age: 20, job: "fronted" };
let aylan1 = Object.entries(obj1);
let obj2 = { name: "Azizjon", age: 19, job: "backend" };
let aylan2 = Object.entries(obj2);

for (let i = 0, j = 0; i < aylan1.length, j < aylan2.length; i++, j++) {
  // console.log(aylan1[i][1], aylan2[j][1]);
  console.log(aylan1[j][0], aylan2[i][1]);
  console.log(aylan2[i][0], aylan1[j][1]);
}
