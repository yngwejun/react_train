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

var _Instructions = _interopRequireDefault(require("./Instructions"));

var _Players = _interopRequireDefault(require("./Players"));

var _BattleRes = _interopRequireDefault(require("./BattleRes"));

var _axios = _interopRequireDefault(require("axios"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var BattleContent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(BattleContent, _React$Component);

  function BattleContent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, BattleContent);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(BattleContent).call(this, props));
    _this.state = {
      playerOneData: [],
      playerTwoData: []
    };
    return _this;
  }
  /* ------------------------------------------------- */

  /* 测试  获得github用户数据 */


  (0, _createClass2["default"])(BattleContent, [{
    key: "handleGitUser",
    value: function handleGitUser(p1, p2, e3) {
      var UserDataOne, UserDataTwo;
      return _regenerator["default"].async(function handleGitUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("搜索github用户测试输出：");

              if (!(p1 == null || p1 == '' || p2 == null || p2 == '')) {
                _context.next = 8;
                break;
              }

              e3.preventDefault(); // 阻止合成事件的冒泡

              e3.stopPropagation(); // 阻止与原生事件的冒泡

              e3.nativeEvent.stopImmediatePropagation();
              console.log("此刻，输入框的参数为空，不进行battle操作！！！");
              _context.next = 19;
              break;

            case 8:
              e3.preventDefault(); // 阻止合成事件的冒泡

              e3.stopPropagation(); // 阻止与原生事件的冒泡

              e3.nativeEvent.stopImmediatePropagation();
              _context.next = 13;
              return _regenerator["default"].awrap(_axios["default"].get("https://api.github.com/users/" + p1));

            case 13:
              UserDataOne = _context.sent;
              _context.next = 16;
              return _regenerator["default"].awrap(_axios["default"].get("https://api.github.com/users/" + p2));

            case 16:
              UserDataTwo = _context.sent;
              this.setState({
                playerOneData: UserDataOne,
                playerTwoData: UserDataTwo
              });
              console.log('UserData', "player1的编号：" + UserDataOne.data.id + "player2的编号：" + UserDataTwo.data.id);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
    /* -------------------------------------- */

    /* ---------------------------------- */

  }, {
    key: "render",
    value: function render() {
      var v1 = this.state.value1;
      var v2 = this.state.value2;
      var pdt1 = this.state.playerOneData;
      var pdt2 = this.state.playerTwoData;
      return _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: '1200px',
          margin: '0px auto',
          alignItem: 'center'
        }
      }, _react["default"].createElement(Switch, null, _react["default"].createElement(Route, {
        path: "/battle"
      }, _react["default"].createElement("div", null, _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row'
        }
      }, _react["default"].createElement(_Instructions["default"], null)), _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row'
        }
      }, _react["default"].createElement(_Players["default"], {
        handleGitUser: this.handleGitUser.bind(this),
        playerOneData: pdt1,
        playerTwoData: pdt2
      }))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return BattleContent;
}(_react["default"].Component);

var _default = BattleContent;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BattleContent, "BattleContent", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\BattleContent.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\BattleContent.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();