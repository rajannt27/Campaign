'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _factory = require('../../Ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../Ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'd:\\Learn\\Blockchain\\Campaign\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context.sent;

                                console.log("test west" + accounts[0] + " " + _this.state.minimumContribution);
                                _this.state.accounts = accounts;
                                _context.next = 8;
                                return _factory2.default.methods.CreateCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, 'Create a campaign'), _react2.default.createElement('form', { 'class': 'ui form', onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('div', { 'class': 'field', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, 'Minimum Contribution'), _react2.default.createElement('div', { 'class': 'ui right labeled input', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('input', {
                type: 'text',
                name: 'minimum-contribution',
                placeholder: 'Minimum Contribution',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), _react2.default.createElement('div', { 'class': 'ui label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'wei'))), _react2.default.createElement('button', { 'class': 'ui button primary', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Create')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsImluc3RhbmNlIiwid2ViMyIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiQ3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7Ozs7Ozs7OzBOQUNGLEE7aUNBQVEsQUFDaUIsQTtBQURqQixBQUNKLGlCQUVKLEE7aUdBQVcsaUJBQUEsQUFBTyxPQUFQO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQURPLEFBQ1AsQUFBTTtnREFEQzt1Q0FFZ0IsY0FBQSxBQUFLLElBRnJCLEFBRWdCLEFBQVM7O2lDQUExQjtBQUZDLG9EQUdQOzt3Q0FBQSxBQUFRLElBQUksY0FBWSxTQUFaLEFBQVksQUFBUyxLQUFyQixBQUF3QixNQUFJLE1BQUEsQUFBSyxNQUE3QyxBQUFtRCxBQUNuRDtzQ0FBQSxBQUFLLE1BQUwsQUFBVyxXQUpKLEFBSVAsQUFBc0I7Z0RBSmY7eURBS0QsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLHFCQUEzQyxBQUNMOzBDQUNTLFNBUEgsQUFLRCxBQUNBLEFBQ0ksQUFBUztBQURiLEFBQ0YsaUNBRkU7O2lDQUxDO2lDQUFBO2dEQUFBOztBQUFBOzRCQUFBO0E7Ozs7Ozs7Ozs7aUNBV0g7eUJBQ0o7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNDQUFBLGNBQUEsVUFBTSxTQUFOLEFBQVksV0FBVSxVQUFVLEtBQWhDLEFBQXFDOzhCQUFyQztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFNBQUwsQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlDQUFBLGNBQUEsU0FBSyxTQUFMLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOztzQkFDSSxBQUNTLEFBQ0w7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2dCLEFBQ1o7dUJBQU8sS0FBQSxBQUFLLE1BSmhCLEFBSXNCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMscUJBQXFCLE1BQUEsQUFBTSxPQUFuRCxBQUFTLEFBQWMsQUFBbUM7QUFMeEU7OzhCQUFBO2dDQURKLEFBQ0ksQUFPQTtBQVBBO0FBQ0ksZ0NBTUosY0FBQSxTQUFLLFNBQUwsQUFBVzs4QkFBWDtnQ0FBQTtBQUFBO2VBWFosQUFDSSxBQUVJLEFBUUksQUFLUiwwQkFBQSxjQUFBLFlBQVEsU0FBUixBQUFjLHFCQUFvQixNQUFsQyxBQUF1Qzs4QkFBdkM7Z0NBQUE7QUFBQTtlQW5CWixBQUNJLEFBRUksQUFnQkksQUFJZjs7Ozs7QUF2Q3FCLEEsQUEwQzFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJkOi9MZWFybi9CbG9ja2NoYWluL0NhbXBhaWduIn0=