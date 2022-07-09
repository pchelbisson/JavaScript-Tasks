(function () {
  let input = document.createElement("input");
  let h2 = document.createElement("h2");
  input.classList.add("input");
  h2.classList.add("title");
  document.body.append(input);
  document.body.append(h2);
  input = document.querySelector(".input");
  h2 = document.querySelector(".title");

  function enteringText() {
    h2.textContent = input.value;
  }

  input.addEventListener("input", (e) => {
    e.preventDefault();
    setTimeout(enteringText, 300);
  });
})();
