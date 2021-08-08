const button = document.querySelector("#btn");
const inputList = document.querySelectorAll("input");
const navDiv = document.querySelector("#navi");
const hamBurgerBtn = document.querySelector(".hamburger");

let state = 0;
hamBurgerBtn.addEventListener("click", function () {
  if (state === 0) {
    navDiv.classList.remove("navc");
    navDiv.classList.add("show");
    state++;
  } else {
    navDiv.classList.remove("show");
    navDiv.classList.add("navc");
    state--;
  }
});
