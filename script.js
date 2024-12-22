let scores = JSON.parse(localStorage.getItem('scores')) || {
  playerScore: 0,
  computerScore: 0,
  tieScore: 0
};

document.querySelector('.score').textContent = `Player: ${scores.playerScore}, Computer: ${scores.computerScore}, Ties: ${scores.tieScore}`;

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

document.querySelector('.reset-button').addEventListener('click', () => {
  resetScore();
});

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = '';

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    scores.playerScore++;
    result = 'You win!';
  } else if (playerChoice === computerChoice) {
    scores.tieScore++;
    result = "It's a tie!";
  } else {
    scores.computerScore++;
    result = 'You lose!';
  }

  localStorage.setItem('scores', JSON.stringify(scores));

  document.querySelector('.result').textContent = result;
  document.querySelector('.computer-choice').textContent = `Computer chose: ${computerChoice}`;
  document.querySelector('.score').textContent = `Player: ${scores.playerScore}, Computer: ${scores.computerScore}, Ties: ${scores.tieScore}`;
}

function resetScore() {
  scores = { playerScore: 0, computerScore: 0, tieScore: 0 };
  localStorage.setItem('scores', JSON.stringify(scores));
  document.querySelector('.score').textContent = `Player: 0, Computer: 0, Ties: 0`;
  document.querySelector('.result').textContent = '';
  document.querySelector('.computer-choice').textContent = '';
}
