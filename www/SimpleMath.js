var exec = require('cordova/exec');

// exports.coolMethod = function(arg0, success, error) {
//     exec(success, error, "SimpleMath", "coolMethod", [arg0]);
// };

module.exports = myMathFunc = {
    plus: function (arg0, success, error) {
        exec(success, error, "MyMath", "plus", arg0);
    },
    minus: function (arg0, success, error) {
        exec(success, error, "MyMath", "minus", arg0);
    }
}