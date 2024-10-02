// Append character to the display
function appendCharacter(character) {
    document.getElementById('result').value += character;
}

// Clear the display
function clearScreen() {
    document.getElementById('result').value = "";
}

// Delete the last character
function deleteChar() {
    let current = document.getElementById('result').value;
    document.getElementById('result').value = current.substring(0, current.length - 1);
}

// Calculate the result
function calculate() {
    let expression = document.getElementById('result').value;
    if (expression) {
        try {
            document.getElementById('result').value = eval(expression);
        } catch (e) {
            document.getElementById('result').value = "Error";
        }
    }
}


function percentage() {
    let number = parseFloat(document.getElementById('percentage').value)
    document.getElementById('percentage').value = number / 100;
    
}
// function calculateResult() {
//     let displayValue = document.getElementById('display').value;

//     if (displayValue === "") {
//       document.getElementById('display').value = 'Error';
//     } 
//     else if (/[^0-9+\-*/().]/.test(displayValue)) {
//       document.getElementById('display').value = 'Error';
//     } 
//     else {
//       let result = eval(displayValue);
//       document.getElementById('display').value = result;
//     }
//   }


let date = new Date(date.getFullYear(), date.getMonth(), date.get)
let date2 = new Date()
let a = date.getFullYear(), b = date.getFullYear()
console.log(b-a) 

