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

var _axios = _interopRequireDefault(require("axios"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var ImgShows =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ImgShows, _React$Component);

  function ImgShows(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ImgShows);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ImgShows).call(this, props));
    _this.state = {
      img: _this.props.img,
      login: _this.props.login
    };
    return _this;
  }

  (0, _createClass2["default"])(ImgShows, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        style: {
          display: 'flex'
        }
      }, _react["default"].createElement("img", {
        src: this.props.img,
        style: {
          width: '40px',
          height: '40px'
        }
      }), _react["default"].createElement("div", {
        style: {
          width: '60px'
        }
      }), _react["default"].createElement("h3", null, this.props.login));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ImgShows;
}(_react["default"].Component);

var _default = ImgShows;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ImgShows, "ImgShows", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\ImgShows.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\ImgShows.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();