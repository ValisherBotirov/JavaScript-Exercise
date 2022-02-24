let son1 = Number(prompt("1-sonni kiriting"));
let son2 = Number(prompt("2-sonni kiriting"));
let ishora = prompt("Qaysi ishorani tanlaysiz (+ , - , / , *)");

function calc(ishora, x, y) {
  switch (ishora) {
    case "+":
      return x + y;
      break;
    case "-":
      return x - y;
      break;
    case "*":
      return x * y;
      break;
    case "/":
      return x / y;
      break;
  }
}

let result = calc(ishora, son1, son2);
alert(result);
