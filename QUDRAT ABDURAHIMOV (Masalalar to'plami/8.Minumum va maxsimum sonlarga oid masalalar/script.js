// 1-masala
let m = 6;
const arrA = [1, 2, 3, 4, 5, 6];
const arrB = [1, 2, 3, 4, 5, 6];
let max = arrA[0] * arrB[0];
for (let i = 1; i <= m; i++) {
  if (arrA[i] * arrB[i] > max) {
    max = arrA[i] * arrB[i];
  }
}
console.log(max);
