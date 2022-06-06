function getSumOfSequence(number) {
  let sum = 0;
  let arr = [];
  // create an array from 1 to number
  for (let i = 1; i <= number; i++) {
    // [1, 2, 3, 4, 5]
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    //find the sum of the first and last elements of the final array
    sum = arr[0] + arr.length - 1; // 1 and 5
  }
  return sum; //6
}

console.log(getSumOfSequence(5));
