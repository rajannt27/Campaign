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
            minimumContribution: '',
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _context.prev = 1;
                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context.sent;
                                _context.next = 7;
                                return _factory2.default.methods.CreateCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 7:
                                _context.next = 12;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](1);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 9]]);
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
                    lineNumber: 27
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Create a campaign'), _react2.default.createElement('form', { 'class': 'ui form error', onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('div', { 'class': 'field', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'Minimum Contribution'), _react2.default.createElement('div', { 'class': 'ui right labeled input', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
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
                    lineNumber: 33
                }
            }), _react2.default.createElement('div', { 'class': 'ui label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'wei'))), _react2.default.createElement('div', { 'class': 'ui error message', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('i', { 'class': 'close icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement('div', { 'class': 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Oops!'), _react2.default.createElement('ul', { 'class': 'list', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, this.state.errorMessage))), _react2.default.createElement('button', { 'class': 'ui button primary', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Create')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsImluc3RhbmNlIiwid2ViMyIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJDcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwic2V0U3RhdGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7Ozs7Ozs7OzBOLEFBQ0Y7aUNBQVEsQUFDaUIsQUFDckI7MEJBRkksQUFFUyxBO0FBRlQsQUFDSixpQixBQUdKO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FETyxBQUNQLEFBQU07Z0RBREM7Z0RBQUE7dUNBR29CLGNBQUEsQUFBSyxJQUh6QixBQUdvQixBQUFTOztpQ0FBMUI7QUFISCxvREFBQTtnREFBQTt5REFJRyxBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMscUJBQTNDLEFBQ0w7MENBQ1MsU0FOUCxBQUlHLEFBQ0EsQUFDSSxBQUFTO0FBRGIsQUFDRixpQ0FGRTs7aUNBSkg7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBVUg7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFWMUIsQUFVSCxBQUFjLEFBQW1COztpQ0FWOUI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FjSDt5QkFDSjs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esc0NBQUEsY0FBQSxVQUFNLFNBQU4sQUFBWSxpQkFBZ0IsVUFBVSxLQUF0QyxBQUEyQzs4QkFBM0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxTQUFMLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx5Q0FBQSxjQUFBLFNBQUssU0FBTCxBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjs7c0JBQ0ksQUFDUyxBQUNMO3NCQUZKLEFBRVMsQUFDTDs2QkFISixBQUdnQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUpoQixBQUlzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLHFCQUFxQixNQUFBLEFBQU0sT0FBbkQsQUFBUyxBQUFjLEFBQW1DO0FBTHhFOzs4QkFBQTtnQ0FESixBQUNJLEFBT0E7QUFQQTtBQUNJLGdDQU1KLGNBQUEsU0FBSyxTQUFMLEFBQVc7OEJBQVg7Z0NBQUE7QUFBQTtlQVhaLEFBQ0ksQUFFSSxBQVFJLEFBS1IsMEJBQUEsY0FBQSxTQUFLLFNBQUwsQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7b0RBQ08sU0FBSCxBQUFTOzhCQUFUO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLGNBQUEsU0FBSyxTQUFMLEFBQVc7OEJBQVg7Z0NBQUE7QUFBQTtlQUZKLEFBRUksQUFHQSwwQkFBQSxjQUFBLFFBQUksU0FBSixBQUFVOzhCQUFWO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFLO0FBQUw7QUFBQSxvQkFBSyxBQUFLLE1BdEJ0QixBQWdCSSxBQUtJLEFBQ0ksQUFBZ0IsQUFHeEIsaUNBQUEsY0FBQSxZQUFRLFNBQVIsQUFBYyxxQkFBb0IsTUFBbEMsQUFBdUM7OEJBQXZDO2dDQUFBO0FBQUE7ZUE1QlosQUFDSSxBQUVJLEFBeUJJLEFBSWY7Ozs7O0FBcERxQixBLEFBdUQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiZDovTGVhcm4vQmxvY2tjaGFpbi9DYW1wYWlnbiJ9