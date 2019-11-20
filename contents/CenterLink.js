"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
  _inherits(CenterLink, _React$Component);

  function CenterLink(props) {
    var _this;

    _classCallCheck(this, CenterLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CenterLink).call(this, props));
    _this.state = {
      path: _this.props.scale
    };

    _this.setState({
      path: _this.props.scale
    });

    return _this;
  }
  /* --------------------------------------------- */


  _createClass(CenterLink, [{
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
  }]);

  return CenterLink;
}(_react["default"].Component);

var _default = CenterLink;
exports["default"] = _default;