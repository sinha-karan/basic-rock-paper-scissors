let Score =JSON.parse(localStorage.getItem('score'))|| {
  wins: 0,
  losses: 0,
  ties: 0
}; //Load the score that we saved from here and its saved in JSON String so Convert the score back to object and if there is no score in localstorage then after OR operator will run.


// if (!Score) {
//   Score = {
//   wins: 0,
//   losses: 0,
//   ties: 0
//  };
// }

updateScoreElement();


function playGame(playerMove) {

  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'Scissors') {
      if (computerMove === 'Rock') {
        result = 'You lose.';
      }else if (computerMove === 'Paper'){
        result = 'You win.'
      } else if (computerMove === 'Scissors'){
        result = 'Tie.'
      }  
  } else if (playerMove === 'Paper'){
      if (computerMove === 'Rock') {
        result = 'You win.';
      }else if (computerMove === 'Paper'){
        result = 'Tie.'
      } else if (computerMove === 'Scissors'){
        result = 'You lose.'
      }
  } else {
      if (computerMove === 'Rock') {
        result = 'Tie.';
      }else if (computerMove === 'Paper'){
        result = 'You lose.'
      } else if (computerMove === 'Scissors'){
        result = 'You win.'
      }
  }

  if (result === 'You win.') {
    Score.wins += 1;
  } else if(result === 'You lose.'){
    Score.losses += 1;
  } else if (result === 'Tie.') {
    Score.ties += 1;
  }

  localStorage.setItem('score' , JSON.stringify(Score));//when we update the score we save it in localStorage and localStorage support only string so stringify

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = `${result}`;

  document.querySelector('.js-yourmove-computermove').innerHTML = ` You
    <img class="move-icon" src="rock paper scissors icon/${playerMove}-emoji.png">
    <img class="move-icon" src="rock paper scissors icon/${computerMove}-emoji.png">
  Computer`;

  // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} Wins: ${Score.wins}, Losses: ${Score.losses}, Ties: ${Score.ties}`);
}

function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${Score.wins}, Losses: ${Score.losses}, Ties: ${Score.ties}`;
}

function pickComputerMove() {

  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock'; 
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }

  return computerMove;    
}