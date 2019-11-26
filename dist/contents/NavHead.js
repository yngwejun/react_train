"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/* 组件：Popular &&&  Battle  组件*/
var NavHead =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(NavHead, _React$Component);

  function NavHead(props) {
    (0, _classCallCheck2["default"])(this, NavHead);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NavHead).call(this, props));
  }

  (0, _createClass2["default"])(NavHead, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          width: '1200PX',
          justifyContent: 'space-between',
          margin: '0 auto'
        }
      }, _react["default"].createElement("ul", {
        style: {
          paddingLeft: '0px',
          display: 'flex',
          flexDirection: 'row',
          width: '130px',
          justifyContent: 'space-between'
        }
      }, _react["default"].createElement("li", {
        style: {
          padding: '0px',
          listStyle: 'none'
        }
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/",
        style: {
          textDecoration: 'none'
        }
      }, "Popular")), _react["default"].createElement("li", {
        style: {
          padding: '0px',
          listStyle: 'none'
        }
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/battleres",
        style: {
          textDecoration: 'none'
        }
      }, "Battle"))), _react["default"].createElement("button", {
        style: {
          border: 'none',
          backgroundColor: 'white'
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-lightbulb-o",
        style: {
          width: '50px',
          fontSize: '20px'
        }
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return NavHead;
}(_react["default"].Component);

var _default = NavHead;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavHead, "NavHead", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\NavHead.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\NavHead.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();