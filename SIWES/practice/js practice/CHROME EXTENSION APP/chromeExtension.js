// function saveLead () {
//     console.log("Button Clicked from onclick attribute !!!");
// }

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

console.log(ulEl);

//How to use addEventListener()
// variable.addEventListener("action to be taken", function() {
// your js code .....
// })

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
  renderLeads();
});

// wrap the code below in a renderLeads() function
function renderLeads() {
  // 1. Create a variable, listItems,to hold all the HTML for the list items
  let listItems = "";
  // 2. Assign it to an empty string to begin with
  for (let index = 0; index < myLeads.length; index++) {
    //  listItems += "<li><a target = '_blank' href =' " + myLeads[index] + " '>" + myLeads[index] + "</a></li>";

    // Using Template String `${}`
    listItems += `
  <li>
      <a target = '_blank' href ='${myLeads[index]}'>
        ${myLeads[index]}
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
