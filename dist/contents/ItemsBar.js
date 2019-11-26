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

/* 子组件： */
var ItemsBar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ItemsBar, _React$Component);

  function ItemsBar() {
    (0, _classCallCheck2["default"])(this, ItemsBar);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ItemsBar).apply(this, arguments));
  }

  (0, _createClass2["default"])(ItemsBar, [{
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
          className: item.clas,
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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ItemsBar;
}(_react["default"].Component);

var _default = ItemsBar;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ItemsBar, "ItemsBar", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\ItemsBar.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\ItemsBar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();