// 1. Create two variables, firstCard and secondCard.

// Set their values to a random number between 2-11.

// 2. Create a variable, sum, and set it to the sum of the cards

// let firstCard = parseInt(prompt("Input the first num: "))
// let secondCard = parseInt(prompt("Input the second num: "))
// let sum = firstCard + secondCard

// if (sum < 21) {
//     console.log("Do you want to draw a new card? 🥲");
// }
// else if (sum === 21) {
//     console.log("Woooo,you've got blackjack!!! 😊");
// }
// else if (sum > 21) {
//     console.log("You are out of the game ! 😭");
// }

// let age = 20;

// if (age < 21) {
//     console.log("You can't enter the club!");
// }
// else {
//     console.log("You're welcome!!");

// }

// let age = 150;
// if (age < 100) {
//     console.log("You're not eligible!");
// }
// else if (age === 100) {
//     console.log("Here's your birthday card from the King!");
// }
// else {
//     console.log("Not eligible, you've already gotten one!");
// }

// 1. Create two variables, firstCard and secondCard.

// Set their values to a random number between 2-11.

// 2. Create a variable, sum, and set it to the sum of the cards


  // let firstCard = getRandomCard();
  // let secondCard = getRandomCard();



let player = {
   name : "Per",
   chips : 200,
   // methods ie. functions in an object
   sayHello: function() {
    console.log("Hello Gamer");
   }
}

player.sayHello()

  let cards = [] // array- ordered list of items
  let sum = 0;
  let hasBlackJack = false;
  let isAlive = false;
  let message = "";
  let messageEl = document.getElementById("message-el");
  let sumEl = document.getElementById("sum-el")
  // let sumEl = document.querySelector("#sum-el"); // Using another method for calling a selector in HTML
  let cardsEl = document.getElementById("cards-el")

// Object
 let playerEl = document.getElementById("player-el")
 playerEl.textContent = player.name + ": $" + player.chips


  console.log(cards);
  console.log(messageEl);
  console.log(sumEl);
  console.log(cardsEl);
  console.log(playerEl);
  

  function getRandomCard() {

    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber  > 10){
      return 10
    }
    else if (randomNumber === 1) {
      return 11
    }
    else {
      return randomNumber
    }
  }


  function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame()
}


  function renderGame() {
    cardsEl.textContent = "Cards: "

  // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
  // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
// Create a for loop that renders out all the cards instead of just two
for (let i=0; i < cards.length; i++){
  cardsEl.textContent += cards[i] + " "
}

//render out firstCard and secondCard
    sumEl.textContent = "Sum: " + sum;
    
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Woooo, you've got blackjack!!!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game !";
    isAlive = false;
  }

  // CASH OUT
  // console.log(hasBlackJack);
  // console.log(isAlive);
  // console.log(message);

  messageEl.textContent = message;

}
function newCard() {
    
   
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards);
    renderGame()
    console.log("Drawing a new card from the desk !");
}
}





// FOR LOOP

/* Here's how the for loop works
for example,
we need to count to ten

Where should we START counting?
Where is the FINISH line ?
What's the STEP SIZE we should use ?
*/

//    START          FINISH     STEP SIZE
for (let count = 10; count < 21; count +=2 ){
  console.log(count);
}

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

// for (let index = 10; index < 101; index+=10) {
//   console.log(index);
// }


// For loops and array

// let messages = [
//   "Hey, how's it going?",
//   "I'm great, thank you ! How about you?",
//   "All good. Been working on my portfolio lately.",
//   "Same here !",
//   "Great to hear",
//   "Lol",
//   "Lolzzz"
// ]

// for (let i = 0; i < messages.length; i+=1) {
//   console.log(messages[i]);
// }