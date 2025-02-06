ctx.prototype.__applyStyleState = function (styleState) {
    this.__applyKeys(styleState);
};

ctx.prototype.__setDefaultStyles = function () {
    this.__applyKeys(STYLES, 'canvas');
};

ctx.prototype.__getStyleState = function () {
    return this.__collectKeys(STYLES);
};

ctx.prototype.__applyKeys = function (source, subKey) {
    var keys = Object.keys(source), i, key;
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        this[key] = subKey ? source[key][subKey] : source[key];
    }
};

ctx.prototype.__collectKeys = function (source) {
    var keys = Object.keys(source), i, key, result = {};
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        result[key] = this[key];
    }
    return result;
};
