webpackHotUpdate(6,{

/***/ 1382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(1366);

var _layout2 = _interopRequireDefault(_layout);

var _campaign = __webpack_require__(1380);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(542);

var _web = __webpack_require__(1184);

var _web2 = _interopRequireDefault(_web);

var _contribute = __webpack_require__(1384);

var _contribute2 = _interopRequireDefault(_contribute);

var _routes = __webpack_require__(852);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Learn\\Blockchain\\Campaign\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, 'Campaign Details ', this.props.manager), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_contribute2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'View Request')))))));
        }
    }, {
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestCount = _props.requestCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of manager',
                description: 'The manager created this campaign and can create request to spend money',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign balance (ether)',
                description: 'The balance for this campaign'
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'Minimum contribution to the campaign to become an approver'
            }, {
                header: requestCount,
                meta: 'Request Count',
                description: 'Number of spend request for this campaign. A request tries to withdraw money from contract. Request must be approved by approvers to take money from contract.'
            }, {
                header: approversCount,
                meta: 'Approvers count',
                description: 'Number of approvers who have already donated to the campaign'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            });
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, campaignSummary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                campaignSummary = _context.sent;

                                console.log(campaignSummary);
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: campaignSummary[0],
                                    manager: campaignSummary[4],
                                    balance: campaignSummary[1],
                                    requestCount: campaignSummary[2],
                                    approversCount: campaignSummary[3]
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwibWFuYWdlciIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImJhbGFuY2UiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsImNhbXBhaWduU3VtbWFyeSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVEsQUFBTSxBQUFNOztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFRLEFBQVc7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7OztpQ0FjTSxBQUNKO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQXNCLDBCQUFBLEFBQUssTUFEL0IsQUFDSSxBQUFpQyxBQUNqQywwQkFBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0s7QUFETDtvQkFESixBQUNJLEFBQ0ssQUFBSyxBQUVWLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHNDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FOWixBQUNJLEFBSUksQUFDSSxBQUdSO0FBSFE7a0NBR1AsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0Qzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxTQUFSOzhCQUFBO2dDQUFBO0FBQUE7ZUFoQjVCLEFBQ0ksQUFFSSxBQVNJLEFBQ0ksQUFDSSxBQUNJLEFBQ0ksQUFRL0I7Ozs7c0NBRVk7eUJBT0wsS0FQSyxBQU9BO2dCQVBBLEFBRUwsaUJBRkssQUFFTDtnQkFGSyxBQUdMLGlCQUhLLEFBR0w7Z0JBSEssQUFJTCw2QkFKSyxBQUlMO2dCQUpLLEFBS0wsc0JBTEssQUFLTDtnQkFMSyxBQU1MLHdCQU5LLEFBTUwsQUFFSjs7Z0JBQU07d0JBQ0YsQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFISixBQUdpQixBQUNiO3VCQUFNLEVBQUMsY0FMRCxBQUNWLEFBSVUsQUFBZTtBQUp6QixBQUNJLGFBRk07d0JBUUUsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRC9CLEFBQ1ksQUFBNEIsQUFDcEM7c0JBRkosQUFFVSxBQUNOOzZCQVZNLEFBT1YsQUFHaUI7QUFIakIsQUFDSTt3QkFJSixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQWZNLEFBWVYsQUFHaUI7QUFIakIsQUFDSTt3QkFJSixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQXBCTSxBQWlCVixBQUdpQjtBQUhqQixBQUNJO3dCQUlKLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBekJSLEFBQWMsQUFzQlYsQUFHaUIsQUFJckI7QUFQSSxBQUNJOztpREFNRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7OztpSEE3RWtCLEE7Ozs7O2lDQUNuQjtBLDJDQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O3VDQUNSLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEEsQUFBOEI7O2lDQUF0RDtBLDJEQUNOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWTs7NkNBRUMsTUFBQSxBQUFNLE1BRFosQUFDa0IsQUFDckI7eURBQXFCLGdCQUZsQixBQUVrQixBQUFnQixBQUNyQzs2Q0FBUyxnQkFITixBQUdNLEFBQWdCLEFBQ3pCOzZDQUFTLGdCQUpOLEFBSU0sQUFBZ0IsQUFDekI7a0RBQWMsZ0JBTFgsQUFLVyxBQUFnQixBQUM5QjtvREFBZ0IsZ0JBQUEsQSxBQU5iLEFBTTZCO0FBTjdCLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOZSxBLEFBa0YzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L0xlYXJuL0Jsb2NrY2hhaW4vQ2FtcGFpZ24ifQ==

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\Learn\\Blockchain\\Campaign\\pages\\campaigns\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Learn\\Blockchain\\Campaign\\pages\\campaigns\\show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__(1368)();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGtCQUMyQixBQUQzQixrQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFZ0MsQUFGaEMsbUJBR0ssQUFITCxJQUdTLEFBSFQsZ0NBR3dDLEFBSHhDLDZCQUlLLEFBSkwsSUFJUyxBQUpULG9DQUk0QyxBQUo1Qzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkU6L0xlYXJuL0Jsb2NrY2hhaW4vQ2FtcGFpZ24ifQ==

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\Learn\\Blockchain\\Campaign\\routes.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Learn\\Blockchain\\Campaign\\routes.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4zMjA2YjRiN2VkNjhjN2RmZTk4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/Yjc5NDE4YiIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanM/ZWYyMWY0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi9FdGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCB7Q2FyZCwgR3JpZCwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL0V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250cmlidXRlJztcclxuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBjYW1wYWlnblN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2FtcGFpZ25TdW1tYXJ5KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxyXG4gICAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBjYW1wYWlnblN1bW1hcnlbMF0sXHJcbiAgICAgICAgICAgIG1hbmFnZXI6IGNhbXBhaWduU3VtbWFyeVs0XSxcclxuICAgICAgICAgICAgYmFsYW5jZTogY2FtcGFpZ25TdW1tYXJ5WzFdLFxyXG4gICAgICAgICAgICByZXF1ZXN0Q291bnQ6IGNhbXBhaWduU3VtbWFyeVsyXSxcclxuICAgICAgICAgICAgYXBwcm92ZXJzQ291bnQ6IGNhbXBhaWduU3VtbWFyeVszXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGgzPkNhbXBhaWduIERldGFpbHMge3RoaXMucHJvcHMubWFuYWdlcn08L2gzPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfT48L0NvbnRyaWJ1dGVGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5WaWV3IFJlcXVlc3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkcygpe1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYmFsYW5jZSxcclxuICAgICAgICAgICAgbWFuYWdlcixcclxuICAgICAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgICAgICAgcmVxdWVzdENvdW50LFxyXG4gICAgICAgICAgICBhcHByb3ZlcnNDb3VudFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnQWRkcmVzcyBvZiBtYW5hZ2VyJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjYW4gY3JlYXRlIHJlcXVlc3QgdG8gc3BlbmQgbW9uZXknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6e292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCAnZXRoZXInKSAsXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnQ2FtcGFpZ24gYmFsYW5jZSAoZXRoZXIpJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJhbGFuY2UgZm9yIHRoaXMgY2FtcGFpZ24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01pbmltdW0gY29udHJpYnV0aW9uIHRvIHRoZSBjYW1wYWlnbiB0byBiZWNvbWUgYW4gYXBwcm92ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogcmVxdWVzdENvdW50LFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ1JlcXVlc3QgQ291bnQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2Ygc3BlbmQgcmVxdWVzdCBmb3IgdGhpcyBjYW1wYWlnbi4gQSByZXF1ZXN0IHRyaWVzIHRvIHdpdGhkcmF3IG1vbmV5IGZyb20gY29udHJhY3QuIFJlcXVlc3QgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnMgdG8gdGFrZSBtb25leSBmcm9tIGNvbnRyYWN0LidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdBcHByb3ZlcnMgY291bnQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2YgYXBwcm92ZXJzIHdobyBoYXZlIGFscmVhZHkgZG9uYXRlZCB0byB0aGUgY2FtcGFpZ24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzP2VudHJ5IiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnbmV4dC1yb3V0ZXMnKSgpO1xyXG5cclxucm91dGVzXHJcbiAgICAuYWRkKCcvY2FtcGFpZ25zL25ldycsICcvY2FtcGFpZ25zL25ldycpXHJcbiAgICAuYWRkKCcvY2FtcGFpZ25zLzphZGRyZXNzJywgJy9jYW1wYWlnbnMvc2hvdycpXHJcbiAgICAuYWRkKCcvY2FtcGFpZ25zLzphZGRyZXNzL3JlcXVlc3RzJywnL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleCcpXHJcbiAgICAuYWRkKCcvY2FtcGFpZ25zLzphZGRyZXNzL3JlcXVlc3RzL25ldycsJy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3Jyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yb3V0ZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUUE7Ozs7QUFFQTtBQU9BO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBTUE7QUFFQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUlBO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7QUE1RUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9