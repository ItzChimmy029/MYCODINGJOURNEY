let totalScore = 0
for (let i = 1; 1 <= 5; i++) {
    let Score = prompt("Enter your score");
    totalScore += parseInt(Score);
}

console.log("Your total score is " + totalScore);