const controlBox = document.querySelector("#controls");
const createBox = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");




btnCreate.addEventListener("click", returnNumber);
btnDestroy.addEventListener("click", destroyBoxes);

function returnNumber(event) {
  let number = controlBox.firstElementChild.value;
  if (number >= 1 && number <= 100) {
    createBoxes(number);
  }
  controlBox.firstElementChild.value = "";
}

function createBoxes(amount) {
  let newBox = [];
  for (let i = 0; i < amount; i += 1) {
    let size = 30 + i*10;
    const div = `<div class="box" style="display: block; margin-right: 44px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    newBox.push(div);
  }
  createBox.innerHTML = newBox.join("");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  controlBox.firstElementChild.value = "";
  createBox.innerHTML = "";
}
