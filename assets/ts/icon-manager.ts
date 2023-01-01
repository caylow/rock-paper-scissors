import { Icon } from "./icon";
export class IconManager{

    private _icon:Icon;
    private _defaultClass:string;

    constructor(iconID:string, defaultClass:string){
        this._icon = new Icon(iconID, defaultClass);
        this._defaultClass = defaultClass;
    }

    private setDefault(){
        this._icon.iconClass = this._defaultClass;
    }
    public changeClass(newClass:string){
        this._icon.iconClass = newClass;
    }
    public clearClass(){
        this.setDefault();
    }
}