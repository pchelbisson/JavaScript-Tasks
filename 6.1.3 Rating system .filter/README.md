TASK:

Coffee shop rating system.

The last thing Alexei wants to see on his website is a rating system for the coffee shop. The owner needs to know the opinion of customers in order to correct shortcomings in his work.

First, you need to create an empty clientsEstimations array that will hold the coffee shop's customer ratings. Also create an askClientToGiveEstimation function that should display the message “How do you rate our coffee shop from 1 to 10?” via prompt. The end result that the user enters must be a number data type. If a number from 1 to 10 was entered, then add this estimate to the clientsEstimations array, otherwise do nothing.

To add estimates, call the askClientToGiveEstimation function 5 times. It is recommended to do this through a for loop.

After the ratings are added, you need to count the positive and negative ratings. A positive estimate is a number greater than 5, a negative estimate is a number less than 5 or equal to 5. Display the alert message “Total positive estimates: goodEstimations; Total negative ratings: notGoodEstimations”, where goodEstimations is the number of positive ratings and notGoodEstimations is the number of negative ratings.

Terms:
1. The solution should use the filter array method.