function diffArray(arr1, arr2) {
  // Concatenate both arrays, unique values will only appear once, so indexOf() will be the same as lastIndexOf().
  const newArr = [...arr1, ...arr2];
  return newArr.filter(
    (val, index, arr) => arr.indexOf(val) === arr.lastIndexOf(val)
  );
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // 4
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
); // pink wool
