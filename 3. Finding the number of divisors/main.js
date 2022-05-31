function getDivisors(number = 1) {
  if (!Number.isInteger(number) || number < 1) {
    alert("number должен быть целым числом и больше нуля");
    return;
  }
  /*Easier to iterate over divisors from 1 to half a number
  (round down)
  and then the number itself is considered a divisor.*/
  let half = Math.floor(number / 2);
  let count = 1;
  for (let i = 1; i <= half; i++) {
    if (!(number % i)) {
      count++;
    }
  }
  return count;
}

console.log(getDivisors(5)); // 2 : 1,5
