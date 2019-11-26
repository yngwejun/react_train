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

var BattleRes =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(BattleRes, _React$Component);

  function BattleRes(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, BattleRes);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(BattleRes).call(this, props));
    _this.state = {
      playerOneData: _this.props.playerOneData,
      playerTwoData: _this.props.playerTwoData
    };

    _this.setState({
      playerOneData: _this.props.playerOneData,
      playerTwoData: _this.props.playerTwoData
    });

    console.log(_this.state.playerOneData);
    return _this;
  }

  (0, _createClass2["default"])(BattleRes, [{
    key: "handleScoreP1",
    value: function handleScoreP1(p1, p2) {
      if (p1 > p2) {
        return 'Winner';
      } else if (p1 == p2) {
        return 'NoWinner';
      } else return 'Loser';
    }
  }, {
    key: "handleScoreP2",
    value: function handleScoreP2(p1, p2) {
      if (p1 < p2) {
        return 'Winner';
      } else if (p1 == p2) {
        return 'NoWinner';
      } else return 'Loser';
    }
  }, {
    key: "render",
    value: function render() {
      var p1_items = this.state.playerOneData.data;
      var p2_items = this.state.playerTwoData.data;
      var p1 = p1_items.public_repos;
      var p2 = p2_items.public_repos;
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        style: {
          width: '1200px',
          margin: '0 auto'
        }
      }, _react["default"].createElement("ul", {
        style: {
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'space-around'
        }
      }, _react["default"].createElement("li", {
        style: {
          listStyle: 'none',
          width: '280px',
          margin: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.08)'
        }
      }, _react["default"].createElement("div", {
        style: {
          width: '240px',
          marginLeft: '20px',
          marginTop: '20px'
        }
      }, _react["default"].createElement("h3", {
        style: {
          textAlign: "center",
          marginTop: '20px'
        }
      }, this.handleScoreP1(p1, p2)), _react["default"].createElement("div", null, _react["default"].createElement("img", {
        src: p1_items.avatar_url,
        style: {
          width: '200px',
          height: '200px',
          margin: '0 auto',
          display: 'block'
        }
      })), _react["default"].createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, _react["default"].createElement("p", null, "score:", p1_items.public_repos * 15), _react["default"].createElement("a", {
        style: {
          color: 'red',
          textDecoration: 'none'
        },
        href: p1_items.html_url
      }, p1_items.login)), _react["default"].createElement("div", {
        style: {
          marginBottom: '20px'
        }
      }, _react["default"].createElement("div", {
        style: {
          marginTop: '20px'
        }
      }, _react["default"].createElement("i", {
        "class": "fa fa-user",
        style: {
          fontSize: '22px',
          color: 'rgba(230, 52, 40, 0.39)'
        }
      })), _react["default"].createElement("div", {
        style: {
          marginTop: '20px'
        }
      }, _react["default"].createElement("i", {
        "class": "fa fa-users",
        style: {
          fontSize: '22px',
          color: 'rgba(114, 186, 219, 0.39)'
        }
      }), "followers", p1_items.followers), _react["default"].createElement("div", {
        style: {
          marginTop: '20px'
        }
      }, _react["default"].createElement("i", {
        "class": "fa fa-group",
        style: {
          fontSize: '22px',
          color: 'rgba(65, 218, 78, 0.39)'
        }
      }), "following", p1_items.following), _react["default"].createElement("div", {
        style: {
          marginTop: '20px'
        }
      }, _react["default"].createElement("i", {
        "class": "fa fa-code",
        style: {
          fontSize: '22px',
          color: 'rgba(4, 61, 9, 0.39)'
        }
      }), "repositories", p1_items.public_repos)), _react["default"].createElement("div", {
        style: {
          height: '20px'
        }
      }))), _react["default"].createElement("li", {
        style: {
          listStyle: 'none',
          width: '280px',
          margin: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.08)'
        }
      }, _react["default"].createElement("div", {
        style: {
          width: '240px',
          marginLeft: '20px',
          marginTop: '20px'
        }
      }, _react["default"].createElement("h3", {
        style: {
          textAlign: "center",
          marginTop: '20px'
        }
      }, this.handleScoreP2(p1, p2)), _react["default"].createElement("div", null, _react["default"].createElement("img", {
        src: p2_items.avatar_url,
        style: {
          width: '200px',
          height: '200px',
          margin: '0 auto',
          display: 'block'
        }
      })), _react["default"].createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, _react["default"].createElement("p", null, "score:", p2_items.public_repos * 15), _react["default"].createElement("a", {
        style: {
          color: 'red',
          textDecoration: 'none'
        },
        href: p2_items.html_url
      }, p2_items.login)), _react["default"].createElement("div", {
        style: {
          marginBottom: '20px'
        }
      }, _react["default"].createElement("p", null, _react["default"].createElement("div", {
        style: {
          marginTop: '20px'
        }
      }, _react["default"].createElement("i", {
        "class": "fa fa-user",
        style: {
          fontSize: '22px',
          color: 'rgba(230, 52, 40, 0.39)'
        }
      })), _react["default"].createElement("div", {
        style: {
          marginTop: '20px'
        }
      }, _react["default"].createElement("i", {
        "class": "fa fa-users",
        style: {
          fontSize: '22px',
          color: 'rgba(114, 186, 219, 0.39)'
        }
      }), "followers", p2_items.followers), _react["default"].createElement("div", {
        style: {
          marginTop: '20px'
        }
      }, _react["default"].createElement("i", {
        "class": "fa fa-group",
        style: {
          fontSize: '22px',
          color: 'rgba(65, 218, 78, 0.39)'
        }
      }), "following", p2_items.following), _react["default"].createElement("div", {
        style: {
          marginTop: '20px'
        }
      }, _react["default"].createElement("i", {
        "class": "fa fa-code",
        style: {
          fontSize: '22px',
          color: 'rgba(4, 61, 9, 0.39)'
        }
      }), "repositories", p2_items.public_repos))), _react["default"].createElement("div", {
        style: {
          height: '20px'
        }
      })))), _react["default"].createElement("div", {
        style: {
          width: '1200px',
          margin: '20px auto',
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
        onClick: this.props.handlePreset
      }, "preset"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return BattleRes;
}(_react["default"].Component);

var _default = BattleRes;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BattleRes, "BattleRes", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\BattleRes.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\23774\\Desktop\\webre\\src\\contents\\BattleRes.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();