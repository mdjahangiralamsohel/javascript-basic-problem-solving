// Define the lengths of the three sides of a triangle
const side1 = 5;
const side2 = 6;
const side3 = 7;

// Calculate the semi-perimeter of the triangle
const s = (side1 + side2 + side3) / 2;

// Use Heron's formula to calculate the area of the triangle
const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3))).toFixed(
  2
);

// Log the calculated area to the console
console.log(area);
