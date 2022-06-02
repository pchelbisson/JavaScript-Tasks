TASK:

Look for a forbidden character in the text and print its indexes to the console.

First, let's create 2 functions: showSuccessMessage, which takes the message parameter and displays it to the console via console.log; showErrorMessage , which takes the message parameter and prints it to the console via console.error (console.error prints the message to the console in red). These functions will be our future callbacks.

Now you need to create another function called checkTextOnErrorSymbol. With it, we will look for a forbidden character in the text and display an error to the console if such a character was found.

checkTextOnErrorSymbol takes 4 parameters:

1.text, data type string. She is responsible for the text in which we will look for prohibited characters.
2.errorSymbol, string data type. He is responsible for the forbidden character.
3.successCallback. This is a function that will print a success message if no illegal characters were found.
4.errorCallback. This is a function that will print an error to the console if an illegal character was found.

If an illegal symbol was found, then call the errorCallback callback and pass the message “Найден запрещенный символ "${errorSymbol}" под индексом ${i}.”  (replace errorSymbol with the forbidden character, i with the index of the string where the forbidden character was found.

If no forbidden characters were found in the string, then call the successCallback callback and pass the message “В данном тексте нет запрещенных символов”. to it.