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

var _NavHead = _interopRequireDefault(require("./NavHead"));

var _BattleContent = _interopRequireDefault(require("./BattleContent"));

var _Content = _interopRequireDefault(require("./Content"));

var _root = require("react-hot-loader/root");

var _reactRouter = require("react-router");

var _BattleRes = _interopRequireDefault(require("./BattleRes"));

var _reactRouterDom = require("react-router-dom");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var scaleNames = {
  path_all: 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories',
  path_javascript: 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories',
  path_ruby: 'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories',
  path_java: 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories',
  path_css: 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories'
};
/* APP组件 */

var App =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(App, _React$Component);

  function App(props) {
    (0, _classCallCheck2["default"])(this, App);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(App).call(this, props));
    /*    this.state={isPopular:true} */
  }
  /*     handlePages(pageFlag){
  
          this.setState({isPopular:pageFlag})
      } */


  (0, _createClass2["default"])(App, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement(_NavHead["default"], null), ",", _react["default"].createElement(_Content["default"], null));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return App;
}(_react["default"].Component);
/* export default App; */


var _default = (0, _root.hot)(App);

var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(scaleNames, "scaleNames", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\App.js");
  reactHotLoader.register(App, "App", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\App.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();