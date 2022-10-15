function rot13(str) {
  let alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "-",
    "_",
    ".",
    "&",
    "?",
    "!",
    "@",
    "#",
    "/",
  ];

  let alphabets13 = [
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    " ",
    "-",
    "_",
    ".",
    "&",
    "?",
    "!",
    "@",
    "#",
    "/",
  ];

  let resultStr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alphabets.length; j++) {
      if (str[i] === alphabets[j]) {
        resultStr.push(alphabets13[j]);
      }
    }
  }
  return resultStr.join("");
}

console.log(rot13("SERR CVMMN!")); // FREE PIZZA!
