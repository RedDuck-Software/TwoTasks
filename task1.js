ctx.prototype.__applyStyleState = function (styleState) {
  this.__assistStyleMethod(styleState, this)
};

ctx.prototype.__setDefaultStyles = function () {
  const defaultStyles = Object.keys(STYLES).reduce((acc, key) => {
    acc[key] = STYLES[key].canvas;
    return acc;
  }, {});
  
  this.__assistStyleMethod(defaultStyles, this)
};

ctx.prototype.__getStyleState = function () {
  return this.__assistStyleMethod(this, {}, STYLES)
};

ctx.prototype.__assistStyleMethod = function (donorObj, recipientObj, iteratorObj=donorObj) { 
  var i, keys = Object.keys(iteratorObj), key;
  for (i = 0; i < keys.length; i++) {
    key = keys[i];
    recipientObj[key] = donorObj[key];
  }
  return recipientObj;
};
