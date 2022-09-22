function chunkArrayInGroups(arr, size) {
  let newArr = [];;
  for  (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);;
    newArr.push(chunk);
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

