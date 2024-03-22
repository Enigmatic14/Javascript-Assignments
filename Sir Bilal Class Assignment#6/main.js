// Solve the following questions

// • Write a loop to print numbers from 1 to 10.

for (i = 1; i <= 10; i++) {
  console.log(i);
}

// • Write a loop to print even numbers from 1 to 20.

for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// • Write a loop to print odd numbers from 1 to 15.
for (i = 1; i <= 15; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// • Write a loop to calculate and print the factorial of a number (let's say 5).
facNum = 5;
for (i = facNum - 1; i >= 1; i--) {
  facNum = facNum * i;
}
console.log(facNum);

// • Write a loop to print the multiplication table of a number (let's say 7) up to 10.
tableNum = 7;
for (i = 1; i <= 10; i++) {
  console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}

// • Write a loop to print the Fibonacci series up to the 10th term. (The Fibonacci sequence is a type series where each number is the sum of the two that precede it. It starts from 0 and 1 usually. The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.-10)
firstNum = 0;
secondNum = 1;
for (i = 1; i <= 10; i++) {
  console.log(firstNum);
  nextNum = firstNum + secondNum;
  firstNum = secondNum;
  secondNum = nextNum;
}

// • Write a loop to find and print the sum of digits of a number (let's say 123).
strNum = "123";
splitedStrNum = strNum.split("");
console.log(splitedStrNum);
sumArr = 0;
for (i = 0; i < splitedStrNum.length; i++) {
  sumArr = sumArr + parseInt(splitedStrNum[i]);
}
console.log(sumArr);

// Write a loop to print the reverse of a string (let's say "hello").
helloStr = "Hello";
splitHelloStrArr = helloStr.split("");
console.log(splitHelloStrArr);
for (i = splitHelloStrArr.length - 1; i >= 0; i--) {
  console.log(splitHelloStrArr[i]);
}
reverseHelloStr = "";
for (i = helloStr.length - 1; i >= 0; i--) {
  reverseHelloStr=reverseHelloStr+helloStr[i];
}
console.log(reverseHelloStr);
// • Write a loop to print the square of numbers from 1 to 10.

for (i = 1; i <= 10; i++) {
  console.log(i * i);
}
// • Write a loop to find and print the smallest element in an array (let's say [3, 7, 2, 9, 5]).
numArray = [3, 7, 2, 9, 5];
sortedNumArray = numArray.sort();
console.log(sortedNumArray[0]);

checkNum = 100;
for (i = 0; i < numArray.length; i++) {
  if (numArray[i] < checkNum) {
    checkNum = numArray[i];
  }
}
console.log(checkNum);
