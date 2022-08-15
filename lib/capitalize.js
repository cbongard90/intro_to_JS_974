// Function to capitalize

const capitalize = (string) => {
  // First letter Uppercase
  const firstLetter = string[0].toUpperCase();
  // Remaining letters lowercare
  const leftover = string.substring(1).toLowerCase();
  return `${firstLetter}${leftover}`;
};

capitalize("paul"); // Paul
capitalize("joHn"); // John

console.log(capitalize("paul"));
console.log(capitalize("joHn"));
