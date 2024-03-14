// 1. Variables and Math Expressions:
// - Declare two variables num1 and num2 and assign them values of your choice.
// - Calculate the sum, difference, product, and quotient of num1 and num2.
// - Print the results to the console.
let num1 = 4;
let num2 = 5;
sum = num1 + num2;
diff = num2 - num1;
product = num1 * num2;
div = num2 / num1;
console.log(sum);
console.log(diff);
console.log(product);
console.log(div);

// 2. Conditionals:
//    - Declare a variable age and assign it a value.
//    - Implement an if statement to check if age is greater than or equal to 18.
//    - If true, print "You are an adult" to the console; otherwise, print "You are a minor".
let age = 22;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// 3. Array Initialization and Manipulation:
//    - Create an empty array named fruits.
//    - Use a loop to add the following five fruits to the fruits array: "apple", "banana", "orange", "grape", "kiwi".
//    - Print the fruits array to the console.
let fruits = [];
fiveFruits = ["apple", "banana", "orange", "grape", "kiwi"];
for (let i = 0; i < fiveFruits.length; i++) {
  item = fiveFruits[i];
  fruits.push(item);
}
console.log(fruits);

// 4. Looping through Arrays:
//    - Implement a loop to iterate over the fruits array and print each fruit to the console.
for (i = 0; i < fruits.length; i++) {
  item = fruits[i];
  console.log(item);
}

// 5. Pattern Printing with Nested Loops:
//    - Write JavaScript code using nested loops to print the following pattern to the console:

//      *
//      * *
//      * * *
//      * * * *
//      * * * * *
// star = "*";
// for (i = 1; i <= 5; i++) {
//   console.log(star);
//   star = star + "*";
// }
for (i=1;i<=5;i++){
  star = ""
  for (j=1;j<=i;j++){
    star+="*"
  }
  console.log(star)
}
// 6. Mathematical Operations with Loops:
//    - Write a JavaScript program to calculate and print the sum of the first 10 natural numbers using a loop.
sum = 0;
for (i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

// 7. Array Manipulation with Loop:
//    - Create an empty array named colors.
//    - Use a loop to add the following colors to the colors array: "red", "green", "blue", "yellow", "orange".
//    - Print the colors array to the console.
let colors = [];
let colorsArray = ["red", "green", "blue", "yellow", "orange"];
for (i = 0; i < colorsArray.length; i++) {
  item = colorsArray[i];
  colors.push(item);
}
console.log(colors);

// 8. Accessing Array Elements:
//    - Implement a loop to print each element of the colors array along with its index to the console
for (i = 0; i < colors.length; i++) {
  item = colors[i];
  console.log(item);
}

// 9. Reversing Array Elements:
//    - Write JavaScript code to reverse the elements of the colors array and print the reversed array to the console.
reverseArray = [];
for (i = 0; i < colors.length; i++) {
  item = colors[i];
  reverseArray.unshift(item);
}
console.log(reverseArray);
