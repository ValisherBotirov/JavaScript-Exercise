let k = 258;
let x;
x = k % 7;
switch (x) {
  case 0:
    console.log("Yakshanba");
    break;
  case 1:
    console.log("Dushanba");
    break;
  case 2:
    console.log("Seshanba");
    break;
  case 3:
    console.log("Chorshanba");
    break;
  case 4:
    console.log("Payshanba");
    break;
  case 5:
    console.log("Juma");
    break;
  case 6:
    console.log("Shanba");
    break;
}

console.log(Boolean(k % 2 !== 0));
