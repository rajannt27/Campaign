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

var _jsxFileName = 'd:\\Learn\\Blockchain\\Campaign\\Campaign\\pages\\campaigns\\new.js?entry';


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

                                console.log("test", accounts);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsImluc3RhbmNlIiwid2ViMyIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiQ3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7Ozs7Ozs7OzBOQUNGLEE7aUMsQUFBUSxBQUNpQjtBQURqQixBQUNKLGlCQUVKLEE7aUdBQVcsaUJBQUEsQUFBTyxPQUFQO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQURPLEFBQ1AsQUFBTTtnREFEQzt1Q0FFZ0IsY0FBQSxBQUFLLElBRnJCLEFBRWdCLEFBQVM7O2lDQUExQjtBQUZDLG9EQUdQOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxRQUFaLEFBQW1CLEFBQ25CO3NDQUFBLEFBQUssTUFBTCxBQUFXLFdBSkosQUFJUCxBQUFzQjtnREFKZjt5REFLRCxBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMscUJBQTNDLEFBQ0w7MENBQ1MsU0FQSCxBQUtELEFBQ0EsQUFDSSxBQUFTO0FBRGIsQUFDRixpQ0FGRTs7aUNBTEM7aUNBQUE7Z0RBQUE7O0FBQUE7NEJBQUE7QTs7Ozs7Ozs7OztpQ0FXSDt5QkFDSjs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esc0NBQUEsY0FBQSxVQUFNLFNBQU4sQUFBWSxXQUFVLFVBQVUsS0FBaEMsQUFBcUM7OEJBQXJDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssU0FBTCxBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUNBQUEsY0FBQSxTQUFLLFNBQUwsQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7O3NCQUNJLEFBQ1MsQUFDTDtzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTyxLQUFBLEFBQUssTUFKaEIsQUFJc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBcUIsTUFBQSxBQUFNLE9BQW5ELEFBQVMsQUFBYyxBQUFtQztBQUx4RTs7OEJBQUE7Z0NBREosQUFDSSxBQU9BO0FBUEE7QUFDSSxnQ0FNSixjQUFBLFNBQUssU0FBTCxBQUFXOzhCQUFYO2dDQUFBO0FBQUE7ZUFYWixBQUNJLEFBRUksQUFRSSxBQUtSLDBCQUFBLGNBQUEsWUFBUSxTQUFSLEFBQWMscUJBQW9CLE1BQWxDLEFBQXVDOzhCQUF2QztnQ0FBQTtBQUFBO2VBbkJaLEFBQ0ksQUFFSSxBQWdCSSxBQUlmOzs7OztBQXZDcUIsQSxBQTBDMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6ImQ6L0xlYXJuL0Jsb2NrY2hhaW4vQ2FtcGFpZ24vQ2FtcGFpZ24ifQ==