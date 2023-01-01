import { Player } from "./player";
//A sub-class of Player that handles random choices, plays as the computer
export class PlayerComputer extends Player {
    constructor() {
        super("Computer");
        this._choice = this.randomChoice();
    }
    randomChoice() {
        return Math.floor(Math.random() * 3) + 1;
    }
}
