"use strict";

// Create a function called getComputerChoice that will randomly return Rock, Paper, or Scissors.

function getComputerChoice() {
  // Sub-problem 1: create a list of choices
  const choices = ["Rock", "Paper", "Scissors"];

  // Sub-problem 2: element of "random"
  const randomChoice = Math.floor(Math.random() * choices.length);

  // Sub-problem 3: returning the value
  return choices[randomChoice];
}

// Testing the function
console.log(getComputerChoice());

// Write a function that plays a single round of Rock Paper Scissors

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

// Making player selection
// const playerSelection = "paper"

// Creating computer selection
const computerSelection = getComputerChoice();

// Testing for bugs
console.log(computerSelection);

// One-round game
// console.log(playRound(playerSelection, computerSelection));

// New function for a 5 round game
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Do you choose rock, paper, or scissors?");
    const computerSelection = getComputerChoice();
    console.log(`Computer chose ${computerSelection}.`);
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("Congrats! You won the game 🌷!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game 😢");
  } else {
    console.log("It's a tie 😮!");
  }
}

game();
