const randomNumber = () => Math.floor(Math.random() * 3);
const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const index = randomNumber();
  return options[index];
}

function getPlayerChoice() {
  let choice = prompt(
    "Choice your weapon. Rock? Paper? Scissors? Make a choice and win!"
  ).toLowerCase();
  while (1) {
    if (options.includes(choice)) return choice;
    choice = prompt(
      "I think you misspelled something. Try again!"
    ).toLowerCase();
  }
}

function playRound() {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  let playerChoice = getPlayerChoice();

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") console.log("You win, congratz");
    if (computerChoice === "paper") console.log("You lost, try next time!");
    if (computerChoice === "rock") console.log("It's a draw");
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") console.log("You win, congratz");
    if (computerChoice === "scissors") console.log("You lost, try next time!");
    if (computerChoice === "paper") console.log("It's a draw");
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") console.log("You win, congratz");
    if (computerChoice === "rock") console.log("You lost, try next time!");
    if (computerChoice === "scissors") console.log("It's a draw");
  }
}

playRound();
