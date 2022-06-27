function getDaysBeforeBirthday(nextBirthdayDate) {
  let now = new Date();
  // set next birthday date
  nextBirthdayDate = new Date(2023, 4, 2);
  //count the difference (milliseconds)
  let diff = nextBirthdayDate - now;
  //translate into days
  return Math.floor(diff / 86400000);
}

let result = getDaysBeforeBirthday();
console.log(result);
