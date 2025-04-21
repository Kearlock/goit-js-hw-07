function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const spanWithColor = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

function currentColor() {
  spanWithColor.textContent = getComputedStyle(body).backgroundColor;
}

currentColor();

buttonChangeColor.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  currentColor();
});
