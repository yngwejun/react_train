import React from "react";
import Instructions from './Instructions';
import Players from './Players';
import BattleRes from './BattleRes';
import axios from 'axios';
class BattleContent extends React.Component{
    constructor(props) {
        super(props);
        this.state={playerOneData:[],playerTwoData:[],isBattleOnePage:true};
        

    }
  /* ------------------------------------------------- */  




   /* 测试  获得github用户数据 */
async handleGitUser(p1,p2,e3){
    console.log("搜索github用户测试输出：")
    
if(p1==null||p1==''||p2==null||p2==''){
      e3.preventDefault();
  
      // 阻止合成事件的冒泡
      e3.stopPropagation();
      // 阻止与原生事件的冒泡
      e3.nativeEvent.stopImmediatePropagation();
      console.log("此刻，输入框的参数为空，不进行battle操作！！！")
}else{
     e3.preventDefault();
  
     // 阻止合成事件的冒泡
     e3.stopPropagation();
     // 阻止与原生事件的冒泡
      e3.nativeEvent.stopImmediatePropagation();

  let UserDataOne=await axios.get(`https://api.github.com/users/`+p1);
  let  UserDataTwo=await axios.get(`https://api.github.com/users/`+p2);
  
  this.setState({playerOneData:UserDataOne,playerTwoData:UserDataTwo,isBattleOnePage:false});
  
  console.log('UserData',"player1的编号："+UserDataOne.data.id+"player2的编号："+UserDataTwo.data.id);
}

  
}

/* -------------------------------------- */
handlePreset(){
    this.setState({isBattleOnePage:true});
}
/* ---------------------------------- */

    
    render(){
        var v1 = this.state.value1;
        var v2 = this.state.value2;
        var pdt1=this.state.playerOneData;
        var pdt2=this.state.playerTwoData;
        return <div style={{display:'flex',flexDirection:'column',width:'1200px',margin:'0px auto',alignItem:'center'}}>
            {this.state.isBattleOnePage?<div>
               <div style={{display :'flex',flexDirection:'row'}}><Instructions/></div>
               <div style={{display :'flex',flexDirection:'row'}}><Players handleGitUser={this.handleGitUser.bind(this)} playerOneData={pdt1} playerTwoData={pdt2}/></div>
            </div>
            :<div>
                <div><BattleRes handlePreset={this.handlePreset.bind(this)} playerOneData={this.state.playerOneData} playerTwoData={this.state.playerTwoData}/></div>
            </div>
           }


</div>
    }
} 

export default BattleContent;