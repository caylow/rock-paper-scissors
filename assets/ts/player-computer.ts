import { Player } from "./player";

//A sub-class of Player that handles random choices, plays as the computer
export class PlayerComputer extends Player{

    public constructor(){
        super("Computer");
        this._choice = this.randomChoice();
    }

    public randomChoice():number{
        return Math.floor(Math.random() * 3) + 1;
    }

}