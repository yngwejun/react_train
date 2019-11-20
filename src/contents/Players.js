import React from "react";
/* 子组件：Players */
class Players extends React.Component{
    constructor(props) {
        super(props);
        this.state={playerOne:'',playerTwo:''};
        this.myInputOne=React.createRef();
        this.myInputTwo=React.createRef();
    }
    
    shouldComponentUpdate(nextStates){ // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染
     if(nextStates !== this.state){
       return true
     }
 }
 
      handleRefName(item){
          if(item=="PlayerOne"){
             console.log("路径一正确")
              return this.myInputOne;
             
          }
          else if(item=='PlayerTwo'){
             console.log("路径二正确")
              return this.myInputTwo;
          }
      }
       handleSubmit = e => {
         e.preventDefault();
         if(this.myInputOne!=''&&this.myInputOne!=null){
             this.setState({playerOne:this.myInputOne.current.value});
           console.log("player1设置成功！！！当前状态："+this.state)
           
         }
         if(this.myInputTwo!=''&&this.myInputTwo!=null){
              this.setState({playerTwo:this.myInputTwo.current.value});
              console.log("player1设置成功！！！当前状态："+this.state)
 
         }
         console.log("当前的值："+this.myInputOne.current.value);
         console.log("当前的值："+this.myInputTwo.current.value);
       };
   
       
 
 
      render(){
           /* 定义两个玩家： */ 
        const players=[
         'PlayerOne',
         'PlayerTwo'
     ]
   
     const pitems=players.map((item)=><li style={{width:'500px',listStyle:'none'}}>
     <p>{item}</p>
     <from onSubmit={e => this.handleSubmit(item)}>
     <input  placeholder="Github UserName" type="text" style={{width:'250px',height:'30px'}}
    ref={this.handleRefName(item)} /* onChange={event=>this.handleGetInputValue(event,item) }*/></input>
     <button style={{height:'30px',width:'150px',marginLeft:'25px'}} onClick={this.handleSubmit} /* onClick={this.handlePost(item)} */>commit</button>
     </from>
     </li>);
      console.log(this.state);
         return <div>
                   <div style={{width:'1200px'}}><p style={{fontSize:'30px',textAlign:'center'}}>Players</p></div>
                   <ul style={{paddingLeft:'0px',width:'1200px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
             {pitems} 
              </ul> 
           
         </div>
      }
 }
 export default Players;