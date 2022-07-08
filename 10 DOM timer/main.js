(function () {
  let input = document.querySelector(".input-num");
  let button = document.querySelector(".button");
  let timer = document.querySelector(".timer");
  let current = 0;
  let time;

  function startTime() {
    timer.textContent = --current;
    if (current <= 0) {
      time = clearInterval(time);
    }
  }

  function onClick() {
    time = clearInterval(time);
    current = +input.value;
    if (current) {
      timer.textContent = current;
      time = setInterval(startTime, 1000);
    }
  }

  button.addEventListener("click", onClick);
})();
