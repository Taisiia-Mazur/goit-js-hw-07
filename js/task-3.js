const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
inputText.addEventListener("input", handlerInput);


function handlerInput(event) {
  let text = event.currentTarget.value.trim();

  if (text === "") {
    outputText.textContent = "Anonymous";
  } else {
    outputText.textContent = text;
  }
}
