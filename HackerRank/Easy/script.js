let ball = 78;
if (ball < 37 || ball % 5 == 0) {
  console.log(ball);
} else if (ball > 37) {
  for (let i = ball; i <= 100; i++) {
    if (i % 5 == 0) {
      let x = i - ball;
      if (x < 3) {
        console.log(i);
        break;
      } else console.log(ball);
      break;
    }
  }
}
