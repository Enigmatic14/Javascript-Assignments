// 1. Alerts
alert ("loading...please wait");
// 2. Variables for strings
let favoriteFood="Grilled Fish";
console.log(favoriteFood);
// 3. Variables for Numbers:
let num1=4;
let num2=5;
addition=num1+num2;
subtraction=num2-num1;
multiplication=num1*num2;
division=num2/num1;
console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
// 4. Variable Names Legal and Illegal:
/*three legal variable names...muhammadNoman, muhammad_noman, @muhammadNoman
three illegal variable names...1muhammadNoman, muhammad*noman, var*/
//5. Math Expressions: Familiar Operators:
let answer=(2*4)+21/3*2-4;
console.log(answer);

// 6. Math Expressions: Unfamiliar Operators:
// % (modulus) operator in JavaScript, is used to find out the remainder of operation of divisor & dividend. From remainder value, even, odd & divisible can be identified
let a=5;
console.log(a++);
let b=5;
console.log(++b);
// 7. Concatenating Text Strings:
let firstName="Muhammad";
let lastName="Noman";
let fullName=firstName+" "+lastName;
console.log(fullName);
// 8. Prompts
userAge=prompt("Enter your age");
console.log(userAge);
// 9. if statements:
let num=prompt("Enter any number");
result=num%2;
if (result==0){
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}
// 10.if...else and else if statements:
let numExam=prompt("Enter your marks out of 850");
percent=(numExam/850)*100;
if (percent>=80 && percent<=100){
    console.log("Your grade is A-one");
}
else if (percent>=70 && percent<80){
    console.log("Your grade is A");
}
else if (percent>=60 && percent<70){
    console.log("Your grade is B");
}
else if (percent>=50 && percent<60){
    console.log("Your grade is C");
}
else {
    console.log("Your grade is Fail")
}