export class Icon {
    //Attributes
    _iconClass;
    _iconID;
    constructor(iconID, iconClass) {
        this._iconID = iconID;
        this._iconClass = iconClass;
    }
    //_iconClass setter's and getter's
    set iconClass(iconClass) {
        this._iconClass = iconClass;
    }
    get iconClass() {
        return this._iconClass;
    }
}
