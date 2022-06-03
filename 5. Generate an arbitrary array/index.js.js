function randomArray(count, n, m) {
  let arr = [];
  let min = Math.min(m, n);
  let max = Math.max(m, n);
  for (let i = 0; i < count; ++i) {
    arr.push(Math.round(Math.random() * (max - min)) + min);
  }
  return arr;
}

randomArray(10, 0, 100); // print an array of 10 random numbers from 10 to 100
randomArray(2, 1, 5); // print an array of 2 random numbers from 1 to 5
