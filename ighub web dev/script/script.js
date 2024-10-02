let screen = document.getElementById("screen")
let add = document.getElementById("add")
let sub = document.getElementById("sub")
let multiply = document.getElementById("multiply")
let divide = document.getElementById("divide")
let clear = document.getElementById("clear")
let equal = document.getElementById("equal")


let leftValue;
let rightValue;
let sign;
let ans;


function addToScreen(num) {
    screen.innerHTML += num
}
function clearScreen() {
    screen.innerHTML = ""
}
clear.addEventListener("click",clearScreen)
//eval
function addNum() {
    sign = "+"
    leftValue = parseFloat(screen.innerHTML);
    console.log(typeof leftValue);
    screen.innerHTML = ""
}
function subNum() {
    sign = "-"
    leftValue = parseFloat(screen.innerHTML);
    console.log(leftValue);
    screen.innerHTML = ""
}
function divideNum() {
    sign = "/"
    leftValue = parseFloat(screen.innerHTML);
    console.log(leftValue);
    screen.innerHTML = ""
}
function multiplyNum() {
    sign = "*"
    leftValue = parseFloat(screen.innerHTML);
    console.log(leftValue);
    screen.innerHTML = ""
}

add.addEventListener("click",addNum)
sub.addEventListener("click",subNum)
multiply.addEventListener("click",multiplyNum)
divide.addEventListener("click",divideNum)

function result() {
    rightValue = parseFloat(screen.innerHTML);
    screen.innerHTML = ""
    console.log(sign);
    if (sign == "+") {
        ans = leftValue + rightValue
    } else if(sign == "-") {
        ans = leftValue - rightValue
    } else if(sign == "*"){
        ans = leftValue * rightValue
    } else {
        ans = leftValue / rightValue
    }
    screen.innerHTML = ans

    
}

equal.addEventListener("click",result)
