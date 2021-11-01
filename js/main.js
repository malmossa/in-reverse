// All Selectors
const userInput = document.getElementById("userString");
const btnSubmit = document.getElementById("btnSubmit");
const alertBox = document.getElementById("alert");
const message = document.getElementById("message");

// Event Listener
btnSubmit.addEventListener("click", reverseAstring);

function reverseAstring() {
  const input = userInput.value;
  let stringInReverse = "";

  for (let i = input.length - 1; i >= 0; i--) {
    stringInReverse += input[i];
  }

  message.innerHTML = stringInReverse;
  alertBox.classList.remove("invisible");
}
