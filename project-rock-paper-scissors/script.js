function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
function roundWinner(playerSelection, computerSelection) {
    console.log(playerSelection)
    switch (true) {
        case (playerSelection == 'rock' && computerSelection == 'rock'):
            return "It's a tie!!";

        case (playerSelection == 'rock' && computerSelection == 'paper'):
            return "Computer Won";

        case (playerSelection == 'rock' && computerSelection == 'scissors'):
            return "Player Won";

        case (playerSelection == 'paper' && computerSelection == 'paper'):
            return "It's a tie!!";

        case (playerSelection == 'paper' && computerSelection == 'scissors'):
            return "Computer Won";

        case (playerSelection == 'paper' && computerSelection == 'rock'):
            return "Player Won";

        case (playerSelection == 'scissors' && computerSelection == 'scissors'):
            return "It's a tie!!";

        case (playerSelection == 'scissors' && computerSelection == 'rock'):
            return "Computer Won";

        case (playerSelection == 'scissors' && computerSelection == 'paper'):
            return "Player Won";
        case (playerSelection == 'invalid'):
            return "Invalid choice from user";

    }
}

function game() {
    let userWins = 0, computerWins = 0, result, userInput;
    for (let i = 0; i < 5; i++) {
        userInput = prompt("Enter a choice to play the game: ");
        if (userInput === 'paper' || userInput === 'rock' || userInput === 'scissors') {
            userInput = userInput;
        }
        else { userInput = "invalid"; }

        result = roundWinner(userInput, computerPlay());
        alert(`${result} in Round ${i + 1}`);
        console.log(`${result} in Round ${i + 1}`);
        if (result === "Computer Won") { computerWins += 1; }
        else if (result === "Player Won") { userWins += 1; }

    }
    if (userWins > computerWins) { console.log("Player won the entire game"); }
    else if (computerWins > userWins) { console.log("Computer won the entire game"); }
    else { console.log("Game is a tie!!!"); }
}
game();


