const todaysWinner = {
  prize: "10 000$",
};

const winnerApplicants = {
  "001": {
    name: "Максим",
    age: 25,
  },
  201: {
    name: "Светлана",
    age: 20,
  },
  304: {
    name: "Екатерина",
    age: 35,
  },
};

function getWinner(applicants, winnerObject) {
  let keys = Object.keys(applicants);
  let rand = Math.floor(Math.random() * keys.length);
  let randomKey = keys[rand];
  winnerObject = {
    ...winnerObject,
    ...applicants[randomKey],
  };
  return winnerObject;
}
let result = getWinner(winnerApplicants, todaysWinner);
console.log(result);
