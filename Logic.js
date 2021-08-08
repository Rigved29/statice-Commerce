const testi1 = document.querySelector(".testi1");
const testi2 = document.querySelector(".testi2");
const testi3 = document.querySelector(".testi3");
const btnRight = document.querySelector(".arrow1");
const btnLeft = document.querySelector(".arrow2");
const testi = document.querySelectorAll(".testi");
const button = document.querySelector("#btn");
const inputList = document.querySelectorAll("input");
const navDiv = document.querySelector("#navi");
const hamBurgerBtn = document.querySelector(".hamburger");
console.log(testi);

testi.forEach((s, i) => {
  s.style.transform = `translateX(${i * 150}%)`;
});
let currTesti = 0;
const maxTesti = testi.length;

const gotToSlide = function (slide) {
  testi.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 150}%)`;
  });
};

btnRight.addEventListener("click", function () {
  if (currTesti == maxTesti - 1) {
    currTesti = 0;
  } else {
    currTesti++;
  }
  gotToSlide(currTesti);
});

btnLeft.addEventListener("click", function () {
  if (currTesti == 0) {
    currTesti = maxTesti - 1;
  } else {
    currTesti--;
  }
  gotToSlide(currTesti);
});

button.addEventListener("click", function () {
  console.log(inputList);
  inputList.forEach((el) => {
    console.log(el.value);

    el.value = "";
  });
});
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
