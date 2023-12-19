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
    const playerWin = `You Win! ${playerSelection} beats ${computerSelection}!`;
    return playerWin;
  } else {
    const computerWin = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    return computerWin;
  }
}

// DISPLAYING THE RESULTS
const displayResults = document.querySelector("#results");

// MAKING PLAYER SELECTION

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const result = playRound("Rock", computerSelection);
  displayResults.textContent = result;
});

paper.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const result = playRound("Paper", computerSelection);
  displayResults.textContent = result;
});

scissors.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const result = playRound("Scissors", computerSelection);
  displayResults.textContent = result;
});

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {}
}

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
