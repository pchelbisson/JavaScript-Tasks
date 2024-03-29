function sumPrimes(num) {
  // check
  function isPrimeNum(num) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrimeNum(i)) sum += i;
  }
  return sum;
}

console.log(sumPrimes(10)); // 17
