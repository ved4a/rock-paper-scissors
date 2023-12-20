"use strict";

// CREATE A FUNCTION CALLED getComputerChoice THAT WILL RANDOMLY RETURN ROCK, PAPER, OR SCISSORS

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// WRITE A FUNCTION THAT PLAYS A SINGLE ROUND OF ROCK PAPER SCISSORS

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    const draw = `Draw! Both of you chose ${computerSelection}.`;
    return draw;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    const playerWin = `You Won! ${playerSelection} beats ${computerSelection}!`;
    return playerWin;
  } else {
    const computerWin = `You Lost! ${computerSelection} beats ${playerSelection}!`;
    return computerWin;
  }
}

// DISPLAYING THE RESULTS
const displayResults = document.querySelector("#results");

// CREATING JS VARIABLES FOR ROCK/PAPER/SCISSORS HTML ELEMENTS
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// MAKING PLAYER SELECTION

// Sub-problem 1: Creating a generic function to stick to DRY principles
function playerSelectionHandler(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  displayResults.textContent = result;
  computerChoice.textContent = `Computers chose ${computerSelection}.`;
}

// Sub-problem 2: Adding event listeners to the respective buttons
rock.addEventListener("click", function () {
  playerSelectionHandler("Rock");
});

paper.addEventListener("click", function () {
  playerSelectionHandler("Paper");
});

scissors.addEventListener("click", function () {
  playerSelectionHandler("Scissors");
});

// rock.addEventListener("click", function () {
//   const computerSelection = getComputerChoice();
//   const result = playRound("Rock", computerSelection);
//   displayResults.textContent = result;
// });

// paper.addEventListener("click", function () {
//   const computerSelection = getComputerChoice();
//   const result = playRound("Paper", computerSelection);
//   displayResults.textContent = result;
// });

// scissors.addEventListener("click", function () {
//   const computerSelection = getComputerChoice();
//   const result = playRound("Scissors", computerSelection);
//   displayResults.textContent = result;
// });

// CREATING JS VARIABLES FOR HTML ELEMENTS
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const computerChoice = document.querySelector("#comp-choice");

// WRITE A FUNCTION THAT PLAYS 5 ROUNDS OF THE GAME
function game() {
  let playerScore;
  let computerScore;

  for (let i = 0; i < 5; i++) {
    result = playRound(
      playerSelectionHandler(playerSelection),
      computerSelection
    );

    if (result.includes("Won")) {
      playerScore++;
    } else if (result.includes("Lost")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    displayResults.textContent = "You have saved humanity. Congratulations!";
  } else if (playerScore < computerScore) {
    displayResults.textContent =
      "Technology reigns supreme...good try comrade.";
  } else if ((playerScore = computerScore)) {
    displayResults.textContent =
      "Humanity and technology are evenly matched...we'll get them some other day.";
  }

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

game();

// New function for a 5 round game
// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt("Do you choose rock, paper, or scissors?");
//     const computerSelection = getComputerChoice();
//     console.log(`Computer chose ${computerSelection}.`);
//     const result = playRound(playerSelection, computerSelection);
//     console.log(result);

//     if (result.includes("Win")) {
//       playerScore++;
//     } else if (result.includes("Lose")) {
//       computerScore++;
//     }
//   }

//   if (playerScore > computerScore) {
//     console.log("Congrats! You won the game 🌷!");
//   } else if (playerScore < computerScore) {
//     console.log("Computer wins the game 😢");
//   } else {
//     console.log("It's a tie 😮!");
//   }
// }

// game();
