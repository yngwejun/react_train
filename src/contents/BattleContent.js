import React from "react";
import Instructions from './Instructions';
import Players from './Players';
class BattleContent extends React.Component{
    render(){
    
        return <div style={{display:'flex',flexDirection:'column',width:'1200px',margin:'0px auto',alignItem:'center'}}>
        {/* <div style={{display :'flex'}}><NavHead/></div> */}
        <div style={{display :'flex',flexDirection:'row'}}><Instructions/></div>
        <div style={{display :'flex',flexDirection:'row'}}><Players/></div>


</div>
    }
} 

export default BattleContent;