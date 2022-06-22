function getKiller(suspectInfo, deadPeople) {
  for (let key in suspectInfo) {
    if (deadPeople.every((elem) => suspectInfo[key].includes(elem))) return key;
  }
}

getKiller(
  {
    Brad: [],
    Megan: ["Ben", "Kevin"],
    Finn: [],
  },
  ["Ben"]
); //Megan
