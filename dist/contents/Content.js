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

var _CenterLink = _interopRequireDefault(require("./CenterLink"));

var _InfoBar = _interopRequireDefault(require("./InfoBar"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/* 定义所用到的地址 */
var scaleNames = {
  path_all: 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories',
  path_javascript: 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories',
  path_ruby: 'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories',
  path_java: 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories',
  path_css: 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories'
};
/* 父组件 */

var Content =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Content, _React$Component);

  function Content(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Content);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Content).call(this, props));
    _this.state = {
      path: scaleNames.path_all
    };
    return _this;
  }
  /* ------------------------------------ */

  /* ------------------------------------------- */


  (0, _createClass2["default"])(Content, [{
    key: "handlePath",
    value: function handlePath(btn) {
      if (btn == 'All' && this.state == scaleNames.path_all || btn == 'JavaScript' && this.state == scaleNames.path_javascript || btn == 'Ruby' && this.state == scaleNames.path_ruby || btn == 'Java' && this.state == scaleNames.path_java || btn == 'CSS' && this.state == scaleNames.path_css) {} else {
        if (btn == 'All' && this.state != scaleNames.path_all) {
          this.setState({
            path: scaleNames.path_all
          });
          /*  console.log(this.state.path); */
        } else if (btn == 'JavaScript' && this.state != scaleNames.path_javascript) {
          //#endregion

          /* this.setState({path : scaleNames.path_javascript}) */
          this.setState({
            path: scaleNames.path_javascript
          });
        } else if (btn == 'Ruby' && this.state != scaleNames.path_ruby) {
          this.setState({
            path: scaleNames.path_ruby
          });
        } else if (btn == 'Java' && this.state != scaleNames.path_java) {
          this.setState({
            path: scaleNames.path_java
          });
        } else if (btn == 'CSS' && this.state != scaleNames.path_css) {
          this.setState({
            path: scaleNames.path_css
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.path);
      return _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: '1200px',
          margin: '0px auto',
          alignItem: 'center'
        }
      }, _react["default"].createElement("div", {
        style: {
          display: 'flex'
        }
      }, _react["default"].createElement(_CenterLink["default"], {
        handlePath: this.handlePath.bind(this),
        scale: this.state.path
      })), _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row'
        }
      }, _react["default"].createElement(_InfoBar["default"], {
        scale: this.state.path
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
  return Content;
}(_react["default"].Component);

var _default = Content;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(scaleNames, "scaleNames", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\Content.js");
  reactHotLoader.register(Content, "Content", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\Content.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\Content.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();