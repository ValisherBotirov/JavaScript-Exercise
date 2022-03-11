let kod = Number(prompt("Parolni kiriting!"));

let clickMe = {
  name: "Valisher Botirov",
  totalSum: 3000,
  password: 1218,
  id: 2002,
};

let you = {
  name: "Bobosher Botirov",
  totalSum: 1000,
  password: 0907,
  id: 1998,
};

if (kod == clickMe.password) {
  console.log(
    `Karta nomi ${clickMe.name} xozirgi summa ${clickMe.totalSum} dollar`
  );
} else if (kod == you.password) {
  console.log(`Karta nomi ${you.name} xozirgi summa ${you.totalSum}dollar`);
} else console.log("Bunaqa foydalanuvchi tarmoqda mavjud emas!");
