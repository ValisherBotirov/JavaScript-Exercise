let kattaTomoni = 19;
let kichikTomoni = 9;
let kvadratTomoni = 4;
let x, y;

x = Math.trunc(kattaTomoni / kvadratTomoni);
y = Math.trunc(kichikTomoni / kvadratTomoni);

let kvadratchalarSoni = x * y;
console.log(kvadratchalarSoni);

let qolganYuza =
  kattaTomoni * kichikTomoni - kvadratTomoni ** 2 * kvadratchalarSoni;
console.log(`Qolgan yuza ${qolganYuza}`);
