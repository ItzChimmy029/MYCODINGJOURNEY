// let screen = document.getElementById("screen")
// let add = document.getElementById("add")
// let sub = document.getElementById("sub")
// let multiply = document.getElementById("multiply")
// let divide = document.getElementById("divide")
// let clear = document.getElementById("clear")
// let equal = document.getElementById("equal")


// let leftValue;
// let rightValue;
// let sign;
// let ans;


// function addToScreen(num) {
//     screen.innerHTML += num
// }
// function clearScreen() {
//     screen.innerHTML = ""
// }
// clear.addEventListener("click",clearScreen)
// //eval
// function addNum() {
//     sign = "+"
//     leftValue = parseFloat(screen.innerHTML);
//     console.log(typeof leftValue);
//     screen.innerHTML = ""
// }
// function subNum() {
//     sign = "-"
//     leftValue = parseFloat(screen.innerHTML);
//     console.log(leftValue);
//     screen.innerHTML = ""
// }
// function divideNum() {
//     sign = "/"
//     leftValue = parseFloat(screen.innerHTML);
//     console.log(leftValue);
//     screen.innerHTML = ""
// }
// function multiplyNum() {
//     sign = "*"
//     leftValue = parseFloat(screen.innerHTML);
//     console.log(leftValue);
//     screen.innerHTML = ""
// }

// add.addEventListener("click",addNum)
// sub.addEventListener("click",subNum)
// multiply.addEventListener("click",multiplyNum)
// divide.addEventListener("click",divideNum)

// function result() {
//     rightValue = parseFloat(screen.innerHTML);
//     screen.innerHTML = ""
//     console.log(sign);
//     if (sign == "+") {
//         ans = leftValue + rightValue
//     } else if(sign == "-") {
//         ans = leftValue - rightValue
//     } else if(sign == "*"){
//         ans = leftValue * rightValue
//     } else {
//         ans = leftValue / rightValue
//     }
//     screen.innerHTML = ans

    
// }

// equal.addEventListener("click",result)



// Date object
let date = new Date("2020")
let date1 = new Date()
let a = date.getFullYear()
let b = date1.getFullYear()

let para = document.getElementById("date")
para.innerHTML = `He is ${b-a} years old`
para.innerHTML = date.toLocaleDateString()


// para.innerHTML = date.getFullYear()
// const month = ["jan","feb","march","april","may","june","july","august","sept","oct","nov","dec"]

// para.innerHTML = month[date.getMonth()]

// para.innerHTML = date.getHours()
// para.innerHTML = date.getMinutes()
// para.innerHTML = date.getSeconds()
// para.innerHTML = date.getMilliseconds()
// para.innerHTML = date.getDate()
// para.innerHTML = date.getDay()
// para.innerHTML = Date.parse(date)
// para.innerHTML = date.getFullYear()
// para.innerHTML = Date.now(date)
// para.innerHTML = date.setFullYear()
// para.innerHTML = date.setMonth()
// para.innerHTML = date.getFullYear()

// let img = document.getElementById("image")
// // let imgSrc = img.src
// console.log(img.src);

// function toggleImage() {
//     if(img.src.endsWith("doctor.png")){
//         img.src = "about.png"   
//     } else {
//         img.src = "doctor.png"
//     }
// }