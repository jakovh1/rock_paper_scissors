const possibleChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    const index = Math.floor(Math.random() * possibleChoices.length);

    return possibleChoices[index];
}

function getPlayerChoice() {

    let userInput = prompt("Please enter your choice:").toLowerCase();

    if (possibleChoices.includes(userInput)) {
        return userInput;
    } else {
        console.log("Please enter a valid choice (rock, paper, scissors).");
        return getPlayerChoice();
    }
}
//console.log(getComputerChoice()); 

function playRound(playerSelection, computerSelection) {

    let lowerPlayerSelection = playerSelection.toLowerCase();
    let lowerComputerSelection = computerSelection.toLowerCase();

    if (possibleChoices.includes(lowerPlayerSelection)) {
        if (lowerComputerSelection === lowerPlayerSelection) {
            return "Draw.";
        } else if (lowerComputerSelection === "rock" && lowerPlayerSelection === "paper") {
            return "Player wins.";
        } else if (lowerComputerSelection === "rock" && lowerPlayerSelection === "scissors") {
            return "Computer wins.";
        } else if (lowerComputerSelection === "paper" && lowerPlayerSelection === "rock") {
            return "Computer wins.";
        } else if (lowerComputerSelection === "paper" && lowerPlayerSelection === "scissors") {
            return "Player wins.";
        } else if (lowerComputerSelection === "scissors" && lowerPlayerSelection === "paper") {
            return "Computer wins.";
        } else if (lowerComputerSelection === "scissors" && lowerPlayerSelection === "rock") {
            return "Player wins.";
        }
    } else {
        console.log("Please enter a valid 'rock-paper-scissors' value.");
    }
}

function playGame() {
    let playerPoints = 0;
    let computerPoints = 0;

    while (playerPoints < 5 && computerPoints < 5) {

        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        let game = playRound(playerChoice, computerChoice);
        if (game == "Draw.") {
            console.log("Draw.")
            continue;
        } else if (game == "Player wins.") {
            playerPoints++;
            console.log("Player won the round.");
        } else {
            computerPoints++;
            console.log("Computer won the round.");
        }
    }

    if (playerPoints == 5) {
        console.log("Player won the game.");
    } else {
        console.log("Computer won the game.");
    }

    return;
}

playGame();