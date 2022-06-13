let clientsEstimations = [];

function askClientToGiveEstimation() {
  let result = +prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
  if (result >= 1 && result <= 10) {
    clientsEstimations.push(result);
  }
}

for (i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}
let goodEstimations = clientsEstimations.filter((estimation) => estimation > 5);
let notGoodEstimations = clientsEstimations.filter(
  (estimation) => estimation <= 5
);
alert(
  `Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`
);
