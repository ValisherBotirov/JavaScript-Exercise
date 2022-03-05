// malumotlar-1
let delBal1 = Number(prompt("Delfinlar uchun 1-ballni kiriting  (44)"));
let delBal2 = Number(prompt("Delfinlar uchun 2-ballni kiriting  (23)"));
let delBAl3 = Number(prompt("Delfinlar uchun 3-ballni kiriting  (71)"));

let koaBal1 = Number(prompt("Koalalar uchun 1-ballni kiriting  (65)"));
let koaBal2 = Number(prompt("Koalalar uchun 2-ballni kiriting  (54)"));
let koaBal3 = Number(prompt("Koalalar uchun 3-ballni kiriting  (49)"));

let calcAverage = (qiymat1, qiymat2, qiymat3) => {
  return (qiymat1 + qiymat2 + qiymat3) / 3;
};

// console.log(calcAverage(delBal1, delBal2, delBAl3));

let avgDolhins1 = calcAverage(delBal1, delBal2, delBAl3);
let avgKoalas1 = calcAverage(koaBal1, koaBal2, koaBal3);

console.log(avgDolhins1, avgKoalas1);

let checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins / 2 >= avgKoalas) {
    console.log(`Delfinlar g'alaba qozondi (${avgDolhins}, ${avgKoalas})`);
  } else if (avgKoalas / 2 >= avgDolhins) {
    console.log(
      `Koalalar jamosi g'alaba qozondi (${avgKoalas}, ${avgDolhins})`
    );
  } else console.log("Hech kim g'alaba qozonmadi!");
};

checkWinner(avgDolhins1, avgKoalas1);
