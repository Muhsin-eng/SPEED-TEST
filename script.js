const textToType = document.getElementById("text-to-type").innerText;
const input = document.getElementById("input");
const result = document.getElementById("result");
const startBtn = document.getElementById("start-btn");

let startTime;

startBtn.addEventListener("click", () => {
  input.value = "";
  result.textContent = "";
  input.disabled = false;
  input.focus();
  startTime = Date.now();
});

input.addEventListener("input", () => {
  if (input.value === textToType) {
    let endTime = Date.now();
    let timeTaken = (endTime - startTime) / 1000;
    let wordCount = textToType.split(" ").length;
    let wpm = Math.round((wordCount / timeTaken) * 60);
    result.textContent = `✅ You typed it in ${timeTaken.toFixed(2)} seconds (${wpm} WPM)`;
    input.disabled = true;
  }
});
