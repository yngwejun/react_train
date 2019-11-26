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
/* 子组件：导航组件 */

var CenterLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CenterLink, _React$Component);

  function CenterLink(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CenterLink);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CenterLink).call(this, props));
    _this.state = {
      path: _this.props.scale
    };

    _this.setState({
      path: _this.props.scale
    });

    return _this;
  }
  /* --------------------------------------------- */


  (0, _createClass2["default"])(CenterLink, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props, nextProps) {
      this.setState({
        path: props.scale
      });
    }
    /* --------------------------------------------- */

    /* 当前状态相应按钮显示红色： */

  }, {
    key: "handleColor",
    value: function handleColor(btn) {
      if (this.state.path == scaleNames.path_all && btn == 'All') {
        return 'red';
      }

      if (this.state.path == scaleNames.path_javascript && btn == 'JavaScript') {
        return 'red';
      }

      if (this.state.path == scaleNames.path_ruby && btn == 'Ruby') {
        return 'red';
      }

      if (this.state.path == scaleNames.path_java && btn == 'Java') {
        return 'red';
      }

      if (this.state.path == scaleNames.path_css && btn == 'CSS') {
        return 'red';
      }
    }
    /* ------------------------------------------------------- */

    /* ------------------------------------------------------- */

    /* --------------------------------------------------------- */

    /* 定义按钮： */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var butn = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
      /* 打印按钮 */

      var listItems = butn.map(function (btn) {
        return _react["default"].createElement("li", {
          btn1: btn,
          style: {
            listStyle: 'none'
          }
        }, _react["default"].createElement("button", {
          style: {
            border: 'none',
            color: _this2.handleColor(btn),
            backgroundColor: 'white',
            fontSize: '20px'
          },
          onClick: function onClick() {
            return _this2.props.handlePath(btn);
          }
        }, btn));
      });
      /*  Console.log(btn); */

      return _react["default"].createElement("div", {
        style: {
          width: '400px',
          margin: '0 auto'
        }
      }, _react["default"].createElement("ul", {
        style: {
          paddingLeft: '0px',
          width: '400px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }
      }, listItems));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return CenterLink;
}(_react["default"].Component);

var _default = CenterLink;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(scaleNames, "scaleNames", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\CenterLink.js");
  reactHotLoader.register(CenterLink, "CenterLink", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\CenterLink.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\CenterLink.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();