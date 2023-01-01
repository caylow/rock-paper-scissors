export class Icon{
    //Attributes
    private _iconClass: string;
    private _iconID: string;
    constructor(iconID:string ,iconClass: string){
        this._iconID = iconID;
        this._iconClass = iconClass;
    }

    //_iconClass setter's and getter's
    set iconClass(iconClass: string){
        this._iconClass = iconClass;
    }

    get iconClass():string{
        return this._iconClass;
    }

}