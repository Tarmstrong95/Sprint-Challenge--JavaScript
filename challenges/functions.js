// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */
const consume = (a, b, cb) => {
  return cb(a, b);
};

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const greeting = (a, b) => `Hello ${a} ${b}, nive to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */

// steps 1 & 2 required a return, therefore i will log each invocation.
// console.log(consume(2,2,add)); // 4
// console.log(consume(10,16,multiply)); // 160
// console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Its able to access the variable due to closure allowing the function to reach up its scope chain to its outer function.

const external = "I'm outside the function";

function myFunction() {
  // console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    // console.log(internal);
  }
  nestedFunction();
}
myFunction();
