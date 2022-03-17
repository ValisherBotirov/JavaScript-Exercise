let a = [7, 2, 1, 6, 3, 4, 5, 8, 9, 10];
let n = 2;
let arr = [];
for (let i = 1; i < a.length; i++) {
  if (i % n == 0) {
    console.log(a[i]);
  }
}
