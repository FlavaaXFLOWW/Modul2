let currentInput = "";

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("result").value = currentInput;
}

function clearAll() {
  currentInput = "";
  document.getElementById("result").value = "";
}

function clearEntry() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById("result").value = currentInput;
}

function calculateResult() {
  try {
    currentInput = currentInput.replace("^", "**");
    let result = eval(currentInput);
    document.getElementById("result").value = result;
    currentInput = result.toString();
  } catch (e) {
    document.getElementById("result").value = "Error";
    currentInput = "";
  }
}
