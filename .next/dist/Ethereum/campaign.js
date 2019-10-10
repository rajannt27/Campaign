'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV0aGVyZXVtXFxjYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGlnbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQW9CLEFBQXBCLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUN4QjtXQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNILEtBQUssQUFBTCxNQUFXLG1CQUFRLEFBQW5CLEFBREcsWUFFSCxBQUZHLEFBQVAsQUFJSDtBQUxEIiwiZmlsZSI6ImNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6ImU6L0xlYXJuL0Jsb2NrY2hhaW4vQ2FtcGFpZ24ifQ==