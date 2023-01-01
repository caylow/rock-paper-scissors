export class IconManager {
    _icon;
    _defaultClass;
    constructor(defaultClass) {
        this._icon(defaultClass);
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
