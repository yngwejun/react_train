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
/* 父组件 */

var Content =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(props) {
    var _this;

    _classCallCheck(this, Content);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Content).call(this, props));
    _this.state = {
      path: scaleNames.path_all
    };
    return _this;
  }
  /* ------------------------------------ */

  /* ------------------------------------------- */


  _createClass(Content, [{
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
      }, _react["default"].createElement(CenterLink, {
        handlePath: this.handlePath.bind(this),
        scale: this.state.path
      })), _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row'
        }
      }, _react["default"].createElement(InfoBar, {
        scale: this.state.path
      })));
    }
  }]);

  return Content;
}(_react["default"].Component);

var _default = Content;
exports["default"] = _default;