function playRound(playerSelection, computerSelection){

    // Case sensitive
    playerSelection = formalyzeStr(playerSelection);
    computerSelection = formalyzeStr(computerSelection);
    //Evaluates the round results and tells if there's a winner or if it's a tie.
    if(isPlayerWinner(playerSelection, computerSelection)){
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }else if(isATie(playerSelection, computerSelection)){
        return "It's a tie!";
    }else{
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function formalyzeStr(astring){
    return astring.charAt(0).toUpperCase() + astring.slice(1);
}
//Returns true if player did win
function isPlayerWinner(playerSelection, computerSelection){
    const winnerConditions = [
        playerSelection == "Rock" && computerSelection == "Scissors",
        playerSelection == "Scissors" && computerSelection == "Paper",
        playerSelection == "Paper" && computerSelection == "Rock",
    ]
    acum = 0;
    do{
        if(winnerConditions[acum]){
            return true;
        }
        acum++;
    }while(acum < 3);
    return false;
}

//Returns true if player did a tie
function isATie(playerSelection, computerSelection){
    return playerSelection == computerSelection;
}

//Returns values between 0 and less than max's value
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

//Returns a random choice of the computer.
function getComputerChoice(){
    choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(3)];
}

let playerSelection = "rock";
const computerSelection = getComputerChoice();
for(let i = 0; i<5; i++){
    playerSelection = prompt("Enter your selection: ");
    console.log(playRound(playerSelection, computerSelection));
}