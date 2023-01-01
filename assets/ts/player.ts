import { IconManager } from "./icon-manager";

export class Player{
    //Player's attributes
    readonly name:string;
    protected _choice:number;
    private _isWinner:boolean;
    private _icon: IconManager;

    public constructor(name:string, iconID:string, iconClass:string){
        this._choice = 0;
        this._isWinner = false;
        this.name = name;
        this._icon = new IconManager(iconID, iconClass);
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