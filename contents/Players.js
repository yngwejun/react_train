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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* 子组件：Players */
var Players =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Players, _React$Component);

  function Players(props) {
    var _this;

    _classCallCheck(this, Players);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Players).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();

      if (_this.myInputOne != '' && _this.myInputOne != null) {
        _this.setState({
          playerOne: _this.myInputOne.current.value
        });

        console.log("player1设置成功！！！当前状态：" + _this.state);
      }

      if (_this.myInputTwo != '' && _this.myInputTwo != null) {
        _this.setState({
          playerTwo: _this.myInputTwo.current.value
        });

        console.log("player1设置成功！！！当前状态：" + _this.state);
      }

      console.log("当前的值：" + _this.myInputOne.current.value);
      console.log("当前的值：" + _this.myInputTwo.current.value);
    });

    _this.state = {
      playerOne: '',
      playerTwo: ''
    };
    _this.myInputOne = _react["default"].createRef();
    _this.myInputTwo = _react["default"].createRef();
    return _this;
  }

  _createClass(Players, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextStates) {
      // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染
      if (nextStates !== this.state) {
        return true;
      }
    }
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
        }, _react["default"].createElement("p", null, item), _react["default"].createElement("from", {
          onSubmit: function onSubmit(e) {
            return _this2.handleSubmit(item);
          }
        }, _react["default"].createElement("input", {
          placeholder: "Github UserName",
          type: "text",
          style: {
            width: '250px',
            height: '30px'
          },
          ref: _this2.handleRefName(item)
          /* onChange={event=>this.handleGetInputValue(event,item) }*/

        }), _react["default"].createElement("button", {
          style: {
            height: '30px',
            width: '150px',
            marginLeft: '25px'
          },
          onClick: _this2.handleSubmit
          /* onClick={this.handlePost(item)} */

        }, "commit")));
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
      }, pitems));
    }
  }]);

  return Players;
}(_react["default"].Component);

var _default = Players;
exports["default"] = _default;