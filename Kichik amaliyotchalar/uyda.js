"use strict";
let aboutMe = [
  "Valisher",
  "Botirov",
  20,
  "Tashkent",
  "TATU",
  "TUIT",
  ["1-kurs", "FullStact Developer"],
];
console.log(aboutMe);
console.log(aboutMe[1]);
aboutMe[2] = 21;
console.log(aboutMe);
console.log(aboutMe[0], aboutMe[1]);
console.log(aboutMe.length);
console.log(aboutMe[6][1]);
aboutMe.push("Developer");
console.log(aboutMe);

let aboutObj = {
  firsName: "Valisher",
  lastName: "Botirov",
  nowYear: 2022,
  birthYear: 2002,
  secondBirthYear: 2004,
  age: function () {
    return this.nowYear - this.birthYear;
  },
};

console.log(aboutObj);
console.log(aboutObj.firsName, aboutObj.lastName);
console.log(aboutObj.age());
