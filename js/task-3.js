const inputEl = document.querySelector("input#name-input");
const spanEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", handleInpInput);

function handleInpInput() {
  if (inputEl.value === "" || inputEl.value.trim() === "") {
    return (spanEl.textContent = "Anonymous");
  } else {
    return (spanEl.textContent = inputEl.value.trim());
  }
}
