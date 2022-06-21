TASK:
You need to create a function that will work with objects. Name it handleObject.

handleObject takes 3 parameters:

1. obj. The object that the function will operate on.
2. key. object key.
3. action. The action that we will perform on the object.

The action parameter can have 3 values:

1. 'get'. If action is 'get', then the handleObject function must return the value of key in obj.
2. 'add'. If action is 'add', then the handleObject function must add a new key key to the object object and assign the value of the empty string "". It is also necessary to return the updated obj object from the function.
3. 'delete'. If action is 'delete', then the handleObject function must remove the key property from obj and return an updated object.

If action is any other value, then the handleObject function must return the obj object.