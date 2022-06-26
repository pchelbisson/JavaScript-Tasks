Have you ever played the lottery? A lottery is a game in which a winner is randomly determined and given a prize. Now your task will be to develop logic for such a game.

You need to create a getWinner function that takes 2 parameters:

1. applicants. An object where the keys are the numbers of the people to be randomly selected, and the values are the objects of the candidates to win the lottery.
2. winnerObject. This is an object that stores only 1 prize key, which stores the values of the lottery prize.

You need to randomly select a winning number (a random key in the applicants object) and return an object from the getWinner function that will store the properties from the winnerObject and the winner object.