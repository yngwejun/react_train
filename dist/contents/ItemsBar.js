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

/* 子组件： */
var ItemsBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ItemsBar, _React$Component);

  function ItemsBar() {
    _classCallCheck(this, ItemsBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ItemsBar).apply(this, arguments));
  }

  _createClass(ItemsBar, [{
    key: "render",

    /* handleString(pont){
        let p;
        let s= pont.split('_');
      for(var i=0;i<s.length;i++){
      p+=s[i]+" ";
      }
        return p;
    } */
    value: function render() {
      /* 定义三个主功能 */
      var point = [
      /*   'Enter_two_Github_users',
        'Battle',
        'See_the_winner' */
      {
        name: 'Enter two Github users',
        clas: 'fa fa-users',
        color: 'brown'
      }, {
        name: 'Battle',
        clas: 'fa fa-space-shuttle',
        color: 'black'
      }, {
        name: 'See the winner',
        clas: 'fa fa-trophy',
        color: 'yellow'
      }];
      /* 遍历三个功能： */

      var items = point.map(function (item) {
        return _react["default"].createElement("li", {
          style: {
            width: '280px',
            listStyle: 'none',
            textAlign: 'center'
          }
        }, _react["default"].createElement("p", {
          style: {
            textAlign: 'center'
          }
        }, item.name), _react["default"].createElement("button", {
          style: {
            width: '200px',
            listStyle: 'none',
            textAlign: 'center',
            margin: '30px auto',
            border: 'none',
            paddingTop: '30px',
            paddingBottom: '30px',
            backgroundColor: 'rgba(0, 0, 0, 0.08)'
          }
        }, _react["default"].createElement("i", {
          "class": item.clas,
          style: {
            color: item.color,
            fontSize: '100px'
          }
        })));
      });
      /* --------------- */

      console.log(items);
      return _react["default"].createElement("div", {
        style: {
          width: '1200px',
          margin: '0 auto'
        }
      }, _react["default"].createElement("ul", {
        style: {
          paddingLeft: '0px',
          width: '1200px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }
      }, items));
    }
  }]);

  return ItemsBar;
}(_react["default"].Component);

var _default = ItemsBar;
exports["default"] = _default;