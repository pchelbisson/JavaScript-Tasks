//question answer counters
let correctAnswer = 0;
let incorrectAnswer = 0;

let answer1 = 4;
let userAnswer1 = +prompt("Сколько будет 2 + 2?");

if (userAnswer1 === answer1) {
  correctAnswer++;
  alert("Ответ Верный");
} else {
  incorrectAnswer++;
  alert("Неверный ответ");
}

let answer2 = 4;
let userAnswer2 = +prompt("Сколько будет 2 * 2?");

if (userAnswer2 === answer2) {
  correctAnswer++;
  alert("Ответ верный!");
} else {
  incorrectAnswer++ + 1;
  alert("Неверный ответ!");
}

let answer3 = 1;
let userAnswer3 = +prompt(
  "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
);

if (userAnswer3 === answer3) {
  correctAnswer++;
  alert("Ответ верный!");
} else {
  incorrectAnswer++;
  alert("Неверный ответ!");
}

let answer4 = 12;
let userAnswer4 = +prompt(
  "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
);

if (userAnswer4 === answer4) {
  correctAnswer++;
  alert("Ответ верный!");
} else {
  incorrectAnswer++;
  alert("Неверный ответ!");
}

let answer5 = 6;
let userAnswer5 = +prompt("Сколько будет 2 + 2 * 2?");
userAnswer5 = Number(userAnswer5);

if (userAnswer5 === answer5) {
  correctAnswer++;
  alert("Ответ верный!");
} else {
  incorrectAnswer++;
  alert("Неверный ответ!");
}

alert(
  `Конец теста! Правильные ответы - ${correctAnswer}; Неправильные ответы - ${incorrectAnswer}.`
);
