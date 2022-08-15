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
