Imagine that you, as a web developer, have been asked to develop a web platform that will track students' progress in learning web development.

First you need to create a student object, which will have 3 properties:

1. stack. An array of strings, where each string is a technology. Initially, the stack array must be equal to ['HTML'].
2. level. data type number. level is responsible for the current level of the student and is initially equal to 1.
3. improveLevel. A function that first increments the student's level property by one. If level is 2nd, then you need to add 'CSS' value to the end of the stack array, if 3rd - add 'JavaScript' value to the end of stack, 4th - 'React', 5th - 'NodeJS'. If the level value has become more than 5, then you need to display in the modal window via alert the message “The student has learned all technologies!”. Also, the improveLevel function must return the updated student object at the very end.