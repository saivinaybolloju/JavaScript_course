Problem 1: Consider this: The count increases to 1 for the initial console.log.  In the second statement, the count increases by two.  since the expression for the function is the same.  But because the function definition is changed for the third console.log, the count begins to operate from the beginning, which is 0.  We may believe that the counts are dependent, but in reality, they are independent.

Problem 2:  Think: "Hello, Alice!" seems to be the anticipated result.
 "Hello, Bob!"  "Hello, Charlie!"  Danger:  Because the var executes after the final value of i, the output that has arrived differs from what I had anticipated.  Var is not block-scoped; it is function-scoped.  The let keyword, which is block-scoped, can be used to correct it.
