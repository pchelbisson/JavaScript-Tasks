//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

let result = confirmEnding("Bastian", "n");

console.log(result); //true
