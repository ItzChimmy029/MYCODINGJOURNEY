// function saveLead () {
//     console.log("Button Clicked from onclick attribute !!!");
// }


// How to store an array in localStorage
// let myLeads = `["www.awesomelead.com"]`;

// 1. Turn the myLeads atring into an array
// myLeads = JSON.parse(myLeads)

// 2. Push a new value to the array
// myLeads.push("www.epiclead.com")

// 3. Turn the array into a string again
// myLeads = JSON.stringify(myLeads)

// 4. Console.log the string using typeof to verify that it's a string
// console.log(typeof myLeads)

let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
console.log(deleteBtn);

// Local Storage usage
// localStorage.setItem("myLeads", "www.examplelead.com")
// console.log( localStorage.getItem("myLeads") )

// localStorage.setItem("myName", "Justice")
// console.log( localStorage.getItem("myName") )

// localStorage.clear()

// Get the leads from the localStorage - PS: JSON.parse()
//Store it in a variable, leadsFromLocalStorage
// Log out the variable

// localStorage.clear()

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage);


console.log(ulEl);

//How to use addEventListener()
// variable.addEventListener("action to be taken", function() {
// your js code .....
// })

// Checking localStorage before rendering

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

// const tabs = [
//   {url:"https://www.linkedin.com/in/chimdalu-justice-24088625b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
// ]

//  Listen for clicks on tebBtn. Log the URL to the console

tabBtn.addEventListener("click", function() {
  // console.log(tabs[0].url)
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // let activeTab = tabs[0]
    // let activeTabId = activeTab.id
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads);
  })
})

// Refactor the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations
// of the function as well

// wrap the code below in a renderLeads() function
function render(leads) {
  // 1. Create a variable, listItems,to hold all the HTML for the list items
  let listItems = "";
  // 2. Assign it to an empty string to begin with
  for (let index = 0; index < leads.length; index++) {
    //  listItems += "<li><a target = '_blank' href =' " + myLeads[index] + " '>" + myLeads[index] + "</a></li>";

    // Using Template String `${}`
    listItems += `
  <li>
      <a target = '_blank' href ='${leads[index]}'>
        ${leads[index]}
      </a>
  </li>
  `;

    console.log(listItems);
    // create element
    // set text content
    // append to ul
    // const li = document.createElement("li")
    // li.textContent = myLeads[index]
    // ulEl.append(li)
    console.log(myLeads[index]);
  }
  // 3. Render the listItems inside the unordered list using ulEl.innerHTML
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function() {
  console.log("double-clicked");
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
// Save the myLeads array to localStorage
// PS: remember JSON.stringify()
localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads);
  console.log( localStorage.getItem("myLeads"));
});