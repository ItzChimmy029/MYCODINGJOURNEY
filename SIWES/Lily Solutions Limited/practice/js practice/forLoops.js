let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
let greetingEl = document.getElementById("greeting-el")

for (let index = 0; index < sentence.length; index++) {
    greetingEl.textContent += sentence[index]
}