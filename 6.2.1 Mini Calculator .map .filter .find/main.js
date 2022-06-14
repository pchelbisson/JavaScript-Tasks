function calculate(array) {
  let mathResult = "Ошибка, операция невозможна";
  //looking for and saving a mathematical symbol in the original array
  let mathSymbol = array.find((symbol) => {
    return (
      symbol === "=" ||
      symbol === "+" ||
      symbol === "-" ||
      symbol === "<" ||
      symbol === ">" ||
      symbol === "*" ||
      symbol === "/"
    );
  });
  //convert all numeric values to data type Number
  let mappedArr = array.map((num) => +num);
  //filter the numbers into a new array
  let result = mappedArr.filter((num) => {
    return +num;
  });
  //if the array has less than 2 numbers, then we display an error message
  if (result.length < 2) {
    return console.log("Не хватает второго числа");
  }
  //insert a mathematical symbol into an array with numbers in the middle. (it was possible to skip this step, and carry out mathematical operations without it. but for the sake of clarity let's leave it here)
  result.splice(1, 0, mathSymbol);
  switch (result[1]) {
    case "+":
      mathResult = result[0] + result[2];
      break;
    case "-":
      mathResult = result[0] - result[2];
      break;
    case "*":
      mathResult = result[0] * result[2];
      break;
    case "/":
      mathResult = result[0] / result[2];
      break;
    case ">":
      mathResult = result[0] > result[2];
      break;
    case "<":
      mathResult = result[0] < result[2];
      break;
    case "=":
      mathResult = result[0] === result[2];
      break;
  }
  return console.log(mathResult);
}

calculate(["100", "df", "sfsd", "-", 200, "sdsd"]); // -100
calculate(["200", "-", 200, "sdsd"]); // 0
calculate(["df", "sfsd", "-", 200, "sdsd"]); // Не хватает второго числа
calculate(["100", "df", "sfsd", "-", 200, "sdsd"]); // -100
calculate([1000, "=", 200, "sdsd"]); // false
