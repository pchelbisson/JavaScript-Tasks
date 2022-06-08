TASK:

Imagine that you have a friend, Alexei, who owns a coffee shop. He wants to make a website for this coffee shop so that people can order coffee delivered to their homes. The most important feature that Alexey wants to see is the search for coffee by name. Your friend asks you to help him develop a website.
Initially, you have an array of coffees, which stores all types of coffee that Alexey has in his coffee shop. Drinks are distributed in order of popularity among customers. Those. “Latte” coffee is the most popular.

With the prompt function, you need to ask for the name of the coffee. Pass the message “Search coffee by name:” to prompt. Store the value that the user entered into the coffeeName variable.

If the user-entered coffee name exists, then display a message with alert “Keep your favorite coffee coffee. It is number-th most popular in our coffee shop.”, where coffee is the name of the found coffee, number is the number of the found coffee in the coffees array. If no coffee was found, then display the message “Unfortunately, this type of coffee is not available”.

Terms:
1. The coffee name must be case-insensitive. Those. if the user types "lATte" it should show the result with coffee "Latte"
2. You need to use findIndex.