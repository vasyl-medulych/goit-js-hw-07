const btnElem = document.querySelector("button.change-color");
const spanElem = document.querySelector("span.color");
const bodyElem = document.querySelector("body");

btnElem.addEventListener("click", handleBtnClick);

function handleBtnClick() {
  const color = getRandomHexColor();
  spanElem.textContent = color;
  bodyElem.style.background = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
