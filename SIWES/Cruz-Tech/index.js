// var tweet = prompt("Post your tweet: ");
// var slicedOutput = tweet.slice(0,10);
// alert("Your sliced tweet is " +slicedOutput);

// function capitalisedName() {
//     alert("Hello");
//     var nameOfUser = prompt("What's your name ?");
//     var slicedName = nameOfUser.slice(0,1);
//     var upperCase = slicedName.toUpperCase();
//     var slicedRemainingLetters = nameOfUser.slice(1);
//     var lowerCase = slicedRemainingLetters.toLowerCase();
//     alert("Your correct name is " + upperCase + lowerCase);
// }
// capitalisedName()

// Mathematical operations
// console.log(6 + 6);
// console.log(6 - 6)
// console.log(6 / 6)
// console.log(6 * 6)
// console.log(6 % 6)

// let x = 1;
// console.log(x++)
// console.log(x++)
// console.log(x++)
// console.log(x++)
// console.log(x++)
// console.log(x++)
// console.log(x++)


// Functions arguments and parameters means creating a space for an input within a function

// function nameArgument(cost) {
//     capitalisedName()
//     var discount = (cost/2)
//     alert("Thanks for your patronage, your cost is "+ discount)
// }

// nameArgument(10)

// function orderDetails(price) {
//     alert("Good Day Sir/Ma !!")
//     var orderName = prompt("What's your order for today ?")
//     alert("You are to pay a sum of "+ (price  - 2))
// }
// orderDetails(1000)

// let n = Math.random()
// let m = Math.floor((n*6))+1
// console.log(m)
// if (m<3) {
//     alert("Your score is below average")
// }
// else{
//     alert("You have been admitted")
// }


// let n = Math.random()
// let m = Math.floor((n*100))+1
// console.log(m)
// if (m<50) {
//     alert("You guys ain't compatible 😂😂")
// }
// else if(m>=50){
//     alert("You can have it 😊")
// }

// let n = 2
// let m = "2"

// if(m === 2) {
//     alert("Right")
// }
// else {
//     alert("Wrong")
// }

// console.log(m)


// BMI CALCULTOR
// function BMICalculator(){
//     let weightOfUser = prompt("What's your weight in Kg ?")
//     let heightOfUser = prompt("What's your height in m ?")
//     let squaredHeight = Math.pow(heightOfUser, 2)
//     console.log(squaredHeight)
//     let BMI = weightOfUser / squaredHeight
//     let roundedBMI = Math.floor(BMI)
//     alert("Your BMI is " + roundedBMI)
// }
// BMICalculator()


// Array is a collection of Item that are related and can be stored together into the same container



// name.pop() // To remove the last item on the array
// name.push("Kanye") // To add an item to the array from the last
//name.shift() // Removes the first item on the array
//name.unshift() // adds the first item on the array
// name.splice(2, 1, "Kanye") // Removes the item at index 2 and replaces it with Kanye
// name.splice(2, 0, "Kanye") // Adds Kanye at index 2 without removing any item
// console.log(name);


// let nameOfGuest = ["Michael", "Frank", "Abdul", "Justice", "Khali"]

// let name = prompt("What's your name ?")
// let nameSlice = name.slice(0,1)
// let capitalizedName = nameSlice.toUpperCase()
// let otherLetters = name.slice(1)
// let lowerCaseName = otherLetters.toLowerCase()
// let fullName = capitalizedName + lowerCaseName

// if (nameOfGuest.includes(fullName)) {
//     alert("You're welcome to the event");
// }
// else{
//     alert("Please kindly get lost");
// }



// FIZZBUZZ
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
// }

// USING ARRAY TO SOLVE THE FIZZBUZZ PROBLEM
// let fizzBuzzArray = [];
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         fizzBuzzArray.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//         fizzBuzzArray.push("Fizz");
//     } else if (i % 5 === 0) {
//         fizzBuzzArray.push("Buzz");
//     } else {
//         fizzBuzzArray.push(i);
//     }
// }
// console.log(fizzBuzzArray);







// let output = []
// let counter = 1

// function fizzBuzz() {
//     if (counter % 3 === 0 && counter % 5 === 0) {
//         output.push("FizzBuzz");
//     } else if (counter % 3 === 0) {
//         output.push("Fizz");
//     } else if (counter % 5 === 0) {
//         output.push("Buzz");
//     } else {
//         output.push(counter);
//     }
//     counter++;
//     console.log(output);
// }
// fizzBuzz()




// WHILE LOOP
// let i = 1;
// let output = []
// while (i <= 100) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         output.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//         output.push("Fizz");
//     } else if (i % 5 === 0) {
//         output.push("Buzz");
//     } else {
//         output.push(i);
//     }
//     i++;
// }
// console.log(output);

// DO WHILE
// let j = 1;
// let output = []
// do {
//     if (j % 3 === 0 && j % 5 === 0) {
//         output.push("FizzBuzz");
//     } else if (j % 3 === 0) {
//         output.push("Fizz");
//     } else if (j % 5 === 0) {
//         output.push("Buzz");
//     } else {
//         output.push(j);
//     }
//     j++;
// } while (j <= 100);
// console.log(output);



// let a = "3"
// let b = "6"
// let addition = Number(a) + Number(b) // Converts the string to number
// let summation = +a + +b // Converts the string to number
// console.log(addition)
// console.log(summation)


// let output = []
// for (let count = 10; count < 21; count +=1 ){
//   output.push(count);
//   console.log(output)
// }


// DOM- Document Object Model
/*
4 ways of selecting HTML Elements with JS
1. getElementById()
2. getElementsByClassName()
3. getElementsByTagName()
4. querySelector()
   4b. querySelectorAll()
*/




// let pTagName = document.getElementsByTagName("p")
// console.log(pTagName)
// pTagName[0].textContent += "I AM LEARNING JAVASCRIPT"

