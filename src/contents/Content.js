import React from "react";
import CenterLink from './CenterLink';
import InfoBar from './InfoBar';
import NavHead from "./NavHead";
import { Route ,HashRouter,Switch} from 'react-router-dom';
import BattleContent from "./BattleContent";
import BattleRes from "./BattleRes";
import InfiniteScroll from 'react-infinite-scroller';
/* 定义所用到的地址 */
const scaleNames={
    path_all:'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories',
    path_javascript:'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories',
    path_ruby:'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories',
    path_java:'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories',
    path_css:'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories'
}
 /* 父组件 */
 class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state={path:scaleNames.path_all}
    }
    /* ------------------------------------ */




    /* ------------------------------------------- */
    handlePath(btn){
        if((btn=='All'&&this.state==scaleNames.path_all)||(btn=='JavaScript'&&this.state==scaleNames.path_javascript)
        ||(btn=='Ruby'&&this.state==scaleNames.path_ruby)||(btn=='Java'&&this.state==scaleNames.path_java)
        ||(btn=='CSS'&&this.state==scaleNames.path_css)){}
        else{
     if(btn=='All'&&this.state!=scaleNames.path_all)
     {
         this.setState({path:scaleNames.path_all});
    
        /*  console.log(this.state.path); */
     }
     else if(btn=='JavaScript'&&this.state!=scaleNames.path_javascript)
     {   //#endregion
         
      /* this.setState({path : scaleNames.path_javascript}) */
        this.setState({path:scaleNames.path_javascript});
       
          
        
        
        
     }
     else if(btn=='Ruby'&&this.state!=scaleNames.path_ruby)
     {
         this.setState({path:scaleNames.path_ruby});
        
     }
     else if(btn=='Java'&&this.state!=scaleNames.path_java)
     {
         this.setState({path:scaleNames.path_java});
     
     }
     else if(btn=='CSS'&&this.state!=scaleNames.path_css)
     {
         this.setState({path:scaleNames.path_css});
      
     }
      
       
    }}  
    render(){
     
   console.log(this.state.path);
        return <div style={{display:'flex',flexDirection:'column',width:'1200px',margin:'0px auto',alignItem:'center'}}>
               <div style={{display :'flex'}}><CenterLink handlePath={this.handlePath.bind(this)} scale={this.state.path}/></div>
               <div style={{display :'flex',flexDirection:'row'}}><InfoBar scale={this.state.path} /></div>
            </div>
        
    }
}
export default Content;