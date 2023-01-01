import { Icon } from "./icon";
export class IconManager {
    _icon;
    _defaultClass;
    constructor(iconID, defaultClass) {
        this._icon = new Icon(iconID, defaultClass);
        this._defaultClass = defaultClass;
    }
    setDefault() {
        this._icon.iconClass = this._defaultClass;
    }
    changeClass(newClass) {
        this._icon.iconClass = newClass;
    }
    clearClass() {
        this.setDefault();
    }
}
