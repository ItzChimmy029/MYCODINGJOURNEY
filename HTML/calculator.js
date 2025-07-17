// function appendToDisplay(value) {
//     document.getElementById('display').value += value;
//   }
  
//   function clearDisplay() {
//     document.getElementById('display').value = '';
//   }
  
//   function deleteLast() {
//     let display = document.getElementById('display').value;
//     document.getElementById('display').value = display.slice(0, -1);
//   }
  
//   function calculateResult() {
//     try {
//       let result = eval(document.getElementById('display').value);
//       document.getElementById('display').value = result;
//     } catch (error) {
//       document.getElementById('display').value = 'Error';
//     }
//   }



let toggleParenthesis = true; // Flag to track which parenthesis should be added next

function appendToDisplay(value) {

  // document.getElementById('display').value =  document.getElementById('display').value + value;
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
  toggleParenthesis = true; // Reset parenthesis toggle on clear
}

function deleteLast() {
  let display = document.getElementById('display').value;
  document.getElementById('display').value = display.slice(0, -1);
}

function calculateResult() {
  let displayValue = document.getElementById('display').value;

  if (displayValue === "") {
    document.getElementById('display').value = 'Error';
  } else if (/[^0-9+\-*/().]/.test(displayValue)) {
    document.getElementById('display').value = 'Error';
  } else {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
  }
}

// Toggle between "(" and ")" when the button is clicked
function toggleParenthesisButton() {
  if (toggleParenthesis) {
    appendToDisplay('(');  // Append left parenthesis
  } else {
    appendToDisplay(')');  // Append right parenthesis
  }
  toggleParenthesis = !toggleParenthesis; // Switch the flag
}