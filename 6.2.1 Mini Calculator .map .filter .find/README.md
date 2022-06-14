TASK:

Make a mini-calculator

Your job is to write a function that works like a mini math calculator. Name this function calculate. calculate accepts 1 expression parameter, which is an array and must always consist of 3 elements.

The first and 3rd elements in the expression array are numbers, which can be written as number or string data type (for example, 100 or '100').(I complicated the task, and now it doesn’t matter where the numerical values are, the main thing is that the mathematical symbol is between them). The 2nd element is the math sign, which is a string data type. The mathematical sign can only be the following strings: “>”, “<”, “=”, “+”, “-”, “*”, “/”. If there was a character that does not exist in the given sequence, then the calculate function should return an error in the form of the string of error.

Also note that sometimes more than 3 parameters can be passed to the expression array, and this is of course not true. But if this was done, you need to remove the extra elements in the array that cannot be converted to a number that are false. If the length of the expression array is less than 3, then the calculate function must return an error as the string of error.
For example, if expression was passed as a given array:
['100', 'hello', 'javascript', , 'help200', '+', 4]
then in the end it should be converted to
['100', '+', 4]