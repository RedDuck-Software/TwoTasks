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

/*

function ctx() {};

const STYLES = {
    a: {canvas: '1'},
    b: {canvas: '2'},
    c: {canvas: '3'},
}

function test() {
    ctx.prototype.__setDefaultStyles();
    console.log(ctx.prototype.__getStyleState());
}

test();

*/



