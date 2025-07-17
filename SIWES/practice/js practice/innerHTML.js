// Use .innerHTML to render a Buy! button inside the div container

const container = document.getElementById("container")
container.innerHTML = "<button >Buy!</button>"

// const Paragraph = document.getElementById("par-el")
// console.log(Paragraph);


container.addEventListener("click", function() {
    console.log("Yay, you just clicked me");
    // Paragraph.textContent = "Thanks for buying"
    container.innerHTML += "<p>Thanks for yor patronage</p>"
})