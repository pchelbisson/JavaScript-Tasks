function mutation(arr) {
  // convert to a string, all words to lower case, then to an array (you can use .map)
  let str = arr.join(" ").toLowerCase().split(" ");
  let target = str[0];
  let test = str[1];
  for (let i = 0; i < test.length; i++) {
    //knowing that indexOf will show -1 if false...
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
