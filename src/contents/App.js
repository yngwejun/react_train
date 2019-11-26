import React from "react";
import NavHead from './NavHead';
import BattleContent from './BattleContent';
import Content from './Content';
import {host, hot} from 'react-hot-loader/root'
import { IndexRoute } from 'react-router-dom'
import { Redirect } from 'react-router'
import BattleRes from "./BattleRes";
import {Link} from "react-router-dom";
import { Router } from 'react-router-dom';

import { Route ,HashRouter,Switch} from 'react-router-dom'

/* 定义所用到的地址 */
const scaleNames={
    path_all:'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories',
    path_javascript:'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories',
    path_ruby:'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories',
    path_java:'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories',
    path_css:'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories'
}
/* APP组件 */
class App extends React.Component{
    constructor(props) {
        super(props);
     /*    this.state={isPopular:true} */
    }
/*     handlePages(pageFlag){

        this.setState({isPopular:pageFlag})
    } */
   render(){
       
       return <div>
        
    <HashRouter>
    <NavHead/>
         <Switch>
            <Route path="/" exact={true} component={Content}/>
                 <Route  path="/battle" component={BattleContent}/>
              
             
          </Switch>
     </HashRouter>
       
       </div>
     
           

       
   
       
   }
   
 } 
/* export default App; */
export default hot(App);