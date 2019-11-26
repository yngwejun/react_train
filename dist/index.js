"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _axios = _interopRequireDefault(require("axios"));

var _App = _interopRequireDefault(require("./contents/App"));

var _reactRouter = require("react-router");

var _BattleRes = _interopRequireDefault(require("./contents/BattleRes"));

var _reactRouterDom = require("react-router-dom");

var _BattleContent = _interopRequireDefault(require("./contents/BattleContent"));

var _Content = _interopRequireDefault(require("./contents/Content"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/* 定义所用到的地址 */
var scaleNames = {
  path_all: 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories',
  path_javascript: 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories',
  path_ruby: 'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories',
  path_java: 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories',
  path_css: 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories'
};

_reactDom["default"].render(_react["default"].createElement(_reactRouterDom.HashRouter, null, _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/",
  component: _App["default"]
}))), document.getElementById('app'));

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(scaleNames, "scaleNames", "C:\\Users\\23774\\Desktop\\webre\\src\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();