
let pScore = 0 , cScore = 0;
let playChoice = 'rock'

function getComputerChoice() {
    let options = ['rock','paper','scissors']
    return options[Math.floor(Math.random() * 3)] // you made a mistake here
}

function playRound(playerSelection, computerSelection) {
    let result = ""
    let pSelected = playerSelection
    let cSelected = computerSelection
    if(pSelected === cSelected){
        result = "Its a draw"
        return result;
    }
    switch(pSelected){
        case "rock":
            if(cSelected == "scissors"){
                pScore++;
                result = "You win ! rock beats scissors"
            }else{
                cScore++;
                result = `You Lose! ${cSelected} beats ${pSelected}`
            }
            break;
        case "scissors":
            if(cSelected == "paper"){
                pScore++;
                result = "You win ! scissors beats paper"
            }else{
                cScore++;
                result = `You Lose! ${cSelected} beats ${pSelected}`
            }
            break;
        case "paper":
            if(cSelected == "rock"){
                pScore++;
                result = "You win ! paper beats rock"
            }else{
                cScore++;
                result = `You Lose! ${cSelected} beats ${pSelected}`
            }
            break;
    }
    const pscore = document.querySelector('#pscore')
    const cscore = document.querySelector('#cscore')
    const message = document.querySelector('.message')
    const finalResult = document.querySelector('.final-result')
    pscore.innerHTML = `Player Score = ${pScore}`
    cscore.innerHTML = `Computer Score = ${cScore}`
    message.innerHTML = result
    if (pScore == 5) {
        finalResult.innerHTML = "Game over , You Win !"
        resetScores()
    }
    else if (cScore == 5) {
        finalResult.innerHTML = "Game over , You Lose!"
        resetScores()
    }else {
        finalResult.innerHTML = "Result Pending ..."
    }
  }

  function resetScores() {
    pScore = 0;
    cScore = 0;
    const pscore = document.querySelector('#pscore');
    const cscore = document.querySelector('#cscore');
    pscore.innerHTML = `Player Score = ${pScore}`;
    cscore.innerHTML = `Computer Score = ${cScore}`;
    
  }

  function game() {
    const rock = document.querySelector('#r');
    rock.addEventListener('click', () => {
      const playerSelection = 'rock';
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection); 
    });
  
    const paper = document.querySelector('#p');
    paper.addEventListener('click', () => {
      const playerSelection = 'paper';
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection); 
    });
  
    const scissors = document.querySelector('#s');
    scissors.addEventListener('click', () => {
      const playerSelection = 'scissors';
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection); 
    });
  }



game()

