let num1 = 0
let num2 = 0

let sumEl = document.getElementById("sum-el")

function add() {
    console.log("num1-el", document.getElementById("num1-el").value) // Check if the value is being recognized on the console for num1
    console.log("num2-el", document.getElementById("num2-el").value) //  Check if the value is being recognized on the console for num2
    num1 =  document.getElementById("num1-el").value
    num2 =   document.getElementById("num2-el").value


    let result = parseInt(num1)  + parseInt(num2)
    sumEl.textContent = "Sum: " + result
}
function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Difference: " + result
}
function divide() {
    let result = num1 / num2
    sumEl.textContent = "Quotient: " + result
}
function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Product: " + result
}