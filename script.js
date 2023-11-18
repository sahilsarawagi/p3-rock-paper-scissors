let playerScore=0;
let computerScore=0;
const btn = document.querySelectorAll('button');




btn.forEach((button) => {

    button.addEventListener('click', () => {
        choice = button.value;
        game(choice);
        updateScores();
        checkGameOver();
    });
  });


function updateScores(){
    console.log(`Player SCORE: ${playerScore}`);
    console.log(`Computer SCORE: ${computerScore}`);
}


function checkGameOver(){
    if(playerScore==5){
        alert("you Won hurray!");
        resetScores();
    }
    else if(computerScore==5){
        alert("You lose, Better luck Next Time");
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
        console.log(`You Won! ${playerResponse} beats ${computerResponse}`);
        playerScore+=1;
    } else if(result==2){
        console.log("Match Tie, play again")
    }
    else {
        console.log(`You Lose! ${computerResponse} beats ${playerResponse}`);
        computerScore+=1;
    }

}





