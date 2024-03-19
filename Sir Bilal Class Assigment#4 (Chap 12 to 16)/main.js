// CHAPTER ARRAY
// 1. Declare an empty array using JS literal notation to store
// student names in future.
let studentNamesLiteral = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
let studentNamesObject = {

}

// 3. Declare and initialize a strings array.
let studentNames = ["Nauman","Rohaan","Ahmed","Ali", "Hassan"];
// 4. Declare and initialize a numbers array.
let studentMarks = [98, 82, 85,78,75];
// 5. Declare and initialize a boolean array.
let isPassed = [true, true,false,true,false];
// 6. Declare and initialize a mixed array.
let mixedArray = ["Nauman", true, 98, "Ali"];
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
let educationDegree = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Phd"];
console.log("Qualifications:");
for(i=1;i<educationDegree.length;i++){
    console.log(`${i}) ${educationDegree[i]}`)
}
document.write(`<h1>Qualifications:</h1><ol><li>${educationDegree[0]}</li><li>${educationDegree[1]}</li><li>${educationDegree[2]}</li><li>${educationDegree[3]}</li><li>${educationDegree[4]}</li><li>${educationDegree[5]}</li><li>${educationDegree[6]}</li><li>${educationDegree[7]}</li></ol>`)
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

let newStudentNames = ["Michael","John","Tony"];
let obtainedMarks = [320,230,480];
michaelPercentage = 320/500*100;
johnPercentage = 230/500*100;
tonyPercentage = 480/500*100;
console.log(`Score of ${newStudentNames[0]} is ${obtainedMarks[0]}. Percentage: ${michaelPercentage}%`);
console.log(`Score of ${newStudentNames[1]} is ${obtainedMarks[1]}. Percentage: ${johnPercentage}%`);
console.log(`Score of ${newStudentNames[2]} is ${obtainedMarks[2]}. Percentage: ${tonyPercentage}%`);

// 9. Initialize an array with color names. Display the array
// elements in your browser.

let colorsArray = ["Blue","Black","Red"];
console.log(colorsArray);
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// colorAddBegining = prompt("Enter the color, you want to add in begining");
colorAddBegining = "Orange";
colorsArray.unshift(colorAddBegining);
console.log(colorsArray);
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// colorAddEnd = prompt("Enter the color, you want to add in begining");
colorAddEnd = "Purple";
colorsArray.push(colorAddEnd);
console.log(colorsArray);
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colorsArray.unshift("Brown","Pink");
console.log(colorsArray);
// d. Delete the first color in the array. Display the updated
// array in your browser.
colorsArray.shift();
console.log(colorsArray);
// e. Delete the last color in the array. Display the updated
// array in your browser.
colorsArray.pop();
console.log(colorsArray);
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// indexWantsToAdd = prompt("Enter the index number");
indexWantsToAdd = 1;
// colorWantsToAdd = prompt("Enter the color name");
colorWantsToAdd = "Brown";
colorsArray.splice(indexWantsToAdd,0,colorWantsToAdd);
console.log(colorsArray);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// indexWantsToDelete = prompt("Enter the index numer");
indexWantsToDelete = 2;
// howManyColorDelete = prompt("How many colors want to delete");
howManyColorDelete = 2;
colorsArray.splice(indexWantsToDelete,howManyColorDelete);
console.log(colorsArray);

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let studentScore = [320,230,480,120];
console.log(studentScore.sort());

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cities = ["Karachi", "Lahore","Islamabad","Quetta","Peshawer"];
selectedCities = cities.slice(2,4);
console.log(selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

let catArray = ["This","is","my","cat"];
catStr = catArray.join(" ");
console.log(catStr);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let deviceArr = ["keyboard","mouse","printer","monitor"];
DeviceOut = deviceArr.shift();
console.log(DeviceOut);
DeviceOut = deviceArr.shift();
console.log(DeviceOut);
DeviceOut = deviceArr.shift();
console.log(DeviceOut);
DeviceOut = deviceArr.shift();
console.log(DeviceOut);

// 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)

let newDeviceArr = ["keyboard","mouse","printer","monitor"];
newDeviceOut = newDeviceArr.pop();
console.log(newDeviceOut);
newDeviceOut = newDeviceArr.pop();
console.log(newDeviceOut);
newDeviceOut = newDeviceArr.pop();
console.log(newDeviceOut);
newDeviceOut = newDeviceArr.pop();
console.log(newDeviceOut);

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

let mobilePhones = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write(`<form><select><option>${mobilePhones[0]}</option><option>${mobilePhones[1]}</option><option>${mobilePhones[2]}</option><option>${mobilePhones[3]}</option><option>${mobilePhones[4]}</option><option>${mobilePhones[5]}</option></select></form>`)

// Chapter 12 & 13

// 1.Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// let character = prompt("Enter any character");
character = "A"
charValue = character.charCodeAt(0);
if (charValue>=65 && charValue<=90){
    console.log("Enter character is a uppercase letter")
}
else if (charValue>=97 && charValue<=122){
    console.log("Enter character is a lowercase letter")
}