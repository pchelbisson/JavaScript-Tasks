const numbers = [10, 4, 100, -5, 54, 2];

function sumOfCube(array) {
  let sum = 0;
  // cube each element
  newArr = array.map((num) => {
    return num ** 3;
  });
  // .reduce method
  sum = newArr.reduce((acc, num) => {
    return acc + num;
  }, 0);

  /*
  // for of loop
  for (let num of newArr) {
    sum += num;
  }
  */
  /*
  // .forEach method
  newArr.forEach((num) => {
    return (sum += num);
  });
  */
  /*
  // for loop
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  */
  return sum;
}

console.log(sumOfCube(numbers));
