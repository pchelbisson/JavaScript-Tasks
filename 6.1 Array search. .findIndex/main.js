function indexOfCoffe(array) {
  let coffeeName = prompt("Поиск кофе по названию:").trim();
  //convert all letters except the first to lowercase
  let partOfName = coffeeName.substring(1).toLowerCase();
  //convert first letter to uppercase
  let firstLetterOfName = coffeeName.substring(-20, 1).toUpperCase();
  //concate
  let newCoffeeName = firstLetterOfName + partOfName;
  //compare the entered data with the data from the array, if they match, then save its index
  let coffeeIndex = array.findIndex((coffee) => coffee === newCoffeeName);
  if (coffeeIndex !== -1) {
    alert(
      `Держите ваш любимый кофе ${newCoffeeName}. Он ${
        coffeeIndex + 1
      } по популярности в нашей кофейне.`
    );
  } else {
    alert("К сожалению, такого вида кофе нет в наличии");
  }
  return;
}

indexOfCoffe(["Latte", "Cappuccino", "Americano"]);
