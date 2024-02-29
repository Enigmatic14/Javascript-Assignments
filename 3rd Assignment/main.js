let fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits);
// 1.Pop & Push
// customer bought grape
fruits.pop();
console.log(fruits);
// Customer bought oranges
fruits.pop();
console.log(fruits);
// Customer bought banana
fruits.pop();
console.log(fruits);
// Shopkeeper refill the basket with strawberry
fruits.push("strawberry");
console.log(fruits);
// Shopkeeper refill the basket with watermelon
fruits.push("watermelon");
console.log(fruits);
// New stock arrived, first fruit to be eliminated
// 2.Shift & unshift
fruits.shift();
console.log(fruits);
let newFruit = prompt("Enter the name of fruit which you want in basket");
fruits.unshift(newFruit);
console.log(fruits);
// 3.Splice
// Number array Splice
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let startIndex = prompt("Enter the start index value");

let countItem = prompt("How much number do you want to delete");

num.splice(startIndex, countItem);
console.log(num);
// 4.slice
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let startSliceIndex = prompt("Enter the start index value");

let endSliceIndex = prompt("Enter the ending index value");
sliceValue = num1.slice(startSliceIndex, endSliceIndex);
console.log(sliceValue);
// 5. Length
let newNumArr = [1, 2, 3, 4, 5];
totalItems = newNumArr.length;
sum = 1 + 2 + 3 + 4 + 5;
avg = sum / totalItems;
console.log(avg);
