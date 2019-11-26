
/* import "@babel/polyfill"; */
import React from 'react';
import ReactDOM from 'react-dom';
/* import 'font-awesome/css/font-awesome.min.css'; */
import axios from 'axios';
import App from './contents/App';
import { IndexRoute } from 'react-router'
import { Redirect } from 'react-router'
import BattleRes from "./contents/BattleRes";
import {Link} from "react-router-dom";
import { Router } from 'react-router-dom';
import { Route ,HashRouter,Switch} from 'react-router-dom'
import BattleContent from './contents/BattleContent';
import Content from './contents/Content';

/* 定义所用到的地址 */
const scaleNames={
    path_all:'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories',
    path_javascript:'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories',
    path_ruby:'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories',
    path_java:'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories',
    path_css:'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories'
}


   ReactDOM.render(

    <App/>,
           document.getElementById('app')
       );
    