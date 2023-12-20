"use strict";

// CREATE A FUNCTION FOR THE CHOICE OF THE COMPUTER
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// CREATING JS VARIABLES FOR ROCK/PAPER/SCISSORS HTML ELEMENTS
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// CREATING A JS VARIABLE TO DISPLAY THE RESULTS
const displayResults = document.querySelector("#results");

// DEFINING PLAYER SCORES
let playerScore = 0;
let computerScore = 0;

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
    playerScore++;
    return playerWin;
  } else {
    const computerWin = `You Lost! ${computerSelection} beats ${playerSelection}!`;
    computerScore++;
    return computerWin;
  }
}

// MAKING PLAYER SELECTION

// Sub-problem 1: Creating a generic function to stick to DRY principles
function playerSelectionHandler(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  displayResults.textContent = result;
  computerChoice.textContent = `Computers chose ${computerSelection}.`;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
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

// CREATING JS VARIABLES FOR HTML ELEMENTS
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const computerChoice = document.querySelector("#comp-choice");

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
