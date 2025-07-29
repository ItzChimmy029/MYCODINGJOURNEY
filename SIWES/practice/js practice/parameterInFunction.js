// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(name) {
//     welcomeEl.textContent = "Welcome back, " + name + " ❤️"
// }
// greetUser("Justice")


// const welcomeEl = document.getElementById("welcome-el")

// // Give the parameter, greeting, that replaces "Welcome back"

// //                 parameters
// function greetUser(greeting, name, emoji) {
//     welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
// }
// //        arguments
// greetUser("Welcome back", "JUSTICE", "🫂")

// //  Numbers as function parameters
// function add(num1, num2) {
//     console.log(num1 + num2)
// }
// add(3, 4)

// Arrays as parameters

// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(arr) {
    return arr[0]
}

let firstCard = getFirst([10, 2, 5])
console.log(firstCard)


// Call it with an array as an argument to verify that it works