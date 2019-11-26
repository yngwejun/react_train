import React from "react";
import {NavLink} from "react-router-dom";
/* 组件：Popular &&&  Battle  组件*/
class NavHead extends React.Component{
    constructor(props) {
        super(props);
    console.log("this.props:----Navheader---------",this.props);
    }

 
    render(){
        return <div style={{display:'flex',flexDirection:'row',width:'1200PX',justifyContent:'space-between',margin:'0 auto'}}>
               <ul style={{paddingLeft:'0px',display:'flex',flexDirection:'row',width:'130px',justifyContent:'space-between'}}>
                  <li style={{padding:'0px',listStyle:'none'}}>
                      <NavLink exact={true} activeStyle={{color:"red"}} to="/" style={{textDecoration:'none',color:this.handlePublicColor}}>Popular</NavLink>
                  </li>
                  <li style={{padding:'0px',listStyle:'none'}}>
                     <NavLink  activeStyle={{color:"red"}}  to="/battle" style={{textDecoration:'none',color:this.handleBattleColor}}>Battle</NavLink>
                  </li>
               </ul>
               <button style={{border:'none',backgroundColor:'white'}}><i className="fa fa-lightbulb-o" style={{width:'50px',fontSize:'20px'}}></i></button>
        </div>
    }
}
export default NavHead;