document.querySelector(".message").textContent = "Men o'ylagan sonni toping";

let randomNum = Math.trunc(Math.random() * 20 + 1);
let kiruvchiMalumot;
let ball = 20;

// document.querySelector(".number").textContent = randomNum;

// document.querySelector(".guess").value = randomNum;

document.querySelector(".check").addEventListener("click", function () {
  kiruvchiMalumot = Number(document.querySelector(".guess").value);
  // document.querySelector(".number").textContent = kiruvchiMalumot;
  if (kiruvchiMalumot > randomNum) {
    document.querySelector(".message").textContent = "Katta ason kiritdingiz";
  } else if (kiruvchiMalumot < randomNum) {
    document.querySelector(".message").textContent = "Kichik son kiritdingiz";
  } else {
    document.querySelector(".message").textContent = "Urraa to'gri topdiz";
    document.querySelector(".number").textContent = randomNum;
  }
});

document.addEventListener("keydown", function (e) {
  if (ball !== 0) {
    if (e.key == "Enter") {
      kiruvchiMalumot = Number(document.querySelector(".guess").value);
      // document.querySelector(".number").textContent = kiruvchiMalumot;

      if (kiruvchiMalumot > randomNum) {
        document.querySelector(".message").textContent =
          "Katta ason kiritdingiz";
        ball--;
        document.querySelector(".score").textContent = ball;
        if (ball == 0) {
          document.querySelector(".label-score").textContent =
            "Urunishlariz tugadi";
          document.querySelector("h1").textContent = "Uyin tugadi afsus";
          document.querySelector("body").style.backgroundColor = "red";
          document.querySelector(".back").style.display = "block";
          document.querySelector(".message").textContent = "O'yin tugadi!";
        }
      } else if (kiruvchiMalumot < randomNum) {
        document.querySelector(".message").textContent =
          "Kichik son kiritdingiz";
        ball--;
        document.querySelector(".score").textContent = ball;
        if (ball == 0) {
          document.querySelector(".label-score").textContent =
            "Urunishlariz tugadi";
          document.querySelector("h1").textContent = "Uyin tugadi afsus";
          document.querySelector("body").style.backgroundColor = "red";
          document.querySelector(".back").style.display = "block";
          document.querySelector(".message").textContent = "O'yin tugadi!";
        }
      } else {
        document.querySelector(".message").textContent = "Urraa to'gri topdiz";
        document.querySelector(".number").textContent = randomNum;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector("h1").textContent = "To'g'ri topdingiz qoyil!!!";
        document.querySelector("h1").style.color = "red";
        document.querySelector(".number").style.borderRadius = "50%";
        document.querySelector(".highscore").textContent = ball;
      }
    }
  }
});

document.querySelector(".back").addEventListener("click", function () {
  ball = 20;
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector("h1").textContent = "Men o'ylagan raqamni top!";

  document.querySelector(".message").textContent = "Topish jarayoni...";

  document.querySelector(".label-score").textContent = `💯 Ball: ${ball}`;

  document.querySelector(".highscore").textContent = 0;
});
