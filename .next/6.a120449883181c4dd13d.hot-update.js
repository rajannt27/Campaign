webpackHotUpdate(6,{

/***/ 1381:
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

var _campaign = __webpack_require__(1382);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(542);

var _web = __webpack_require__(1184);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'e:\\Learn\\Blockchain\\Campaign\\pages\\campaigns\\show.js?entry';


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
                    lineNumber: 22
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'Campaign Details ', this.props.managerx), this.renderCards());
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
                    lineNumber: 66
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJ3ZWIzIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJtYW5hZ2VyeCIsInJlbmRlckNhcmRzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiY2FtcGFpZ24iLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJjYW1wYWlnblN1bW1hcnkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFROztBQUNSLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7aUNBYU0sQUFDSjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFzQiwwQkFBQSxBQUFLLE1BRC9CLEFBQ0ksQUFBaUMsQUFDaEMsZ0JBSFQsQUFDSSxBQUVLLEFBQUssQUFHakI7Ozs7c0NBRVk7eUJBT0wsS0FQSyxBQU9BO2dCQVBBLEFBRUwsaUJBRkssQUFFTDtnQkFGSyxBQUdMLGlCQUhLLEFBR0w7Z0JBSEssQUFJTCw2QkFKSyxBQUlMO2dCQUpLLEFBS0wsc0JBTEssQUFLTDtnQkFMSyxBQU1MLHdCQU5LLEFBTUwsQUFFSjs7Z0JBQU07d0JBQ0YsQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFISixBQUdpQixBQUNiO3VCQUFNLEVBQUMsY0FMRCxBQUNWLEFBSVUsQUFBZTtBQUp6QixBQUNJLGFBRk07d0JBUUUsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRC9CLEFBQ1ksQUFBNEIsQUFDcEM7c0JBRkosQUFFVSxBQUNOOzZCQVZNLEFBT1YsQUFHaUI7QUFIakIsQUFDSTt3QkFJSixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQWZNLEFBWVYsQUFHaUI7QUFIakIsQUFDSTt3QkFJSixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQXBCTSxBQWlCVixBQUdpQjtBQUhqQixBQUNJO3dCQUlKLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBekJSLEFBQWMsQUFzQlYsQUFHaUIsQUFJckI7QUFQSSxBQUNJOztpREFNRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7OztpSCxBQTFEa0I7Ozs7O2lDQUNuQjtBLDJDQUFXLHdCQUFTLE1BQUEsQUFBTSxNQUFmLEFBQXFCLEE7O3VDQUNSLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEEsQUFBOEI7O2lDQUF0RDtBLDJEQUNOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWTs7eURBRWEsZ0JBRGxCLEFBQ2tCLEFBQWdCLEFBQ3JDOzZDQUFTLGdCQUZOLEFBRU0sQUFBZ0IsQUFDekI7NkNBQVMsZ0JBSE4sQUFHTSxBQUFnQixBQUN6QjtrREFBYyxnQkFKWCxBQUlXLEFBQWdCLEFBQzlCO29EQUFnQixnQkFBQSxBQUFnQixBLEFBTDdCO0FBQUEsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5lLEEsQUErRDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiZTovTGVhcm4vQmxvY2tjaGFpbi9DYW1wYWlnbiJ9

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "e:\\Learn\\Blockchain\\Campaign\\pages\\campaigns\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "e:\\Learn\\Blockchain\\Campaign\\pages\\campaigns\\show.js"); } } })();
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5hMTIwNDQ5ODgzMTgxYzRkZDEzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZWNkYTc0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi9FdGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9FdGhlcmV1bS93ZWIzJztcclxuXHJcbmNsYXNzIENhbXBhaWduU2hvdyBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ25TdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhbXBhaWduU3VtbWFyeSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogY2FtcGFpZ25TdW1tYXJ5WzBdLFxyXG4gICAgICAgICAgICBtYW5hZ2VyOiBjYW1wYWlnblN1bW1hcnlbNF0sXHJcbiAgICAgICAgICAgIGJhbGFuY2U6IGNhbXBhaWduU3VtbWFyeVsxXSxcclxuICAgICAgICAgICAgcmVxdWVzdENvdW50OiBjYW1wYWlnblN1bW1hcnlbMl0sXHJcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50OiBjYW1wYWlnblN1bW1hcnlbM11cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMz5DYW1wYWlnbiBEZXRhaWxzIHt0aGlzLnByb3BzLm1hbmFnZXJ4fTwvaDM+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhcmRzKCl7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBiYWxhbmNlLFxyXG4gICAgICAgICAgICBtYW5hZ2VyLFxyXG4gICAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgICAgICByZXF1ZXN0Q291bnQsXHJcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdBZGRyZXNzIG9mIG1hbmFnZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdCB0byBzcGVuZCBtb25leScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTp7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsICdldGhlcicpICxcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdDYW1wYWlnbiBiYWxhbmNlIChldGhlciknLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgYmFsYW5jZSBmb3IgdGhpcyBjYW1wYWlnbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWluaW11bSBjb250cmlidXRpb24gdG8gdGhlIGNhbXBhaWduIHRvIGJlY29tZSBhbiBhcHByb3ZlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiByZXF1ZXN0Q291bnQsXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnUmVxdWVzdCBDb3VudCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ051bWJlciBvZiBzcGVuZCByZXF1ZXN0IGZvciB0aGlzIGNhbXBhaWduLiBBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSBjb250cmFjdC4gUmVxdWVzdCBtdXN0IGJlIGFwcHJvdmVkIGJ5IGFwcHJvdmVycyB0byB0YWtlIG1vbmV5IGZyb20gY29udHJhY3QuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ0FwcHJvdmVycyBjb3VudCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ051bWJlciBvZiBhcHByb3ZlcnMgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoZSBjYW1wYWlnbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7QUFNQTtBQU9BO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBTUE7QUFFQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUlBO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7QUF6REE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=