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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _ImgShows = _interopRequireDefault(require("./ImgShows"));

var _reactRouterDom = require("react-router-dom");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var Players =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Players, _React$Component);

  function Players(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Players);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Players).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault(); // 阻止合成事件的冒泡

      e.stopPropagation(); // 阻止与原生事件的冒泡

      e.nativeEvent.stopImmediatePropagation();

      if (_this.myInputOne != '' || _this.myInputOne != null) {
        _this.setState({
          playerOne: _this.myInputOne.current.value
        });

        console.log("player1设置成功！！！当前状态：" + _this.state);
      }

      if (_this.myInputTwo != '' || _this.myInputTwo != null) {
        _this.setState({
          playerTwo: _this.myInputTwo.current.value
        });

        console.log("player2设置成功！！！当前状态：" + _this.state);
      }

      console.log("当前的值：" + _this.myInputOne.current.value);
      console.log("当前的值：" + _this.myInputTwo.current.value);
      return false;
    });
    _this.state = {
      playerOne: '',
      playerTwo: '',
      img_url_1: '',
      img_url_2: '',
      Ulogin1: '',
      Ulogin2: ''
    };
    _this.myInputOne = _react["default"].createRef();
    _this.myInputTwo = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(Players, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var res, img1, l1, res2, img2, l2;
      return _regenerator["default"].async(function componentDidUpdate$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(this.state.playerOne != '' && this.state.playerOne != null)) {
                _context.next = 9;
                break;
              }

              console.log("player1设置成功！！！当前状态：" + this.state);
              _context.next = 4;
              return _regenerator["default"].awrap(_axios["default"].get("https://api.github.com/users/" + this.state.playerOne));

            case 4:
              res = _context.sent;
              img1 = res.data.avatar_url;
              l1 = res.data.login;
              this.setState({
                img_url_1: img1,
                Ulogin1: l1
              });
              console.log('res', res.data);

            case 9:
              if (!(this.state.playerTwo != '' && this.state.playerTwo != null)) {
                _context.next = 18;
                break;
              }

              console.log("player2设置成功！！！当前状态：" + this.state);
              _context.next = 13;
              return _regenerator["default"].awrap(_axios["default"].get("https://api.github.com/users/" + this.state.playerTwo));

            case 13:
              res2 = _context.sent;
              img2 = res2.data.avatar_url;
              l2 = res2.data.login;
              this.setState({
                img_url_2: img2,
                Ulogin2: l2
              });
              console.log('res2', res2.data);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
    /*  componentWillReceiveProps(nextProps) {
         this.setState({playerOneData: nextProps.playerOneData,playerTwoData:nextProps.playerTwoData});
     } */

  }, {
    key: "handleRefName",
    value: function handleRefName(item) {
      if (item == "PlayerOne") {
        console.log("路径一正确");
        return this.myInputOne;
      } else if (item == 'PlayerTwo') {
        console.log("路径二正确");
        return this.myInputTwo;
      }
    }
    /* ------------------------------------------------ */

  }, {
    key: "shouldComponentUpdate",

    /* ----------------- */
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.img_url_1 !== nextState.img_url_1) {
        console.log('测试当前状态是否渲染---------------：', this.state);
        return true;
      }

      if (this.state.img_url_2 !== nextState.img_url_2) {
        console.log('测试当前状态是否渲染---------------：', this.state);
        return true;
      }

      if (this.state.playerOne !== nextState.playerOne) {
        console.log('测试当前状态是否渲染---------------：', this.state);
        return true;
      }

      if (this.state.playerTwo !== nextState.playerTwo) {
        console.log('测试当前状态是否渲染---------------：', this.state);
        return true;
      } else return false;
    }
    /* -------------------- */

  }, {
    key: "handleClassName",
    value: function handleClassName(item) {
      if (item == 'PlayerOne') {
        return 'hiddeninputOne';
      } else return 'hiddeninputTwo';
    }
    /* --------------- */

  }, {
    key: "handleShows",
    value: function handleShows(item) {
      if (item == 'PlayerOne' && this.state.playerOne == '') {
        return 'visible';
      } else if (item == 'PlayerTwo' && this.state.playerTwo == '') {
        return 'visible';
      } else return 'hidden';
    }
    /*  */

  }, {
    key: "reverseShows",
    value: function reverseShows(item) {
      if (item == 'PlayerOne' && this.state.playerOne == '') {
        return 'hidden';
      } else if (item == 'PlayerTwo' && this.state.playerTwo == '') {
        return 'hidden';
      } else return 'visible';
    }
  }, {
    key: "reverseGitHubshows",
    value: function reverseGitHubshows(item) {
      if (item == 'PlayerOne' && this.state.playerOne == '') {
        return 'none';
      } else if (item == 'PlayerTwo' && this.state.playerTwo == '') {
        return 'none';
      } else return 'block';
    }
    /*  */

  }, {
    key: "buttonShow",
    value: function buttonShow() {
      if (this.state.playerOne == '' || this.state.playerOne == null || this.state.playerTwo == '' || this.state.playerTwo == null) {
        return 'none';
      } else return 'block';
    }
    /* ------------------------ */

    /*  */

  }, {
    key: "handleXimg",
    value: function handleXimg(item, event) {
      event.preventDefault(); // 阻止合成事件的冒泡

      event.stopPropagation(); // 阻止与原生事件的冒泡

      event.nativeEvent.stopImmediatePropagation();
      console.log('testxxxxximg');

      if (item == 'PlayerOne') {
        this.setState({
          playerOne: ''
        });
        this.myInputOne.current.value = null;
      } else if (item == 'PlayerTwo') {
        this.setState({
          playerTwo: ''
        });
        this.myInputTwo.current.value = null;
      }
    }
    /* ------------------- */

    /* ---------------------------- */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      /* 定义两个玩家： */
      var players = ['PlayerOne', 'PlayerTwo'];
      var pitems = players.map(function (item) {
        return _react["default"].createElement("li", {
          style: {
            width: '500px',
            listStyle: 'none'
          }
        }, _react["default"].createElement("p", null, item), _react["default"].createElement("div", {
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            visibility: _this2.reverseShows(item)
          }
        }, _react["default"].createElement("button", {
          style: {
            border: 'none',
            width: '50px',
            height: '50px',
            marginLeft: '450px'
          },
          onClick: function onClick(event) {
            return _this2.handleXimg(item, event);
          }
        }, _react["default"].createElement("i", {
          className: "fa fa-close",
          style: {
            fontSize: '48px',
            color: 'red'
          }
        })), _react["default"].createElement("div", {
          style: {
            visibility: _this2.handleShows(item)
          }
        }, _react["default"].createElement("from", {
          onSubmit: function onSubmit(e) {
            return _this2.handleSubmit(item);
          }
        }, _react["default"].createElement("input", {
          className: _this2.handleClassName(item),
          placeholder: "Github UserName",
          type: "text",
          style: {
            width: '250px',
            height: '30px'
          },
          ref: _this2.handleRefName(item)
        }), _react["default"].createElement("button", {
          style: {
            height: '30px',
            width: '150px',
            marginLeft: '25px',
            border: 'none',
            textDecoration: 'none',
            cursor: 'pointer'
          },
          onClick: _this2.handleSubmit
        }, "commit"))), _react["default"].createElement("div", null, item == 'PlayerOne' ? _react["default"].createElement("div", null, _react["default"].createElement(_ImgShows["default"], {
          img: _this2.state.img_url_1,
          login: _this2.state.Ulogin1
        })) : _react["default"].createElement("div", null, _react["default"].createElement(_ImgShows["default"], {
          img: _this2.state.img_url_2,
          login: _this2.state.Ulogin2
        })))));
      });
      console.log(this.state);
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        style: {
          width: '1200px'
        }
      }, _react["default"].createElement("p", {
        style: {
          fontSize: '30px',
          textAlign: 'center'
        }
      }, "Players")), _react["default"].createElement("ul", {
        style: {
          paddingLeft: '0px',
          width: '1200px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }
      }, pitems), _react["default"].createElement("div", {
        style: {
          width: '1200px',
          height: '65px',
          margin: '0 auto',
          display: this.buttonShow(),
          textAlign: 'center'
        }
      }, _react["default"].createElement("button", {
        style: {
          width: '400px',
          height: '60px',
          border: 'none',
          textDecoration: 'none',
          cursor: 'pointer',
          backgroundColor: 'black',
          color: 'white',
          fontSize: '40px',
          fontWeight: 'bold'
        },
        onClick: function onClick(e3) {
          return _this2.props.handleGitUser(_this2.state.playerOne, _this2.state.playerTwo, e3);
        }
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/battleres"
      }, "BATTLE!!!"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Players;
}(_react["default"].Component);

var _default = Players;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Players, "Players", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\Players.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\Players.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();