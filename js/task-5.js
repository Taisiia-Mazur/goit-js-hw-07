const bodyColor = document.querySelector("body");
const btn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
btn.addEventListener("click", pushBtn);

function pushBtn(event) {
  let newColor = getRandomHexColor();
  bodyColor.style.backgroundColor = newColor;
  textColor.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
