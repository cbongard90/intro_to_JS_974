console.log("Hello from src/index.js!");

const firstName = "John";
const surname = "Lennon";

const message = `Hello my name is ${firstName} ${surname}`;

console.log(message);

const fruits = ["Cherry", "Strawberry"];
console.log("Initial State");
console.log(fruits);
// Create
fruits.push("Apple");
console.log("After Create");
console.log(fruits);
// Read
// console.log(fruits[1] + " has id of 1"); // Concatenation
console.log(`Read: ${fruits[1]} has id of 1`);

fruits[1] = "Litchi";
console.log(`After Update: ${fruits[1]} has id of 1`);

// delete
fruits.splice(0, 1); // Delete 1 item starting at index 0
console.log("After Delete");
console.log(fruits);

// Each Loop
const beatles = ["paul", "john", "ringo", "george"];
beatles.forEach((beatle) => {
  console.log(beatle.toUpperCase());
});

// Conditional Statements
console.log("Starting conditional statements");

const age = 14;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}

const raining = true;
const accessory = (raining ? "umbrella" : "sunglasses");
// => "umbrella"

// objects

const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(typeof student);
console.log(student);

console.log(student.firstName);
// => "Boris"
console.log(student['firstName']); // Another way
// => "Boris"

student.firstName = "Romain";
console.log(student.firstName);
// => "Romain"

// Old Method
function square(x) {
  return x * x;
}

console.log(square(10));
console.log(square(15));
console.log(square(1024));

// arrow function
const square2 = (x) => {
  return x * x;
};

const square3 = x => x * x;
