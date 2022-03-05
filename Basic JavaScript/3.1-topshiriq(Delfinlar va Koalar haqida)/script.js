// Delfinlar jamosiga 1-bonus yuzasidan berilgan ballar
let dBonus11 = Number(
  prompt("Delfinlar jamosiga 1-bonusdan 1-o'yin uchun berilgan ballni kiriting")
);
let dBonus12 = Number(
  prompt("Delfinlar jamosiga 1-bonusdan 2-o'yin uchun berilgan ballni kiriting")
);
let dBonus13 = Number(
  prompt("Delfinlar jamosiga 1-bonusdan 3-o'yin uchun berilgan ballni kiriting")
);

// Koalar jamosiga 1-bonus tuzasidan berilgan ballar
let kBonus11 = Number(
  prompt("Koalalar jamosiga 1-bonusdan 1-o'yin uchun berilgan ballni kiriting")
);
let kBonus12 = Number(
  prompt("Koalalar jamosiga 1-bonusdan 2-o'yin uchun berilgan ballni kiriting")
);
let kBonus13 = Number(
  prompt("Koalalar jamosiga 1-bonusdan 3-o'yin uchun berilgan ballni kiriting")
);

// Delfinlar jamosiga 2-bonus yuzasidan berilgan ballar
let dBonus21 = Number(
  prompt("Delfinlar jamosiga 2-bonusdan 1-o'yin uchun berilgan ballni kiriting")
);
let dBonus22 = Number(
  prompt("Delfinlar jamosiga 2-bonusdan 2-o'yin uchun berilgan ballni kiriting")
);
let dBonus23 = Number(
  prompt("Delfinlar jamosiga 2-bonusdan 3-o'yin uchun berilgan ballni kiriting")
);

// Koalar jamosiga 2-bonus tuzasidan berilgan ballar
let kBonus21 = Number(
  prompt("Koalalar jamosiga 2-bonusdan 1-o'yin uchun berilgan ballni kiriting")
);
let kBonus22 = Number(
  prompt("Koalalar jamosiga 2-bonusdan 2-o'yin uchun berilgan ballni kiriting")
);
let kBonus23 = Number(
  prompt("Koalalar jamosiga 2-bonusdan 3-o'yin uchun berilgan ballni kiriting")
);
let sumDelfin;
let sumKoala;
let arfDelfinFirstGame = (dBonus11 + dBonus12 + dBonus13) / 3;
let arfDelfinSecondGAme = (dBonus21 + dBonus22 + dBonus23) / 3;
let arfKoalaFirtsGame = (kBonus11 + kBonus12 + kBonus13) / 3;
let arfKoalaSecondGame = (kBonus21 + kBonus22 + kBonus23) / 3;

if (arfDelfinFirstGame >= 100 && arfDelfinSecondGAme >= 100) {
  sumDelfin = arfDelfinFirstGame + arfKoalaSecondGame;
} else alert("Delfinlar jamosi minimal ballni to'play olishmadi");

if (arfKoalaFirtsGame > 100 && arfKoalaSecondGame >= 100) {
  sumKoala = arfKoalaFirtsGame + arfKoalaSecondGame;
} else alert("Koala jamosi minimal balni to'play olishmadi");

if (sumDelfin > sumKoala) {
  alert("Delfinlar jamosi g'olib bo'ldi");
} else if (sumDelfin < sumKoala) {
  alert("Koalalar jamosi go'lib bo'ldi");
} else alert("O'yin durrang bo'ldi");
