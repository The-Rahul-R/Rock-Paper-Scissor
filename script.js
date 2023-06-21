
let pScore = 0 , cScore = 0;

function getComputerChoice() {
    let options = ['Rock','Paper','Scissors']
    return options[Math.floor(Math.random() * 3)] // you made a mistake here
}

function playRound(playerSelection, computerSelection) {
    let result = ""
    let pSelected = playerSelection.toLowerCase();
    let cSelected = computerSelection.toLowerCase()??'rock';
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
    return result

  }

function game() {
    for(let i = 0; i<5;i++){
        const playerSelection = prompt('Enter rock/paper/scissors')
        const computerSelection = getComputerChoice();
        console.log(playerSelection)
        console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection));

    }
    if(pScore>cScore){
        console.log("You Win!")
    }else if(cScore>pScore){
        console.log("Computer wins")
    }else{
        console.log("Its a Draw")
    }
    
}
   
game();
