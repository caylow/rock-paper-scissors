export class Player{
    //Player's attributes
    readonly name:string;
    protected _choice:number;
    private _isWinner:boolean;
    public constructor(name:string){
        this._choice = 0;
        this._isWinner = false;
        this.name = name;
    }
    //_choice setter and getter
    set choice(gamechoice:number){
        this._choice = gamechoice;
    }
    get choice():number{
        return this._choice;
    }

    //_isWinner setter and getter, may be uselesss
    set isWinner(iswinner:boolean){
        this._isWinner = iswinner;
    }
    get isWinner():boolean{
        return this._isWinner;
    }
}