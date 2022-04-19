class Time {
  constructor(soat, minut, sana, oy, yil) {
    this.soat = soat;
    this.minut = minut;
    this.sana = sana;
    this.oy = oy;
    this.yil = yil;
  }

  get olElement() {
    return [this.soat, this.minut, this.sana, this.oy, this.yil];
  }
  get olOy() {
    return this.oy;
  }
}

let setTime = setInterval(() => {
  vaqtniOlish();
}, 1000);

function vaqtniOlish() {
  const nowTime = new Date();
  let hour = nowTime.getHours();
  let minute = nowTime.getMinutes();
  let date = nowTime.getDate();
  let month = nowTime.getMonth();
  let year = nowTime.getFullYear();

  return [hour, minute, date, month, year];
}

console.log(vaqtniOlish());

const child = new Time(...vaqtniOlish());
console.log(child.oy);
console.log(child.yil);
console.log(child.olOy);

const arr = child.olElement;
console.log(arr);
console.log(arr[2]);
