const options = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * options.length);
const computerChoice = options[randomIndex];
const userChoice = process.argv[2];

function game(player, computer) {
  if (!options.includes(player)) {
    console.log("Invalid input. Choose between rock, paper and scissors.");
  } else if (player === computer) {
    console.log(`Your choice: ${player}. Computer choice: ${computer}. It's a draw!`);
  } else if ((player === "rock" && computer === "scissors") || (player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock")) {
    console.log(`Your choice: ${player}. Computer choice: ${computer}. You win!`);
  } else {
    console.log(`Your choice: ${player}. Computer choice: ${computer}. You lose!`);
  }
}

game(userChoice, computerChoice);
