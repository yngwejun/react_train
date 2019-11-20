import React from "react";
import ItemsBar from './ItemsBar';
/* 子组件：instructions */
class Instructions extends React.Component{
    render(){
         return <div>
                   <div style={{width:'1200px'}}><p style={{fontSize:'30px',textAlign:'center'}}>Instructons</p></div>
                   <div><ItemsBar/></div>
         </div>
    }
 }
 export default Instructions;