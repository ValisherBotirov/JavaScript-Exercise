let son1 = Number(prompt("1-sonni kiriting"));
let son2 = Number(prompt("2-sonni kiriting"));
let son3 = Number(prompt("3-sonni kiriting"));

function katta(x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else if (z > x && z > y) {
    return z;
  } else return "Sonlar teng";
}

alert(katta(son1, son2, son3));
