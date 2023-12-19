"use strict";

// CREATE A FUNCTION CALLED getComputerChoice THAT WILL RANDOMLY RETURN ROCK, PAPER, OR SCISSORS

function getComputerChoice() {
  // Sub-problem 1: create a list of choices
  const choices = ["Rock", "Paper", "Scissors"];

  // Sub-problem 2: element of "random"
  const randomChoice = Math.floor(Math.random() * choices.length);

  // Sub-problem 3: returning the value
  return choices[randomChoice];
}

// TESTING THE FUNCTION
console.log(getComputerChoice());

// WRITE A FUNCTION THAT PLAYS A SINGLE ROUND OF ROCK PAPER SCISSORS

// Sub-problem 1: making a function that takes 2 parameters
function playRound(playerSelection, computerSelection) {
  // Making it case-insensitive
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  // Sub-problem 2: declaring a winner
  if (playerSelection == computerSelection) {
    const draw = `Draw! Both of you chose ${computerSelection}.`;
    return draw;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    const playerWin = `You Win! ${playerSelection} beats ${computerSelection}!`;
    return playerWin;
  } else {
    const computerWin = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    return computerWin;
  }
}

// MAKING PLAYER SELECTION
// Initial attempt: no GUI
// const playerSelection = "paper"
// Next attempt: DOM Manipulation

// CREATING COMPUTER SELECTION
const computerSelection = getComputerChoice();

// ADDING EVENT LISTENERS TO THE BUTTONS
// Sub-part 1: linking buttons from HTML to JS
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
// Sub-part 2: creating event listeners for buttons
rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

// TESTING FOR BUGS
console.log(computerSelection);

// One-round game
// console.log(playRound(playerSelection, computerSelection));

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
