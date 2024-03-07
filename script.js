const possibleChoices = ["rock", "paper", "scissors"];
const buttonChoices = document.querySelectorAll(".choice");
const newGameContainer = document.querySelector(".new-game-container");
const newGameButton = document.querySelector("#new-game-button");

const computerChoiceContainer = document.querySelector(".computers-choice");
const playerChoiceContainer = document.querySelector(".selected-choice");

const computerChoiceImage = document.createElement("img");
computerChoiceImage.setAttribute("width", "150");
const playerChoiceImage = document.createElement("img");
playerChoiceImage.setAttribute("width", "150");

const roundMessageRef = document.querySelector(".round-message");
const messageRef = document.querySelector(".message");
const playerPointsRef = document.querySelector(".players-points");
const computerPointsRef = document.querySelector(".computers-points");

let playerPoints = 0;
let computerPoints = 0;

playerPointsRef.textContent = playerPoints;
computerPointsRef.textContent = computerPoints;



function getComputerChoice() {

    const index = Math.floor(Math.random() * possibleChoices.length);

    return possibleChoices[index];
}

function setChoiceImage(playersChoice, computersChoice) {

    if (computerChoiceContainer.firstChild && playerChoiceContainer.firstChild) {

        computerChoiceContainer.removeChild(computerChoiceContainer.firstChild);
        playerChoiceContainer.removeChild(playerChoiceContainer.firstChild);

    }

    playerChoiceImage.setAttribute("src", "./" + playersChoice + ".png");
    computerChoiceImage.setAttribute("src", "./" + computersChoice + ".png");

    computerChoiceContainer.appendChild(computerChoiceImage);
    playerChoiceContainer.appendChild(playerChoiceImage);
}

buttonChoices.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.currentTarget.id);

        if (playerPoints < 5 && computerPoints < 5) {

            let playerChoice = e.currentTarget.id;
            let computerChoice = getComputerChoice();

            let game = playRound(playerChoice, computerChoice);

            setChoiceImage(playerChoice, computerChoice);

            if (game == "Draw.") {
                console.log("Draw.");
                roundMessageRef.textContent = "Draw round.";
            } else if (game == "Player wins.") {
                playerPoints++;
                playerPointsRef.textContent = playerPoints;
                console.log("Player won the round.");
                roundMessageRef.textContent = "Player won the round.";
            } else {
                computerPoints++;
                console.log("Computer won the round.");
                computerPointsRef.textContent = computerPoints;
                roundMessageRef.textContent = "Computer won the round.";
            }
        }

        if (playerPoints == 5) {

            messageRef.textContent = "Player won the game.";
            addNewGameSection();

        } else if (computerPoints == 5) {

            messageRef.textContent = "Computer won the game.";
            addNewGameSection();

        } else if (playerPoints > computerPoints) {

            messageRef.textContent = "Player leads.";

        } else if (computerPoints > playerPoints) {

            messageRef.textContent = "Computer leads.";

        } else if (computerPoints == playerPoints) {

            messageRef.textContent = "It is equal!";

        }

    })
})

function playRound(playerSelection, computerSelection) {

    if (computerSelection === playerSelection) {
        return "Draw.";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "Player wins.";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "Computer wins.";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "Computer wins.";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "Player wins.";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "Computer wins.";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "Player wins.";
    }
}

function addNewGameSection() {

    

    const heading = document.createElement("h3");
    heading.textContent = "Want to start a new game?";

    const button = document.createElement("button");
    button.setAttribute("id", "new-game-button");
    button.textContent = "Start new game";

    if (newGameContainer.children.length == 0) {

        newGameContainer.appendChild(heading);
        newGameContainer.appendChild(button);

    }
    
    

    button.addEventListener('click', () => {

        messageRef.textContent = "";
        roundMessageRef.textContent = "";

        playerPoints = 0;
        playerPointsRef.textContent = 0;

        computerPoints = 0;
        computerPointsRef.textContent = 0;

        button.parentNode.removeChild(button);
        heading.parentNode.removeChild(heading);

        computerChoiceContainer.removeChild(computerChoiceContainer.firstChild);
        playerChoiceContainer.removeChild(playerChoiceContainer.firstChild);

    })
}