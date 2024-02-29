// 1. Basic For Loop:
//    - Write a JavaScript for loop that iterates from 1 to 5 and prints each iteration number to the console.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. Summation with For Loop:
//    - Write a JavaScript program that calculates the sum of numbers from 1 to 10 using a for loop. Output the total sum to the console

sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

// 3. Reverse Counting with For Loop:
//    - Write a JavaScript for loop that counts backward from 10 to 1 and prints each number to the console.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 4. Multiplication Table with For Loop:
// - Write a JavaScript program to generate the multiplication table for a given number (e.g., 5). Output the multiplication table from 1 to 10 for the given number to the console.

let num = 5;
for (let i = 1; i <= 10; i++) {
  multiply = num * i;
  console.log(num + " x " + i + " = " + multiply);
}

// 6. Pattern Printing with For Loop:
// - Write a JavaScript program using for loop to print the following pattern to the console:

//   *
//   * *
//   * * *
//   * * * *
//   * * * * *

let star = "*";
for (let i = 0; i <= 4; i++) {
  console.log(star);
  star = star + "*";
}
