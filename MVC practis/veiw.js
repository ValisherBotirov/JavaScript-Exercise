export class Obj {
  btn = document.querySelector(".btn");
  input = document.querySelector(".text");

  // getText() {
  //   console.log(this.input.value);
  // }

  clickBtn() {
    this.btn.addEventListener("click", function () {
      console.log(this.input.value);
    });
  }
}

export default new Obj();
