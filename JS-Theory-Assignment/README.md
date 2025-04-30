Problem 1: Consider this: The count increases to 1 for the initial console.log.  In the second statement, the count increases by two.  since the expression for the function is the same.  But because the function definition is changed for the third console.log, the count begins to operate from the beginning, which is 0.  We may believe that the counts are dependent, but in reality, they are independent.

Problem 2:  Think: "Hello, Alice!" seems to be the anticipated result.
 "Hello, Bob!"  "Hello, Charlie!"  Danger:  Because the var executes after the final value of i, the output that has arrived differs from what I had anticipated.  Var is not block-scoped; it is function-scoped.  The let keyword, which is block-scoped, can be used to correct it.


Section 2, Part 1:

Think: When you try to access a variable before it is declared, JavaScript returns undefined. This happens because var is function-scoped and can be accessed anywhere within the function. The variable mysteryVariable can exist in two scopes: global and local.

Task: Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope before code execution.
However, if we rewrite the code using let instead of var, it will throw a ReferenceError. This is because let and const declarations are hoisted but not initialized, and they remain in the Temporal Dead Zone (TDZ) until the actual declaration line is reached. When hoisting with var: It moves the declaration to the top and assigns it as undefined, so instead of an error, you get undefined as the output. When hoisting with let and const: They are also hoisted but not initialized with any value. They remain in a state called the Temporal Dead Zone (TDZ), so accessing them before declaration throws a ReferenceError.

Part 2:

Think: Inside setTimeout, this refers to "Alice". The this keyword represents the current object being referenced.

Task: In the greetDelayed() method, this refers to user, but inside the setTimeout function, this is determined by how the function is called—so it doesn't refer to Alice. Storing this in a variable helps maintain the correct reference to the object. Arrow functions use lexical this binding, meaning they inherit this from the surrounding scope where they are defined.

Part 3:

In JavaScript, when a function is defined inside another function, the inner function can access the variables of the outer function. This is known as a closure. Closures help create independent state without using global variables. Each time setupCounter() is called, it returns a new independent counter with its own separate count.

Part 4:

Think: If a function is called with fewer arguments, the missing ones are assigned undefined. If called with extra arguments, the additional ones are ignored and don't cause errors. The ...rest parameter allows a function to handle multiple arguments as an array.

Task: Fewer arguments: Missing ones are assigned undefined. More arguments: Extra arguments are usually ignored. Rest parameter: It collects all remaining arguments into an array, making it easier to handle multiple values.
Syntax: function fn(...rest) {
}
