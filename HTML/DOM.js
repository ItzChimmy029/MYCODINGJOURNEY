// DOCUMENT OBJECT MODEL
// let firstp = document.getElementById('first');
// let button = document.getElementById('display');


// let firstname = prompt("what is your name");
// let text = ("Good day, " + firstname);
// let text = "good day"

// function greetUser(){
//     firstp.innerHTML = text
// }

// const user ={
//     lastname: "obi",
//     firstname: "Ada",
//     otherNames: ['emeka', 'solo', 'emma'],
//     age:19,
//     fullname:function(){
//         return this.firstname + " "+ this.lastname + " "+ this.otherNames
//     }
// }
// console.log(user.fullname());

// let button = document.getElementById('display');
// let text = " good day"
// let classArray = document.getElementsByClassName("second")
// console.log(classArray[2]);  //[0] the array braces is used to choose the <P> you want to work with

// function greetUser(){
//     classArray[1].innerHTML = text  //this is where you choose the <p> you want to work with, (the variable in text overrides the content in the original html <p>)
// }

// function greetUser(){
//     classArray[0].innerHTML += text  //this is where you choose the <p> you want to work with, (the variable in text overrides the content in the original html <p>)
// }

// let div = document.getElementById('container');

// CREATING AN HTML ELEMENT IN THE JAVASCRIPT WITH STYLING
// let para = document.createElement("p") //creates a <p> tag
// para.className = 'CreatedPtag';
// para.innerHTML = "i'm a new paragraph";
// para.style.color = "blue";
// para.style.fontSize = "5em";
// para.style.backgroundColor ="orange";
// div.appendChild(para);


// // -------
// let ul = document.getElementById('give');

// let line = document.createElement("li");
// line.className  = 'CreatedLine';
// line.innerHTML = "A new Line";
// line.style.color = "cyan";
// line.style.textDecoration = "underline";
// ul.appendChild(line);


//-------
//IMAGE ELEMENT DIV
// let div = document.getElementById('container1');

// let image = document.createElement("img")
// image.src = "download.png";
// image.alt = "checked background"

// div.appendChild(image);


//-----
// const students = ["precious", "favour", "ebube", "amanda", "presh"]
// students.map((individualStudent)=>{
// let para = document.createElement("li");
// para.innerHTML = individualStudent
// para.style.color = "red";
// div.appendChild(para)
// }) 


//-----
// // ACCESSING ELEMENTS USING TAG NAME
// const header = document.getElementsByTagName('main')[0];
// console.log(header);



//------

//----
//DIFFERENCE BETWEEN INNERHTML AND TEXT CONTENT---BOTH ARE USED TO ACCESS AND MANIPULATE THE CONTENT OF HTML
// let content = document.getElementById('text');
// content.innerHTML= "<b>Good bye!</b>";
// content.textContent= "<b>Good bye!</b>";

//  console.log(content.innerHTML);
//  console.log(content.textContent);



//------
// REMOVING AN ELEMENT
// const header1 = document.getElementById('head2');
// header1.remove();


//------
//ADDING NINE PROMPTS

// let ol = document.getElementById('container2');

// const students = [];
// for (let i = 1; i < 10; i++){
//     let studentName = prompt(`Enter name of student ${i}:`)
//     students.push(studentName);

// }
// students.map((individualStudent)=>{
// let para = document.createElement("li");
// para.innerHTML = individualStudent;
// para.style.color = "blue";
// ol.appendChild(para)
// })

//MY LITTLE PRACTICE
// const header = document.getElementsByTagName('h1');
// let text = "HEADER 1"

// function head(){
//     header.innerHTML = text
// }

// To access the value of an input,we use input.value

