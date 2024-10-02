// let totalScore = 0;
// for (let i = 1; 1 <= 5; i++) {
//   let score = prompt("Enter your score");
//   totalScore += parseInt(score);
// }
// console.log("Your total score is " + totalScore);

// for (let i = 1; i <= 12; i++) {
//   let number = parseInt(prompt(`Enter number ${i}:`), 10);

//   if (number === 0) {
//     console.log(`The result of ${number} * 5 is 0, which is even.`);
//   } else if (number) {
//     // This checks if the number is a valid number (not NaN, null, or undefined)
//     let result = number * 5;
//     let evenOrOdd = result % 2 === 0 ? "even" : "odd";
//     console.log(
//       `The result of ${number} * 5 is ${result}, which is ${evenOrOdd}.`
//     );
//   } else {
//     console.log("Invalid input. Please enter a number.");
//   }
// }

// console.log("I'm learning javascript");
// console.log(6 * 6);

// <!-- Variables in Javascript
//  1. con
//  2. let
//  3. var

//  comments in Javascript //

// VARIABLE
// let myHub = "IGHub";
// const myName = "Justice";
// console.log(myHub);
// console.log(myName);

// DATATYPES
// let school = "Main Market" //String
// const num = 9 //Number
// const fruits = ['Apple', 'Grape'] //Array
// const user = {
// name: "Emeka",
// age: 8

// Object
// console.log(typeof school);
// console.log(typeof num);
// console.log(typeof fruits);
// console.log(typeof user);
// console.log(`${myName} is going to ${school}`);
// console.log(myName + " is going to " + school);
// console.log(myName, "is going to", school);

// tenary operators
// nullish operators
// CONDITIONAL STATEMENTS
// let myAge = 18
// if (myAge >= 18) {
//  console.log("You are eligible to vote")
//  } else {
// console.log("You are not eligible to vote")

// let totalScore = 0;
// for (let i = 0; i < 6; i++) {
// let score = Number(promptparse("Enter your score" + (i + 1) + ":"));
//   totalScore += score;
// }
//  console.log(`Total Score is ${totalScore}`)

// USING FOR LOOP FOR 5 MULTIPLICATION TABLE

//   for (let i = 1; i <= 12; i++) {
//     let number = parseInt(prompt(`Enter number ${i}:`), 10);
//     if (number === 0) {
//         console.log(`The result of ${number} * 5 is 0, which is even.`);
//     } else if (number) {
//         let result = number * 5;
//         let evenOrOdd = result % 2 === 0 ? "even" : "odd";
//         console.log(`The result of ${number} * 5 is ${result}, which is ${evenOrOdd}.`);
//     } else {
//         console.log("Invalid input. Please enter a number.");
//     }
// }

//  USING WHILE LOOP FOR THE PREVIOUS ASSIGNMENT

// let baseNumber = parseInt(
//   prompt("Enter a number to generate its multiplication table:"),
//   10
// );

// if (!isNaN(baseNumber)) {
//   let i = 1;
//   //   for (let i = 1; i <= 12; i++) {
//   while (i <= 12) {
//     let result = baseNumber * i;
//     let evenOrOdd = result % 2 === 0 ? "even" : "odd";

//     console.log(
//       `The result of ${baseNumber} * ${i} is ${result}, which is ${evenOrOdd}.`
//     );
//     i++;
//   }
// } else {
//   console.log("Oops! That doesn't seem like a valid number. Please try again.");
// }

// WHILE LOOP
// let value = 0;
// while (value < 100) {
//  console.log("I'm Learning Javascript")
// }

// LENGTH OF A STRING
// let myName = "emeka"
//             //01234
// let count = 0
// for (let i = 0  ; i < myName.length ; i++) {
//     if (myName[i] == "k")
//         count ++
// }
// console.log(count)
// console.log(myName[3])

// DO - WHILE LOOP
// let num = 0;
// do {
//   console.log(num);
//   console.log("This text is inside a do while loop \n ghtygfh");
//   //new line
//   num++;
// } while (num < 5);

// USE OF FUNCTIONS
// function greetUser(){
//   let name = prompt("Enter your name:");
//   console.log(`Hello ${name}!`);
// }

// greetUser();

// USE OF PARAMS
// function greetUser(NAME){
//   let name = prompt("Enter your name:");
//   console.log(`Hello ${NAME}!`);
// }

// greetUser(NAME);

// ASSIGNMENT ON FIZZBUZZ
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }

// ASSIGNMENT ON CHESSBOARD
// let board = [];
// for (let i = 0; i < 8; i++) {
//   board[i] = [];
//   for (let j = 0; j < 8; j++) {
//     if ((i + j) % 2 === 0) {
//       board[i][j] = " ";
//     } else {
//       board[i][j] = "#";
//     }
//   }
// }
// console.log(board);

// let size = 8;
// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 === 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n"; // Move to the next line
// }

// console.log(board);

// CHESSBOARD ASSIGNMENT
// let board = [];
// for (let i = 0; i < 8; i++) {
//   board[i] = [];
//   for (let j = 0; j < 8; j++) {
//     if ((i + j) % 2 === 0) {
//       board[i][j] = " ";
//     } else {
//       board[i][j] = "#";
//     }
//   }
// }
// // Print the board in chessboard format
// for (let i = 0; i < 8; i++) {
//   console.log(board[i].join(''));  // Join array elements and print each row
// }

// TRIANGLE ASSIGNMENT USING FOR FOR LOOP
// let triangle = "";
// for (let i = 1; i <= 7; i++) {
//   triangle += "#";
//   console.log(triangle);
// }

// TRIANGLE ASSIGNMENT USING FOR WHILE LOOP
// let triangle = "";  // Initialize an empty string for the triangle
// let i = 1;  // Start with the first line
// while (i <= 7) {  // Loop while i is less than or equal to 7
//   triangle += "#";  // Add one "#" to the triangle pattern
//   console.log(triangle);  // Print the current pattern
//   i++;  // Increment i to move to the next line.
// }

// LOGICAL OPERATORS
// LOGICAL OR -> || OR
// let a = 7;
// let b = 9;
// if (a===7 || b===3) {
//   console.log("Logical OR at work")
// }
// else{
//   console.log("None of the operation is true")
// }

// LOGICAL AND -> && AND
// let a = 7;
// let b = 9;
// if (a===7 && b===9) {
//   console.log("Logical AND at work")
// }
// else{
//   console.log("None of the operation is true")
// }

// LOGICAL NOT -> ! NOT
// let a = 7;
// let b = 9;
// if (a!==7) {
//   console.log("Logical NOT at work")
// }
// else{
//   console.log("None of the operation is true")
// }

// How to create a function
// Two types of functions
// 1. Anonymous Function
// 2. Normal function

// USE OF FUNCTIONS
// let userName = prompt("Enter your name:");
// function greetUser(name){
//   console.log(`Good Day ${userName}!`);
// }
// greetUser(userName);

// // HOW TO CREATE AN ANONYMOUS FUNCTION
// const greet = ()=>{
//   console.log("Good Day", name)

// }
// greet()

// To know the datatype of any variable
// use typeof

// A FUNCTION THAT ADDS TWO NUMBERS
// let a = parseInt(prompt("Enter the first number"),10);
// let b = parseInt(prompt("Then input the second one"),10)
// function add(a,b){
//   console.log(a + b)
// }
// add(a,b)

// let letter = prompt("Input an alphabet");
// let word = prompt("Enter any word in which you want the alphabet to be counted")
// function occurences(string){
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(`Letter ${letter} appeared ${occurences(word)} times`);

// let inputString = prompt("Enter a string:");
// let result = inputString.replace(/[aeiouAEIOU]/g, '');
// console.log("String without vowels: " + result);

// let inputString = prompt("Enter a string:");
// let result = "";
// for (let i = 0; i < inputString.length; i++) {
//   let char = inputString[i];
//   if (!"aeiouAEIOU".includes(char)) {
//     result += char;
//   }
// }
// console.log("String without vowels: " + result);

// function min(a, b) {
//   return a < b ? a : b;
// }

// // Ask the user to input two numbers
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

// // Convert the input to numbers
// num1 = Number(num1);
// num2 = Number(num2);

// // Find and display the minimum
// let result = min(num1, num2);
// console.log("The minimum is: " + result);

// function min(num1, num2) {
//   if (num1 < num2) {
//     return num1;
//   }
//   else if (num1 > num2){
//     return num2;
//   }
//   else if (num1 === num2) {
//     alert("Invalid")
//   }
// }
// let num1 = parseInt(prompt("Enter the first number:"),10);
// let num2 = parseInt(prompt("Enter the second number:"),10);

// alert (`The smallest number is ${min(num1, num2)}`)

// Strings method
// AT
// charAt
// trim
// split
// slice
// substring
// substr
// include
// startswith
// endswith
// touppercase
// tolowercase
// pad
// repeat
// replace

// AT takes a number and returns its letter value

// let text = 'ofodum';
// let alpha = text.at(3);
// console.log(alpha);

// chartAt does the same thing with AT

// let text = 'ofodum';
// let alpha = text.charAt(3);
// console.log(alpha)

// trim removes white spaces from the left or right of a string

// let text = "             ighub        ......"
// console.log(text);
// let alpha = text.trim()
// console.log(alpha)

// split is used to convert a string to an array

// let text = 'ighub'
// console.log(text);
// let alpha = text.split('')
// console.log(alpha)

// slice slices out a part of a string

// let text = 'ighub is my training center';
// let alpha = text.slice(2);
// let alpha1 = text.slice(1);
// console.log(alpha, '/n' ,alpha1)

// substring works as slice but with a negative value

// let text = 'ighub is my training center'
// let alpha = text.substring(-1,20)
// console.log(alpha)

// substr works as slice but you give it the number of letters to slice

// let text = 'ighub is my training center'
// let alpha = text.substring(2,10)
// console.log(alpha)

// include returns a boolean

// let text = 'ighub'
// let alpha = text.includes('g')
// console.log(alpha)

// startswith also works as include but shows what ends the string

// let text = 'ighub is amazing'
// let alpha = text.startsWith('ighub')
// console.log(alpha)

// endswith also works as include but shows what ends the string

// let text = 'ighub is amazing';
// let alpha = text.endsWith('amazing')
// console.log(alpha)

// touppercase and tolowercase are used to change a string from uppercase to
//  lowercase and viceversa

// let text = 'ighub is amazing';
// let alpha = text.toUpperCase('');
// console.log(alpha)

// let text1 = 'IGHUB IS AMAZING';
// let alpha2 = text.toLowerCase('');
// console.log(alpha2)

// pad is used to add something to a string either from the right or left

// let text = '8';
// let alpha = text.padStart(5,'2');
// console.log(alpha)

// let text1 = '8';
// let alpha1 = text.padEnd(5,'2');
// console.log(alpha1)

// repeat is used to repeat a string

// let text = 'I love ighub, '
// let alpha = text.repeat(10)
// console.log(alpha)

// replace is used to replac e a string

// let text = 'I love ighub ';
// let alpha = text.replace('ighub','Jesus');
// console.log(alpha)

// write a program that takes a strings as input and returns with the vowels removed
// let word = "when"
// let vowels = "aeiouAEIOU"
// let extractedWord = ""

// for (let index = 0; index < word.length; index++) {
//     if (word.includes(vowels[index])) {
//         continue
//     }
//     else {
//         console.log(vowels[index]);

//     }
// }

// console.log(extractedWord);

// console.log(Math.random());

// let radius = parseInt(prompt("Input the value of your radius : "),10)
// function AreaOfaCircle(radius) {
//     return Math.PI * radius ** 2;
// }
// console.log(`The area of the circle whose radius is ${radius}cm is ${AreaOfaCircle(radius)}cm squared`)

// let Area = (Math.PI)*radius**2
// console.log(`The area of the circle whose radius is ${radius}cm is ${Area}cm squared`);

// let number = Number(prompt("Please enter a number"))
// let rand = Math.floor(Math.random() * 10) + 1;
// if (number == rand) {
//     console.log("You're Correct!!")
// }
// else {
//     console.log("Sorry, that's not correct. The correct number was " + rand)
// }
// console.log(Math.floor(Math.random()*5) +1)

// Create a function generatePassword that takes a length as an argument and returns a random password of that length. Use a loop to generate the password, a conditional statement to check for valid characters, and a string method to concatenate the characters.

// let password = prompt("Enter your password")
// function generatePassword(length) {
//     let validCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         let randNum = Math.floor(Math.random()*10)
//         password += validCharacters[randNum]
//     }
//     return password;
// }
// console.log(`The randomized password is ${generatePassword(password.length)}`);

// Create a function generatePassword that takes a length as an argument and returns a random password of that length. Use a loop to generate the password, a conditional statement to check for valid characters, and a string method to concatenate the characters.

// let password = prompt("Enter your password")
// function generatePassword(length) {
//   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
//   let password = '';
//   for (let i = 0; i < length; i++) {
//     let randomIndex = Math.floor(Math.random() * characters.length + 1);
//     let randomCharacter = characters[randomIndex];
//     if (/[a-zA-Z0-9!@#$%^&*()_+]/.test(randomCharacter)) {
//       password += randomCharacter;
//     } else {
//       i--;
//     }
//   }
//   return password;
// }
// console.log(`The randomized password is ${generatePassword(password.length)}`);

// let NumOfCharacters = parseInt(prompt("Input the number of characters you intend to use as the length of your password"),10)
// let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"
// let password = "";
// for (let i = 0; i < NumOfCharacters; i++) {
//   let randNum = Math.floor(Math.random() * characters.length)
//   password += characters[randNum];
// }
// console.log(`Here is your password : ${password}`);

// Create a function generatePassword that takes a length as an argument and returns a random password of that length. Use a loop to generate the password, a conditional statement to check for valid characters, and a string method to concatenate the characters.
// function generatePassword() {
//   let length = Number(prompt("Input the number of characters you intend to use as your password"));
//   let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
//   let password = "";

//   for (let i = 0; i < length; i++) {
//     let randomIndex = Math.floor(Math.random() * characters.length);
//     password += characters[randomIndex];
//   }

//   console.log(`Here is your password: ${password}`);
// }

// generatePassword();

// Arrays []
// We use the const keyword to define arrays
// FOR STRINGS
// const students = ["Chim","Frank","Chris","Dika","Nuel","Tina","Chioma","Dera"]
// console.log(students[1]); // Used to assign the data in the array

// ASSIGNMENT - HOW TO ASSIGN THE LAST ELEMENT IN AN ARRAY

// FOR NUMBERS
// const numbers = [1,2,3,4,5,6]
// console.log(numbers);

// ARRAY METHODS
// LENGTH GIVES THE NUMBER OF ELEMENTS IN THE ARRAY
// POP MEANS REMOVING THE LAST ELEMENT
// SORT
// PUSH MEANS TO ADD THE NEW ELEMNT TO THE EXISTING ARRAY
// REVERSE MEANS TO REVERSE THE ELEMNT
// SPLICE
//  SLICE
// forEach --------- looping through an array

// POP METHODS
// const numbers = [1,2,3,4,5,6]
// console.log(numbers.pop());
// console.log(numbers)
// let popped = students.pop()
// console.log(students);
// console.log(popped);

// PUSH
// students.push("Johnvianney");
// console.log(students);

// REVERSE
// students.reverse()
// console.log(students);

// SPLICE
// ASSIGNMENT - how to use splice to add an element to an array
// students.splice(2, 2)
// console.log(students);

// for each

// using an anonymous function
// students.map(elements => {
//   console.log(elements);
// });

// Using for loop
// for (let index = 0; index < students.length; index++) {
//   const elements = students[index];
//   console.log(elements);

// objects
//  const user = {
//   name : "Chim",
//   age : 7,
//   stack : "Software Development"
//  }
//  console.log(user);

//  How to add an element in front

//  How to toggle
//  let img = document.getElementById("image");
//  let imgSrc = img.src;
// //  console.log();

//  function toggleImage() {
//     if (img.src.endsWith("github.png")) {
//         img.src = "favicon-32x32.png"
//     }
//     else {
//         img.src = "github.png"
//     }
//  }

// How to use a ternary operator
// syntax =
// condition ? if expression : else expression

// const exerciseTimeMins = 30
// let message = ''
// if (exerciseTimeMins < 30){
//     message = 'You need to try harder'
// }
// else {
//     message = 'Doing good'
// }
// console.log(message);

// to use a ternary operator
// const message = exerciseTimeMins < 30 ? 'You need to try harder' : 'Doing good'
// console.log(message);
