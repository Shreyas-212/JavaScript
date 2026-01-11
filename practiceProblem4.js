let gameNum = 25;

let userNum = prompt("Enter the game number: ");

while (userNum != gameNum) {
    userNum = prompt("You have entered wrong number. Guess again : ");
}

console.log("Congratulations, you entered the right number");