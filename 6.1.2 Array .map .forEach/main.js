const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];
let updatePrices = prices.map((price) => price + 0.5);
coffees.forEach((elem, index) =>
  alert(`Кофе ${elem} теперь стоит ${updatePrices[index]}`)
);
