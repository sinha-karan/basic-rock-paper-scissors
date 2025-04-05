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

document.querySelector('.js-auto-play-button').addEventListener('click', autoplay);//Event listeners need a reference to a function (like autoplay without () or a wrapper like () => autoplay()) to delay execution until the event (e.g., a click) occurs.

let isAutoPlaying = false;
let intervalID;

function autoplay(){
  if (!isAutoPlaying) {
    intervalID = setInterval(() => { //arrow function is used here
      const playerMoveAuto = pickComputerMove(); //Math.random() generates a new value each call, the two moves are independent
      playGame(playerMoveAuto);
    },1000);
    isAutoPlaying = true;

    // When the game is auto playing, change
    // the text in the button to 'Stop Playing'.
    document.querySelector('.js-auto-play-button').innerHTML = 'Stop Playing';
  }else {
    clearInterval(intervalID); //used to stop setInterval
    isAutoPlaying = false;

    // When the game is not playing, change
    // the text back to 'Auto Play'.
    document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
  }

}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('Rock')
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('Paper')
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('Scissors')
});

document.body.addEventListener('keydown' , (event) => {
  if (event.key === 'r') {
    playGame('Rock');
  } else if (event.key === 'p') {
    playGame('Paper');
  } else if (event.key === 's'){
    playGame('Scissors'); 
  } else if (event.key === 'a'){
    autoplay();
  } else if (event.key === 'Backspace'){
    document.querySelector('.js-confirmation-message').innerHTML = 'Are you sure you want to reset the score? <button class= "js-yes-reset-button"> Yes </button>  <button class= "js-no-reset-button"> No </button>';

    document.querySelector('.js-yes-reset-button').addEventListener('click', () => {
        Score.wins = 0;
        Score.losses = 0;
        Score.ties = 0;
        localStorage.removeItem('score')
        updateScoreElement();
        document.querySelector('.js-confirmation-message').innerHTML = ''
  });

    document.querySelector('.js-no-reset-button').addEventListener('click', () => {
        document.querySelector('.js-confirmation-message').innerHTML = ''
  })
  }
})


document.querySelector('.js-reset-score-button').addEventListener('click', () => {
  document.querySelector('.js-confirmation-message').innerHTML = 'Are you sure you want to reset the score? <button class= "js-yes-reset-button"> Yes </button>  <button class= "js-no-reset-button"> No </button>';

  document.querySelector('.js-yes-reset-button').addEventListener('click', () => {
    Score.wins = 0;
    Score.losses = 0;
    Score.ties = 0;
    localStorage.removeItem('score')
    updateScoreElement();
    document.querySelector('.js-confirmation-message').innerHTML = '';
  });

    document.querySelector('.js-no-reset-button').addEventListener('click', () => {
    document.querySelector('.js-confirmation-message').innerHTML = '';
  });
      
});



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