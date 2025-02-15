ctx.prototype.__applyStyleState = function (styleState) {
    this._setStyle('applyStyleState', styleState);
};

ctx.prototype.__setDefaultStyles = function () {
    this._setStyle('setDefaultStyles');
};

ctx.prototype._setStyle = function(type, from = STYLES) {
    var keys = Object.keys(from), i, key;
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        if (type == 'applyStyleState') this[key] = from[key];
        else if (type == 'setDefaultStyles') this[key] = from[key].canvas;
    }
};

ctx.prototype.__getStyleState = function () {
    var i, styleState = {}, keys = Object.keys(STYLES), key;
    for (i=0; i<keys.length; i++) {
        key = keys[i];
        styleState[key] = this[key];
    }
    return styleState;
};
