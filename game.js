function getComputerChoice() {
    const choices = [ 'Rock','Paper','Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

     if(playerSelection === computerSelection){
        return "It's a tie";
     }
     else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
      ) {
        return `You Win !! ${playerSelection} beats ${computerSelection}`;
      } else {
        return `You Lose !! ${computerSelection} beats ${playerSelection}`;
      }
    
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      console.log(`Round ${round}: ${result}`);
  
      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }
    }
  
    console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry! You lose the game!");
    } else {
      console.log("It's a tie! The game ends in a draw.");
    }
  }
  
  // Start the game
  game();



