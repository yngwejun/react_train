"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var scaleNames = {
  path_all: 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories',
  path_javascript: 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories',
  path_ruby: 'Ruby：https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories',
  path_java: 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories',
  path_css: 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories'
};

var InfoBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InfoBar, _React$Component);

  function InfoBar(props) {
    var _this;

    _classCallCheck(this, InfoBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfoBar).call(this, props));
    _this.state = {
      repos: _this.props.scale,
      path: _this.props.getp
    };

    _this.setState({
      repos: _this.props.scale
    });

    return _this;
  }
  /* -------------------------------------- */


  _createClass(InfoBar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props, nextProps) {
      if (this.props == nextProps) {
        return;
      }

      this.setState({
        repos: props.scale
      });
    }
    /*  componentWillReceiveProps(props,nextProps){
         this.setState({repos:props.scale});
     
     } */

    /* --------------------------------------------- */

  }, {
    key: "render",
    value: function render() {
      var n = 0;
      var list = this.state.repos.map(function (item, key) {
        return React.createElement("li", {
          key: item.id,
          style: {
            listStyle: 'none',
            width: '280px',
            margin: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.08)'
          }
        }, React.createElement("h3", {
          style: {
            textAlign: 'center'
          }
        }, "#", ++n), " ", React.createElement("img", {
          src: item.owner.avatar_url,
          style: {
            width: '200px',
            height: '200px',
            margin: '0 auto',
            display: 'block'
          }
        }), React.createElement("p", {
          style: {
            textAlign: 'center'
          }
        }, React.createElement("a", {
          href: item.html_url,
          style: {
            textDecoration: 'none',
            color: 'red'
          }
        }, item.name)), React.createElement("p", {
          style: {
            marginLeft: '10px'
          }
        }, React.createElement("i", {
          "class": "fa fa-user",
          style: {
            color: 'rgb(233, 174, 14)'
          }
        }), React.createElement("a", {
          href: item.owner.html_url,
          style: {
            textDecoration: 'none'
          }
        }, item.name)), "  ", React.createElement("p", {
          style: {
            marginLeft: '10px'
          }
        }, React.createElement("i", {
          "class": "fa fa-star",
          style: {
            color: 'yellow'
          }
        }), item.stargazers_count), " ", React.createElement("p", {
          style: {
            marginLeft: '10px'
          }
        }, " ", React.createElement("i", {
          "class": "fa fa-code-fork",
          style: {
            color: 'rgb(67, 120, 219)'
          }
        }), item.forks), React.createElement("p", {
          style: {
            marginLeft: '10px'
          }
        }, React.createElement("i", {
          "class": "fa fa-warning",
          style: {
            color: 'red'
          }
        }), item.open_issues_count));
      });
      return React.createElement("div", null, React.createElement("ul", {
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
}(React.Component);

var NavHead =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(NavHead, _React$Component2);

  function NavHead() {
    _classCallCheck(this, NavHead);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavHead).apply(this, arguments));
  }

  _createClass(NavHead, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          width: '1200PX',
          justifyContent: 'space-between'
        }
      }, React.createElement("ul", {
        style: {
          paddingLeft: '0px',
          display: 'flex',
          flexDirection: 'row',
          width: '130px',
          justifyContent: 'space-between'
        }
      }, React.createElement("li", {
        style: {
          padding: '0px',
          listStyle: 'none'
        }
      }, React.createElement("a", {
        style: {
          textDecoration: 'none',
          color: 'rgb(187,46,31)'
        }
      }, "Popular")), React.createElement("li", {
        style: {
          padding: '0px',
          listStyle: 'none'
        }
      }, React.createElement("a", {
        style: {
          textDecoration: 'none',
          color: 'black'
        }
      }, "Battle"))), React.createElement("button", {
        style: {
          border: 'none',
          backgroundColor: 'white'
        }
      }, React.createElement("i", {
        "class": "fa fa-lightbulb-o",
        style: {
          width: '50px',
          fontSize: '20px'
        }
      })));
    }
  }]);

  return NavHead;
}(React.Component);
/* ------------------------------------------------------------------ */


var CenterLink =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(CenterLink, _React$Component3);

  function CenterLink(props) {
    var _this2;

    _classCallCheck(this, CenterLink);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CenterLink).call(this, props));
    _this2.state = {
      path: _this2.props.scale
    };

    _this2.setState({
      path: _this2.props.scale
    });

    return _this2;
  }
  /*  handleClick =(path)=>{
       this.setState={path};
   
   } */

  /* --------------------------------------------- */


  _createClass(CenterLink, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props, nextProps) {
      this.setState({
        path: props.scale
      });
    }
    /* --------------------------------------------- */

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

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var butn = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
      var listItems = butn.map(function (btn) {
        return React.createElement("li", {
          btn1: btn,
          style: {
            listStyle: 'none'
          }
        }, React.createElement("button", {
          style: {
            border: 'none',
            color: _this3.handleColor(btn),
            backgroundColor: 'white',
            fontSize: '20px'
          },
          onClick: function onClick() {
            return _this3.props.handlePath(btn);
          }
        }, btn));
      });
      /*  Console.log(btn); */

      return React.createElement("div", {
        style: {
          width: '400px',
          margin: '0 auto'
        }
      }, React.createElement("ul", {
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
}(React.Component);
/* ------------------------------------------------------------------ */


var Content =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Content, _React$Component4);

  function Content(props) {
    var _this4;

    _classCallCheck(this, Content);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Content).call(this, props));
    _this4.state = {
      repos: [],
      path: scaleNames.path_all
    };
    return _this4;
  }
  /* ------------------------------------ */


  _createClass(Content, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var res;
      return regeneratorRuntime.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(axios.get(this.state.path));

            case 2:
              res = _context.sent;
              console.log('res', res.data);
              this.setState({
                repos: res.data.items
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextState) {
      if (this.setState !== null && this.state !== null && this.state !== '' && nextState !== '') return this.state.path !== nextState.path;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var a, res;
      return regeneratorRuntime.async(function componentDidUpdate$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              a = this.state.path;
              _context2.next = 3;
              return regeneratorRuntime.awrap(axios.get(a));

            case 3:
              res = _context2.sent;
              console.log('res', res.data);
              this.setState({
                repos: res.data.items
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
    /* async componentWillUpdate(){
        let a=this.state.path;
        let res=await axios.get(a);
         console.log('res',res.data);
         this.setState({repos:res.data.items}); 
    } */

    /* ------------------------------------------- */

  }, {
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
      return React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: '1200px',
          margin: '0px auto',
          alignItem: 'center'
        }
      }, React.createElement("div", {
        style: {
          display: 'flex'
        }
      }, React.createElement(NavHead, null)), React.createElement("div", {
        style: {
          display: 'flex'
        }
      }, React.createElement(CenterLink, {
        handlePath: this.handlePath.bind(this),
        scale: this.state.path
      })), React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row'
        }
      }, React.createElement(InfoBar, {
        scale: this.state.repos
      })));
    }
  }]);

  return Content;
}(React.Component);

var App =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(App, _React$Component5);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Content, null));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));