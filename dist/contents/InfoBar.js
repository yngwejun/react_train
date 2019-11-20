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

/* 子组件一：数据单元显示组件： */
var InfoBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InfoBar, _React$Component);

  function InfoBar(props) {
    var _this;

    _classCallCheck(this, InfoBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfoBar).call(this, props));
    _this.state = {
      repos: [],
      path: props.scale,
      loading: true
    };
    /*  this.setState(repos : ) */

    return _this;
  }
  /* ---------------------- */


  _createClass(InfoBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var res;
      return regeneratorRuntime.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(axios.get(this.props.scale));

            case 2:
              res = _context.sent;
              console.log('res', res.data);
              this.setState({
                repos: res.data.items
              });
              this.setState({
                loading: false
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
    /* -------------------------------------- */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var res;
      return regeneratorRuntime.async(function componentWillReceiveProps$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.setState({
                loading: true
              });
              _context2.next = 3;
              return regeneratorRuntime.awrap(axios.get(nextProps.scale));

            case 3:
              res = _context2.sent;
              console.log('res', res.data);
              this.setState({
                repos: res.data.items,
                loading: false
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
    /* ---------------------------------------------- */

    /* --------------------------------------------- */

  }, {
    key: "render",
    value: function render() {
      console.log("infobar测试输出：" + this.state.repos + this.props.scale);
      var n = 0;
      var list = this.state.repos.map(function (item, key) {
        return _react["default"].createElement("li", {
          key: item.id,
          style: {
            listStyle: 'none',
            width: '280px',
            margin: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.08)'
          }
        }, _react["default"].createElement("h3", {
          style: {
            textAlign: 'center'
          }
        }, "#", ++n), " ", _react["default"].createElement("img", {
          src: item.owner.avatar_url,
          style: {
            width: '200px',
            height: '200px',
            margin: '0 auto',
            display: 'block'
          }
        }), _react["default"].createElement("p", {
          style: {
            textAlign: 'center'
          }
        }, _react["default"].createElement("a", {
          href: item.html_url,
          style: {
            textDecoration: 'none',
            color: 'red'
          }
        }, item.name)), _react["default"].createElement("p", {
          style: {
            marginLeft: '10px'
          }
        }, _react["default"].createElement("i", {
          "class": "fa fa-user",
          style: {
            color: 'rgb(233, 174, 14)'
          }
        }), _react["default"].createElement("a", {
          href: item.owner.html_url,
          style: {
            textDecoration: 'none'
          }
        }, item.name)), "  ", _react["default"].createElement("p", {
          style: {
            marginLeft: '10px'
          }
        }, _react["default"].createElement("i", {
          "class": "fa fa-star",
          style: {
            color: 'yellow'
          }
        }), item.stargazers_count), " ", _react["default"].createElement("p", {
          style: {
            marginLeft: '10px'
          }
        }, " ", _react["default"].createElement("i", {
          "class": "fa fa-code-fork",
          style: {
            color: 'rgb(67, 120, 219)'
          }
        }), item.forks), _react["default"].createElement("p", {
          style: {
            marginLeft: '10px'
          }
        }, _react["default"].createElement("i", {
          "class": "fa fa-warning",
          style: {
            color: 'red'
          }
        }), item.open_issues_count));
      });
      return _react["default"].createElement("div", null, this.state.loading ? _react["default"].createElement("div", {
        "class": "loading_wrap"
      }, _react["default"].createElement("div", {
        "class": "loading spin"
      })) : _react["default"].createElement("ul", {
        style: {
          width: '1200px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          margin: 0,
          padding: 0,
          alignContent: 'space-between',
          minHeight: '3900px'
        }
      }, list));
    }
  }]);

  return InfoBar;
}(_react["default"].Component);

var _default = InfoBar;
exports["default"] = _default;