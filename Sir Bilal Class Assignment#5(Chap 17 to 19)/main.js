// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

let num = [[], [], []];
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

num = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// 3. Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
let tableNumber = prompt("Enter a number to show its multiplication table");
let lengthTable = prompt("Enter length multiplication table");
// let tableNumber = 2;
// let lengthTable = 15;
for (i = 1; i <= lengthTable; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
for (i = 1; i <= 15; i++) {
  console.log(i);
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

for (i = 10; i >= 1; i--) {
  console.log(i);
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
for (i = 0; i <= 20; i = i + 2) {
  console.log(i);
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
for (i = 1; i < 20; i = i + 2) {
  console.log(i);
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
for (i = 2; i <= 20; i = i + 2) {
  console.log(i + "k");
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"];
userOrder = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/m'aam?"
);
isfound = false;
for (i = 0; i < bakeryItem.length; i++) {
  if (userOrder === bakeryItem[i]) {
    isfound = true;
    console.log(`${userOrder} is available at index ${i} in our bakery`);
  }
}
if (isfound == false) {
  console.log(`we are sorry. ${userOrder} is not available in our bakery`);
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

findLargestNumber = [24, 53, 78, 91, 12];
largestNumber = [0];
for (i = 0; i < findLargestNumber.length; i++) {
  if (findLargestNumber[i] > largestNumber[0]) {
    largestNumber[0] = findLargestNumber[i];
  }
}
console.log(largestNumber[0]);
secondOptionLargestNum = [24, 53, 78, 91, 12];
sortedLargestNum = secondOptionLargestNum.sort();
console.log(
  `Largest number is ${sortedLargestNum[secondOptionLargestNum.length - 1]}`
);
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
findSmallestNumber = [24, 53, 78, 91, 12];
smallestNumber = [100];
for (i = 0; i < findSmallestNumber.length; i++) {
  if (findSmallestNumber[i] < smallestNumber[0]) {
    smallestNumber[0] = findSmallestNumber[i];
  }
}
console.log(smallestNumber[0]);
secondOptionFindSmallestNumber = [24, 53, 78, 91, 12];
sortedSmallestNumber = secondOptionFindSmallestNumber.sort();
console.log(`Smallest number is ${sortedSmallestNumber[0]}`);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
for (i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}
