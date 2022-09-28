// RANDOM NUMBER GENERATOR FROM 0 TO 2
const randomNumber = () => Math.floor(Math.random() * 3);

// OPTIONS ARRAY
const options = ["rock", "paper", "scissors"];

// FUNCTION - RETURNS COMPUTER CHOICE
function getComputerChoice() {
  const index = randomNumber();
  return options[index];
}

//FUNCTION - PLAYER MAKE A CHOICE IN A PROMPT WINDOW, INFINITE LOOP IF INPUT IS MISSPELLED
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

// FUNCTION - DECIDES WHO WIN ROUND (LOTS OF IF), RETURNS ARRAY WITH OVERALL SCORE
function playRound() {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  let playerChoice = getPlayerChoice();

  let playerScore = 0,
    computerScore = 0;

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You win! Rock beats scissors");
      playerScore++;
    }
    if (computerChoice === "paper") {
      console.log("You lost.... Rock loses with paper! Try next time");
      computerScore++;
    }
    if (computerChoice === "rock")
      console.log("It's a draw! You both picked rock!");
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats rock");
      playerScore++;
    }
    if (computerChoice === "scissors") {
      console.log("You lost.... Rock loses with paper! Try next time");
      computerScore++;
    }
    if (computerChoice === "paper")
      console.log("It's a draw! You both picked paper!");
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beats paper");
      playerScore++;
    }
    if (computerChoice === "rock") {
      console.log("You lost.... Scissors loses with rock! Try next time!");
      computerScore++;
    }
    if (computerChoice === "scissors")
      console.log("It's a draw! You both picked scissors!");
  }

  return [playerScore, computerScore];
}

//FUNCTION - DECIDES WHO WIN IN A GAME
function results(score) {
  if (score[0] > score[1]) console.log("You have won the match! GJ!");
  if (score[0] < score[1])
    console.log("Unfortunately computer was better this time :(");
  if ((score[0] = score[1])) console.log("It's a draw");
}

//LOOP - GAME HAS 5 ROUNDS
for (let i = 1; i <= 5; i++) {
  console.log(i);
  playRound();
  alert("Next round!");
  if (i === 5) {
    results(playRound());
  }
}
