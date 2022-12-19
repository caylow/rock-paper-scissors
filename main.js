function playRound(playerSelection, computerSelection){

    // Case sensitive
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();

    //Evaluates the round results and tells if there's a winner or if it's a tie.
    if(isPlayerWinner(playerSelection, computerSelection)){
        return "You Win! " + playerSelection + " beats" + computerSelection;
    }else if(isATie(playerSelection, computerSelection)){
        return "It's a tie!";
    }else{
        return "You Lose! " + computerSelection + " beats" + playerSelection;
    }
}

//Returns true if player did win
function isPlayerWinner(playerSelection, computerSelection){
    const winnerConditions = [
        playerSelection == "rock" && computerSelection == "scissors",
        playerSelection == "scissors" && computerSelection == "paper",
        playerSelection == "paper" && computerSelection == "rock",
    ]
    acum = 0;
    do{
        if(winnerConditions[acum]){
            return true;
        }
    }while(acum < 3);
    return false;
}

//Returns true if player did a tie
function isATie(playerSelection, computerSelection){
    return playerSelection == computerSelection;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));