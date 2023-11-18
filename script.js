
// This function generates the choice of computer

let playerScore=0;
let computerScore=0;
function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    console.log(choice);
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
// This function takes the input from the player
function getplayerChoice(){
    let choice;
    while (true) {
        choice = prompt("What's your choice? Rock, paper, or scissor").toLowerCase();
        if (['rock', 'paper', 'scissor'].includes(choice)) {
            break;
        }
        console.log('Bad choice, choose either rock, paper, or scissor');
    }
    return choice;
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
function game(){
    const computerResponse =getComputerChoice();
    const playerResponse =getplayerChoice();
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

function fiveRoundGame(){
    while(playerScore!=5 && computerScore!=5){
        game();
        console.log(`Player SCORE: ${playerScore}`);
        console.log(`Computer SCORE: ${computerScore}`);
    }
    if(playerScore==5){
        console.log("you Won hurray!");
    }
    else{
        console.log("You lose, Better luck Next Time");
    }


}
fiveRoundGame();








