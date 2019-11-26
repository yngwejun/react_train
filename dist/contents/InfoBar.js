"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

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

/* 子组件一：数据单元显示组件： */
var InfoBar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(InfoBar, _React$Component);

  function InfoBar(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InfoBar);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(InfoBar).call(this, props));
    _this.state = {
      repos: [],
      path: props.scale,
      loading: true
    };
    /*  this.setState(repos : ) */

    return _this;
  }
  /* ---------------------- */


  (0, _createClass2["default"])(InfoBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var res;
      return _regenerator["default"].async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _regenerator["default"].awrap(_axios["default"].get(this.props.scale));

            case 2:
              res = _context.sent;
              console.log('res', res.data);
              this.setState({
                repos: res.data.items,
                loading: false
              });

            case 5:
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
      return _regenerator["default"].async(function componentWillReceiveProps$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.setState({
                loading: true
              });
              _context2.next = 3;
              return _regenerator["default"].awrap(_axios["default"].get(nextProps.scale));

            case 3:
              res = _context2.sent;
              console.log('res', res.data);
              this.setState({
                repos: res.data.items
              });
              this.setState({
                loading: false
              });

            case 7:
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
          className: "fa fa-user",
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
          className: "fa fa-star",
          style: {
            color: 'yellow'
          }
        }), item.stargazers_count), " ", _react["default"].createElement("p", {
          style: {
            marginLeft: '10px'
          }
        }, " ", _react["default"].createElement("i", {
          className: "fa fa-code-fork",
          style: {
            color: 'rgb(67, 120, 219)'
          }
        }), item.forks), _react["default"].createElement("p", {
          style: {
            marginLeft: '10px'
          }
        }, _react["default"].createElement("i", {
          className: "fa fa-warning",
          style: {
            color: 'red'
          }
        }), item.open_issues_count));
      });
      return _react["default"].createElement("div", null, this.state.loading ? _react["default"].createElement("div", {
        className: "loading_wrap"
      }, _react["default"].createElement("div", {
        className: "loading spin"
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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return InfoBar;
}(_react["default"].Component);

var _default = InfoBar;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InfoBar, "InfoBar", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\InfoBar.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\InfoBar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();