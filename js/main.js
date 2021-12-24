// All Selectors
let userInput = document.getElementById("userString");
const btnSubmit = document.getElementById("btnSubmit");
const btnClear = document.getElementById("btnClear");
const alertBox = document.getElementById("alert");
const message = document.getElementById("message");

// Event Listener
btnSubmit.addEventListener("click", reverseAstring);
btnClear.addEventListener("click", startOver);

// The function to reverse the string
function reverseAstring() {
  const input = userInput.value;
  let stringInReverse = "";

  for (let i = input.length - 1; i >= 0; i--) {
    stringInReverse += input[i];
  }

  message.innerHTML = stringInReverse;
  alertBox.classList.remove("invisible");
}

// The function to start over
function startOver() {
  message.innerHTML = "";
  alertBox.classList.add("invisible");
  userInput.value = "";
}
