let son = 123;
let x, y, z;
x = son % 10;
z = Math.trunc(son / 100);
y = Math.trunc((son % 100) / 10);

console.log(x, y, z);
console.log(String(x) + String(y) + String(z));
console.log(String(y) + String(z) + String(x));
