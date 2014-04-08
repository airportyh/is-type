// Adapted from <https://github.com/isaacs/core-util-is>
// and <https://github.com/juliangruber/is-type>

function isArray(ar) {
  return Array.isArray(ar);
}
exports.array = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports['boolean'] = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports['null'] = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.nullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.number = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.string = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.symbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports['undefined'] = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.regExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.object = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.date = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.error = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.function = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.primitive = isPrimitive;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}
