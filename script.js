let playerScore = 0;
let computerScore = 0;
let draws= 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

function playGame(playerChoice) {
    let computerChoice = getComputerChoice();
    let result;

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
        draws++;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }
  
    document.getElementById("round-info").innerHTML = `You chose: ${playerChoice}<br>Computer chose: ${computerChoice}`;
        document.getElementById("result").innerHTML = result;
            document.getElementById("score").innerHTML = `Player: ${playerScore} | Computer: ${computerScore} | Draws: ${draws}`;
  }