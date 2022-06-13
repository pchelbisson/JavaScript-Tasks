const goals = [1, 1, 9, 3, 2, 1, 5];
// array without automatic defeats
let goalsWithoutLose = goals.filter((goal) => goal > 0);
// calculate the index of games with the minimum number of goals scored
let indexOfMinGoals = Array.from(goalsWithoutLose.entries())
  .filter((i) => i[1] === Math.min(...goalsWithoutLose))
  .map((i) => i[0]);
// change the array so that the index starts at 1 instead of 0
let mappedIndex = indexOfMinGoals.map((index) => index + 1);
// calculate the sum of all goals in the array
let sumOfGoals = goalsWithoutLose.reduce((acc, num) => {
  return acc + num;
}, 0);
// calculate the average number of goals
let averageOfGoals = sumOfGoals / goals.length;
// sort in ascending order
goalsWithoutLose.sort((a, b) => {
  return a - b;
});
// выводим полученные значения
alert(
  `Самый результативный матч был под номером ${
    goals.indexOf(Math.max.apply(null, goals)) + 1
  }. В нем было забито ${Math.max(...goals)} гол(ов).`
);

alert(
  `Самые не результативные матчи были под номерами ${mappedIndex.join(
    ", "
  )}. В каждом из них было забито по ${Math.min(...goalsWithoutLose)} мячу(а).`
);

alert(`Общее количество голов за сезон равно ${sumOfGoals}`);

if (goals.includes(-1)) {
  alert("Были автоматические поражения: да");
} else {
  alert("Были автоматические поражения: нет");
}

alert(`Среднее количество голов за матч равно ${averageOfGoals.toFixed(2)}`);
alert(`${goalsWithoutLose.join(", ")}`);
