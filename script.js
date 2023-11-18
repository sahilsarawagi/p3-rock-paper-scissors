let playerScore=0;
let computerScore=0;
const btn = document.querySelectorAll('button');
const playerScoreText = document.createTextNode('0');
const computerScoreText = document.createTextNode('0');
const playerScoreHead = document.querySelector('.playerScoreHead');
const computerScoreHead = document.querySelector('.computerScoreHead')
const resutlPara =document.querySelector('p');
playerScoreHead.appendChild(playerScoreText)
computerScoreHead.appendChild(computerScoreText)


btn.forEach((button) => {

    button.addEventListener('click', () => {
        choice = button.value;
        game(choice);
        updateScores();
        checkGameOver();
    });
  });


function updateScores(){
    playerScoreText.textContent = playerScore
    computerScoreText.textContent =computerScore
}


function checkGameOver(){
    if(playerScore==5){
        // alert("");
        resutlPara.textContent = "You Won hurray!"
        resetScores();
    }
    else if(computerScore==5){
        // alert("");
        resutlPara.textContent = "You Lose, Better Luck Next Time"
        resetScores();
    }
}
function resetScores(){
    playerScore=0;
    computerScore=0;
}
function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    let response;
    switch(choice) {
        case 1:
            response ='rock';
          break;
        case 2:
            response = 'paper';
          break;
        default:
            response = 'scissor';
      }
    return response;
}


// This function has the games rule
function matchResult(computerResponse,playerResponse){
    if((computerResponse=='rock' && playerResponse=='paper') || 
    (computerResponse=='paper' && playerResponse=='scissor')||
    (computerResponse=='scissor' && playerResponse=='rock')){
        return 1;
    }else if(computerResponse==playerResponse){
        return 2;
    }
    return 0;

}

// This function starts the game
function game(playerResponse){
    const computerResponse =getComputerChoice();
    const result = matchResult(computerResponse,playerResponse);

    if(result==1){
        resutlPara.textContent = `You Won! This Round ${playerResponse} beats ${computerResponse}`;
        playerScore+=1;
    } else if(result==2){
        resutlPara.textContent = "Match Tie, play again";
    }
    else {
        resutlPara.textContent = `You Lose! This Round ${computerResponse} beats ${playerResponse}`;
        computerScore+=1;
    }

}





