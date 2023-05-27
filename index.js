let counterEl = document.getElementById("counter");
let increaseEl = document.getElementById("increase");
let resetEl = document.getElementById("reset");
let deCreaseEl = document.getElementById("deCrease");
increaseEl.onclick = function () {
  let counterValue = parseInt(counterEl.textContent);
  counterEl.innerText = counterValue + 1;
};
deCreaseEl.onclick = function () {
  let counterValue = parseInt(counterEl.textContent);
  counterEl.innerText = counterValue - 1;
};
resetEl.onclick = function () {
  counterEl.innerHTML = 0;
};
