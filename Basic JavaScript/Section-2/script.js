// let myName = "Valisher";
// let age = 26;
// let job = "Developer";

// let aboutMe = `I am ${myName}, my job is ${job} `;
// console.log(aboutMe);

// console.log(`My name is ${myName}, i'm ${age} years old`);

// console.log("----------");
// age = 20;
// if (age < 7) {
//   console.log("Maktab yoshidan kichik yoshdasan");
// } else if (age >= 7 && age < 18) {
//   console.log("Maktab yoshidasan");
// } else console.log("Sen maktab yoshidan kattasan");

console.log("----------");
// let myAge = prompt("Yoshingizni kiriting");
// let conversion = Number(myAge) + 5;
// console.log(conversion);

// let noConversion = myAge + 5;
// console.log(noConversion);

// console.log("28" * "4" + "8");

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(1));
// console.log(Boolean("valisher"));

// console.log(Boolean(25 == "25"));
// console.log(Boolean(25 === "25"));

// Exirsece-2

// let age = prompt("Yoshingizni kiriting!");
// if (age == 25) {
//   console.log("Sizning yoshingiz 25 da");
// } else console.log(`Yoshingiz ${age}`);

// let year = prompt("Tug'ilgan yilingizni kiriting");
// if (year === 2002) {
//   console.log("Tug'ilgan yilingiz 2002 da");
// } else console.log(`Yilingiz ${year}`);

// Exirsece-3

// let age = prompt("Yoshingizni kiriting!");
// let styde = prompt("Universetutni tugatganmisiz?");

// let yosh = Number(age);
// if (yosh > 25 && styde === "ha") {
//   alert("Sizni ishga olamiz");
// } else if (yosh > 25 && styde === "yoq") {
//   alert("Siz diplomiz yo'q ekan");
// } else if (yosh < 25 && styde === "ha") {
//   alert("Diplomiz bor lekin yoshingiz to'g'ri kelmayabdi");
// } else alert("Siz bizni talablarni hech biriga to'g'ri kelmas ekansiz");

//Exirsece-4
let askAge = Number(prompt("Yoshni kiriting"));
switch (askAge) {
  case 1:
    console.log("Yoshing 1ga teng");
    break;
  case 2:
    console.log("Yoshing 2ga teng");
    break;
  case 3:
    console.log("Yoshing 3ga teng");
    break;
  case 4:
    console.log("Yoshing 4ga teng");
    break;
  default:
    console.log("Hali kiritilmagan");
}

let gender = prompt("Jinsingizni kiriting!");
switch (gender) {
  case "ayol":
    console.log("Ayollar hamjamiyatiga xush kelibsiz");
    break;
  case "erkak":
    console.log("Erkaklar hamjiatiga xush kelibsiz");
    break;
  default:
    console.log("Sizning jinsingiz aniqlanmadi");
    break;
}
