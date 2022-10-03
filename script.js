let playerScore = 0,
  computerScore = 0;

// // OPTIONS ARRAY
const options = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("button");
const result = document.querySelector("h1");
const roundResult = document.querySelector("h2");
const playerResult = document.querySelector(".player-score");
const computerResult = document.querySelector(".computer-score");
// // RANDOM NUMBER GENERATOR FROM 0 TO 2
const randomNumber = () => Math.floor(Math.random() * 3);

// // FUNCTION - RETURNS COMPUTER CHOICE
function getComputerChoice() {
  const index = randomNumber();
  return options[index];
}

// //FUNCTION - PLAYER MAKE A CHOICE IN A PROMPT WINDOW, INFINITE LOOP IF INPUT IS MISSPELLED
// function getPlayerChoice() {
//   let choice = prompt(
//     "Choice your weapon. Rock? Paper? Scissors? Make a choice and win!"
//   ).toLowerCase();
// }

// // FUNCTION - DECIDES WHO WIN ROUND (LOTS OF IF), RETURNS ARRAY WITH OVERALL SCORE
function playRound(e) {
  const computerChoice = getComputerChoice();
  let playerChoice = e.target.className;

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      roundResult.textContent = "You win! Rock beats scissors";
      playerScore++;
    }
    if (computerChoice === "paper") {
      roundResult.textContent =
        "You lost.... Rock loses with paper! Try next time";
      computerScore++;
    }
    if (computerChoice === "rock")
      roundResult.textContent = "It's a draw! You both picked rock!";
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      roundResult.textContent = "You win! Paper beats rock";
      playerScore++;
    }
    if (computerChoice === "scissors") {
      roundResult.textContent =
        "You lost.... Rock loses with paper! Try next time";
      computerScore++;
    }
    if (computerChoice === "paper")
      roundResult.textContent = "It's a draw! You both picked paper!";
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      roundResult.textContent = "You win! Scissors beats paper";
      playerScore++;
    }
    if (computerChoice === "rock") {
      roundResult.textContent =
        "You lost.... Scissors loses with rock! Try next time!";
      computerScore++;
    }
    if (computerChoice === "scissors")
      roundResult.textContent = "It's a draw! You both picked scissors!";
  }

  playerResult.lastChild.textContent = playerScore;
  computerResult.lastChild.textContent = computerScore;

  if (playerScore === 5 || computerScore === 5) {
    gameEnd();
  }
}

// //FUNCTION - DECIDES WHO WIN IN A GAME
function results(score1, score2) {
  if (score1 > score2) result.textContent = "You have won the match! GJ!";
  if (score1 < score2)
    result.textContent = "Unfortunately computer was better this time :(";
  if (score1 === score2) result.textContent = "It's a draw";
}

function gameEnd() {
  roundResult.textContent = "";
  buttons.forEach((button) => button.removeEventListener("click", playRound));
  results(playerScore, computerScore);
}

buttons.forEach((button) => button.addEventListener("click", playRound));
