import React from "react";
import NavHead from './NavHead';
import BattleContent from './BattleContent';
import Content from './Content';
import {host, hot} from 'react-hot-loader/root'
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
        this.state={isPopular:true}
    }
    handlePages(pageFlag){

        this.setState({isPopular:pageFlag})
    }
   render(){
       
       return <div><div style={{display:'flex',flexDirection:'column',width:'1200px',margin:'0px auto',alignItem:'center'}}><NavHead handlePages={this.handlePages.bind(this)} scale={this.state.isPopular}/></div>
       {this.state.isPopular?<div>
           
       <div><Content/></div>
       </div>:<div>   
          
            <div><BattleContent/></div>
            </div>
     
   }
            </div>
       
       
   }
   
 } 
/*export default App; */
export default hot(App);