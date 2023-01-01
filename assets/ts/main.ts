import { Player } from "./player";
import { PlayerComputer } from "./player-computer";
import { Game } from "./game";

//Get a map and a value and returns a key by value.
function getKeyByValue(map:Map <any,any>, value:any):any {
    let key: any;
    map.forEach((val, k) =>{
        if(val == value) key = k;
    });
    return key;
}

const gameChoices = document.querySelectorAll(".game-item");


//Initialize all objects
const player = new Player("John");
const computer = new PlayerComputer();
const game = new Game(player, computer);


//If player clicks a rock, paper, scissors boxes.
gameChoices.forEach(gameChoice =>{
    gameChoice.addEventListener('click', ()=>{
        //Translate the id of the querySelector to a number.
        player.choice = getKeyByValue(game.choices, gameChoice.id);
        //Set a new random choice to the computer.
        computer.choice = computer.randomChoice();
        console.log(game.startMatch());
    });
});



