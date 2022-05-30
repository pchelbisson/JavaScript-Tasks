let sum = 0;
let getSumOfNumbers = (number, type) => {
  for (let i = 0; i <= number; i++) {
    if (type === "") {
      sum = sum + i;
    } else if (type === "odd" && i % 2 == 1) {
      sum += i;
    } else if (type === "even" && i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
};

let result = getSumOfNumbers(1000, "even");
console.log(result);
