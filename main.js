function playRound(playerSelection, computerSelection){

    // Case sensitive
    playerSelection = formalyzeStr(playerSelection);
    computerSelection = formalyzeStr(computerSelection);
    //Evaluates the round results and tells if there's a winner or if it's a tie.
    if(isPlayerWinner(playerSelection, computerSelection)){
        return 1;
    }else if(isATie(playerSelection, computerSelection)){
        return 0;
    }else{
        return -1;
        
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

function showSelection(playerSelection, gameChoice, isUser=false){
    if(isUser){
        gameChoice.classList.remove('fa-user');
    }else{
        gameChoice.classList.remove('fa-computer'); 
        gameChoice.classList.remove('fa-solid'); 
        gameChoice.classList.add('fa-regular'); 
    }
    if(playerSelection=='paper'){
        gameChoice.classList.add('fa-hand');
    }else{
        gameChoice.classList.add('fa-hand-'+playerSelection);
    }
}

function showResults(playRound, winMessage, loseMessage){
    if(playRound==1){
        winMessage.setAttribute('style', 'display: inline;');  
    }else if(playRound==0){
        return;
    }else{
        return loseMessage.setAttribute('style', 'display: inline;'); 
    }
}

const playerBox = document.querySelector('#player-user');
const computerBox = document.querySelector('#player-pc');
const winText = document.querySelector('#win-text');
const loseText = document.querySelector('#lose-text');
const gameItems = document.querySelectorAll('.game-item');
gameItems.forEach((gameItem) =>{
    gameItem.addEventListener('click', ()=>{
        let computerChoice = getComputerChoice();
        showSelection(gameItem.id, playerBox, true);
        showSelection(computerChoice, computerBox);
        showResults(playRound(gameItem.id, computerChoice), winText,loseText);
    })
})


