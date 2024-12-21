function getComputerChoice() {
  let computerChoice;
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    computerChoice = 'rock';
  } else if (randomNum === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }

  return computerChoice;
}

function getHumanChoice() {
  let choice = prompt('Enter rock, paper, or scissors:').toLowerCase();
  while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    choice = prompt(
      'Invalid choice. Please enter rock, paper, or scissors:'
    ).toLowerCase();
  }
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log(
      `You win! ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      } beats ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }.`
    );
    humanScore++;
  } else {
    console.log(
      `You lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`
    );
    computerScore++;
  }
}

function playGame() {
  const play = confirm('Do you want to play Rock-Paper-Scissors?');

  if (!play) {
    console.log('Maybe next time!');
    return;
  }

  for (let i = 0; i < 3; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log('Congratulations! You are the overall winner!');
  } else if (computerScore > humanScore) {
    console.log('Sorry! The computer is the overall winner.');
  } else {
    console.log("It's an overall tie!");
  }
}

playGame();
