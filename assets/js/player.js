export class Player {
    //Player's attributes
    name;
    _choice;
    _isWinner;
    constructor(name) {
        this._choice = 0;
        this._isWinner = false;
        this.name = name;
    }
    //_choice setter and getter
    set choice(gamechoice) {
        this._choice = gamechoice;
    }
    get choice() {
        return this._choice;
    }
    //_isWinner setter and getter, may be uselesss
    set isWinner(iswinner) {
        this._isWinner = iswinner;
    }
    get isWinner() {
        return this._isWinner;
    }
}
