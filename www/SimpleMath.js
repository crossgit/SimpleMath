var exec = require('cordova/exec');

var myMathFunc = function () { }
myMathFunc.prototype.plus = function (arg0, success, error) {
    exec(success, error, "SimpleMath", "plus", arg0);
};
myMathFunc.prototype.minus = function (arg0, success, error) {
    exec(success, error, "SimpleMath", "minus", arg0);
};

module.exports = new myMathFunc();