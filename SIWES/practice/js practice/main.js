// const name = "James";
// let age = 10;
// let day = "Monday";

// age = 26;

// if(age !== "26" ) {
// String Literal
// console.log("You are eligible");
// Concatenation
// console.log("You are " + age + " years old");

// }else if (age === 26) {
//     console.log("You ate my food")
// }  else {
// console.log("You are ineligible");

// }

// age === 10 ? console.log("Hey")  : console.log("Good");

// MY JAVASCRIPT PRACTICE

// document.getElementById("count-el").innerText = 5;

// let count = 0;
// console.log(count);

//  1. Create a variable , myAge and set its value to your age
// let myAge = 78;

// 2. Log the myAge variable to the console
// console.log(myAge);

// let myAge = 78;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let count = 5;
// count = count + 1;
// count = count + 1;
// count = count - 23;

// console.log(count);

// let bonusPoints = 50;

// bonusPoints = bonusPoints + 100;
// bonusPoints = bonusPoints - 25;
// bonusPoints = bonusPoints + 70;

// console.log(bonusPoints);

// function increment() {
//     console.log("The button was clicked");
// }

// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// countdown();

// function numberCaller() {
//     console.log(42);
// }
// numberCaller()

// function sumOfLaps() {
//     let lap1 = 34;
//     let lap2 = 33;
//     let lap3 = 36;
//     totalLaps = lap1 + lap2 + lap3 ;
//     console.log(totalLaps);
// }
// sumOfLaps()

// let lapsCompleted = 0;

// function lapsComplete(params) {
//     lapsCompleted = lapsCompleted + 3
//     console.log(lapsCompleted);
// }
// lapsComplete()

// DOM - DOCUMENT OBJECT MODEL
// let count = 0;
// let countEl = document.getElementById("count-el")

// console.log(countEl);

// function increment() {
//     count = count + 1;
//     countEl.innerText = count;
//     console.log("clicked");
// }

// // MY FIRST JAVASCRIPT APP

// let count = 0;
// let countEl = document.getElementById("count-el");
// let saveEl = document.getElementById("save-el")

// console.log(countEl);
// console.log(saveEl);

// function increment() {
//     count = count + 1;
//     countEl.innerText = count;
//     console.log("clicked");
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
//     console.log(count);
// }

// console.log("Let's count the people on our subway!!");

// EVALUATION ON VARIABLES

// Create two variables, firstName and lastName

// let firstName = 'Chimdalu'
// let lastName = 'Mbaegbu'

// Concatenate the two variables into a third variable called fullName

// let  fullName = firstName + lastName

// Log fullName to the console

// console.log(`My fullname is ${firstName} ${lastName}.`);

// Create a function that logs out "Hi there, Linda!" when called

// let name = "Linda"
// let  greeting = "Hi there"
// function greetLinda() {
//     console.log(greeting + ", " + name + "!" );
// }
// greetLinda()

// let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them

// function add3Points() {
//     myPoints += 3
// }

// function remove1Point() {
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// Call the functions to that line below logs out 10
// console.log(myPoints);

// Try to predict what each of the lines will log out
// console.log("2" + 2); // "22"
// console.log(typeof("2" + 2)); // string

// console.log(11 + 7); // "18"
//console.log(typeof(11 + 7)); // number

// console.log(6 + "5"); // 65
// console.log(typeof(6 + "5")); // string

// console.log("My points: " + 5 + 9); // My points : 14
// console.log(typeof("My points: " + 5 + 9));// string

// console.log(2 + 2); // 4
// console.log(typeof(2 + 2));// number

// console.log("11" + "14"); //1114
// console.log(typeof("11" + "14"));// string

// From 23rd June Practice on how to use JS

// BOOLEAN PRACTICE
// console.log(4 === 3); //false
// console.log(5 > 2); // true
// console.log(12 > 12); //false
// console.log(3 < 0); //false
// console.log(3 >= 3); // true
// console.log(11 <= 11); // true
// console.log(3 <= 2); //false

// Arrays - ordered list of items - composite / complex data type
// let featuredPosts = ["Check out my netflix clone" + "Here's the code for my project" + "I've just relaunched my portfolio"]

// some arrays look like this
//  let featuredPosts = [
//   "Check out my Netflix clone",
//   "Here's the code for my project",
//   "I've just relaunched my portfolio",
// ]

// console.log(featuredPosts[0]); // it will output "Check out my Netflix clone"

/* Exercise
1. Create an array that lists your i.e experience, education, licenses, skills or similar
2. The items of the array should be strings*/

// let experience = ["CEO at Scrimba", "Frontend Developer at Xeneta", "People counter "]

// For the experience array
// console.log(experience[1]); // it will output "Frontend Developer"
// console.log(experience[2]);// it will output "People counter"
// console.log(experience[0]); // It will output "CEO at Scrimba"

// To check the length of the array , we use variable.length

// console.log(experience.length);
// console.log(featuredPosts.length);

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age(number), and whether you like pizza(boolean)

// let per = ["Mbaegbu Chimdalu Justice", 35, false]

// Adding and removing items in an array

// We use push to add an item to an array
// let cardsss = [7, 4]
// cardsss.push(6)
// console.log(cardsss);

// Push the newMessage to the message array, and then log out the array

// let messages = [
//   "Hey, how's it going?",
//   "I'm great, thank you ! How about you?",
//   "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here !"
// messages.push(newMessage);
// console.log(messages);

// The output is below
/* [
    "Hey, how's it going?",
    "I'm great, thank you ! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here !"
]*/

// We use the pop to remove an item in an array
// messages.pop()

// let cards = [7, 3, 9, 18]
// Create a for loop that logs out all the cards in the array
// Use cards.length to specify the loop should run

// for (let index = 0; index < cards.length; index++) {
//     console.log(cards[index]);
// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     }
//     else if (player1Time > player2Time) {
//         return player2Time
//     }
//     else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace);

// function sumOfRaceTime () {
//     let sum = player1Time + player2Time
//     return sum
// }

// let totalTime = sumOfRaceTime()
// console.log(`The total race time for player One and player Two is ${totalTime}.`);

// How to generate random numbers
// let randomNumber = Math.random()
// console.log(randomNumber);

/*
What does Math.random() do ?

Your answer: it generates a random number between 0 and 1 (not inclusive 1) ranging from 0.000 ---> 0.999
// How to specify the range of numbers you want to be outputed , we use Math.random()* n, where "n" is the number you specified th counter to count to .

When you want to include 1, we use the (Math.random() * n ) + 1

Math. floor is used to remove the decimal points on the random numbers being generated

SYNTAX : Math.floor(Math.random() * n) + 1
*/

// How to create a dice function
// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }
// let diceNumber = rollDice()
// console.log(diceNumber);

// let randomNumber = Math.floor(Math.random() * 6) + 1

// console.log(randomNumber);
/*It would generate numbers from 0 to 6*/

// Math.floor

// let flooredNumber = Math.floor(23.45632)

// console.log(flooredNumber);

/*
What does Math.floor do to positive numbers?

It rounds the decimal number to a whole number irrespective if the number after the decimal point is ranging from five upwards.


In summary, it removes the decimals.
*/

// Logical AND operator -  &&

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true) {
//     if (givesCertificate === true) {
//         generateCertificate()
//     }
// }

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }
// else {
//     console.log("You've not completed the courses");

// }

// function generateCertificate() {
//     console.log("Generating certificate.....");
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = true

// if (hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }
// else {
//     console.log("You've exceeded your limit");
// }

// function showSolution() {
//     console.log("Showing the solution....");

// }

// OR OPERATOR - ||
// Create two boolean variables, likesDocumentaries and likesStartups

// let likesDocumentaries = true;
// let likesStartups = true;

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you'll like!");

// }

// INTRO TO OBJECTS DATATYPE
// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Justice Chimdalu",
//     length: 63,
//     level: 2,
//     isFree : true,
//     tags: ["html", "css"]
// }

// console.log(course.length);
// console.log(course.tags);

// using bracket notations
// console.log(course["tags"]);

// My first exercise on objects
/*1. Create an object that represents an airbnb castle listing.
2. It should contain at least one boolean, one string, one number, and one array
3. Log out at least two of the keys using the dot notation*/

// let castle = {
//     title: "Live like a king in my castle",
//     price : 100,
//     isSuperHost: true,
//     images: ["img/"]
// }

// console.log(castle.title);
// console.log(castle.price);

// 2nd July, 2025.
// Practice on Objects and Functions
// Questions
//Create a person object that contains three keys: name, age, and country.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person objects to create
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

// let personalData = {
//     name: "Justice",
//     age: 5,
//     country: "USA"
// }

// function logData() {
//     console.log(`${personalData.name} is ${personalData.age} years old and lives in ${personalData.country}.`);
// }
// logData()

// PRACTICE 2
// if..else statement

/*
1. Less than 6 years old -> free
2. 6 to 17 years old     -> child discount
3. 18 to 26 years old    -> student discount
4. 27 to 66 years old    -> full price
5. over 66 years old     -> senior citizen discount


Create a conditional statement (if/else/else if) that logs out the discount

The passenger will get based upon the value of the age variable
*/

// let age = 67
// if (age < 6) {
//     console.log("You're eligible for a free ride");
// }
// else if (age >= 6 && age <= 17) {
//     console.log("Eligible for: Child Discount");
// }
// else if (age >= 18 && age <= 26) {
//     console.log("Eligible for: Student Price");
// }
// else if (age >= 27 && age <= 66) {
//     console.log("Eligible for: Full price");
// }
// else if (age >= 66){
//     console.log("Eligible for: Senior Citizen Discount");
// }

// 3rd July, 2025
// Practice time on loops and array

/*
Use a for loop to log the following to the console

The 5 largest countries in the world:
- China
- India
- United States
- Indonesia
- Pakistan
*/

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// console.log("The 5 largest countries in the world: ");
// for (let index = 0; index < largeCountries.length; index++) {
//     console.log(`- ${largeCountries[index]}`);
// }

// Practice for push, pop, unshift and shift challenge
// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() and pop() and their counterparts unshift() and shift()
// Google how to use unshift() and shift()

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// shift() is being used to remove the first item in the array
// unshift does the opposite
// unshift("newItemToBeAdded")

// largeCountries.shift()
// largeCountries.unshift("Nigeria")
// console.log(largeCountries);

// Practice on logical operators

// If it is Friday the 13th, log out this spooky face: 😮
// Use the logical "AND operatoer - &&"

// let dayOfMonth = 13
// let weekDay = "Friday"

// if (dayOfMonth === 13 && weekDay === "Friday") {
//     console.log("😮");
// }

// 5th July, 2025.

// Create a function that returns a random item from the array

// let hands = ["rock", "paper", "scissor"]

// function rockPaperScissor() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }

// console.log(rockPaperScissor());

//26th July, 2025

// console.log(Boolean("")); // false
// console.log(Boolean("0")); // true
// console.log(Boolean(100)); // true
// console.log(Boolean(null)); // false
// console.log(Boolean([0])); // true
// console.log(Boolean(-0)); // false




// Code for the chrome extension without comment
let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

console.log(deleteBtn);
console.log(ulEl);
console.log(leadsFromLocalStorage);

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let index = 0; index < leads.length; index++) {
  listItems += `
  <li>
      <a target = '_blank' href ='${leads[index]}'>
        ${leads[index]}
      </a>
  </li>
  `;

  console.log(listItems);
  console.log(myLeads[index]);
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  console.log("double-clicked");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
});