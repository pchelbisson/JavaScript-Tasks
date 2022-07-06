You need to create a makeDomestic function that will print all information about the animal to the console with the message “type by name name says sound”, where name is the name of the animal, type is its type, and sound is the result of calling the makeSound function.

Also, the makeDomestic function must return a new animal object, which will contain all the parameters that were before (name, type, makeSound), as well as a new isDomestic parameter, which is a boolean data type and indicates whether the animal is domestic or not.

To specify a value for the isDomestic property (true or false) you need to pass it as a parameter to the makeDomestic function.

You need to solve this problem in 3 ways: through bind, call and apply. Call the makeDomestic function 3 times using these methods. When using bind, the makeDomestic function must work on the dog object, when using apply and call, on the bird object. Don't forget to pass the isDomestic parameter to the function when calling it.