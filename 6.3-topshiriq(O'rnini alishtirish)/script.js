let son1 = Number(prompt("1-sonni kiriting"));
let son2 = Number(prompt("2-sonni kiriting"));

let origin;

function aralashtir(son1, son2) {
  origin = son1;
  son1 = son2;
  son2 = origin;
  return `1-son ${son1}, 2-son ${son2}`;
}

alert(aralashtir(son1, son2));
