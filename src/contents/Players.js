import React from "react";
/* 子组件：Players */
class Players extends React.Component{
    constructor(props) {
        super(props);
        this.state={playerOne:'',playerTwo:''};
        this.myInputOne=React.createRef();
        this.myInputTwo=React.createRef();
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
        
         // 阻止合成事件的冒泡
    e.stopPropagation();
    // 阻止与原生事件的冒泡
    e.nativeEvent.stopImmediatePropagation();
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
         return false
       };
       /* ----------------- */
       shouldComponentUpdate(nextProps,nextState){
       if(this.state.playerOne!==nextState.playerOne){
           return true;
       }else if(this.state.playerTwo!==nextState.playerTwo){
           return true;
       }else return false;

       }
     
   /* --------------- */
       handleShows(item){
           if(item=='PlayerOne'&&this.state.playerOne==''){
                         return 'visible'
           }
           else if(item=='PlayerTwo'&&this.state.playerTwo==''){
                         return 'visible'
           }
           else return 'hidden'
                         
       }
       /*  */
       reverseShows(item){
        if(item=='PlayerOne'&&this.state.playerOne==''){
            return 'hidden'
      }
          else if(item=='PlayerTwo'&&this.state.playerTwo==''){
            return 'hidden'
     }
          else return 'visible' 
       }
       /*  */
       buttonShow(){
          if(this.state.playerOne==''||this.state.playerOne==null||this.state.playerTwo==''||this.state.playerTwo==null)
        {
                return 'none'
          }else return 'block'
       }
 /* ------------------------ */
     handleBattle(){

     }
     /*  */
   handleXimg(item,event){
    event.preventDefault();
        
    // 阻止合成事件的冒泡
event.stopPropagation();
// 阻止与原生事件的冒泡
event.nativeEvent.stopImmediatePropagation();
         console.log('test123');
         if(item=='PlayerOne'){
             this.setState({playerOne:''})
             this.myInputOne.current.value=null;
         }else if(item=='PlayerTwo'){
             this.setState({playerTwo:''})
             this.myInputTwo.current.value=null;
         }
     }
 /* ---------------------------- */
      render(){
           /* 定义两个玩家： */ 
        const players=[
            'PlayerOne',
            'PlayerTwo'
        ];
  
     const pitems=players.map(
         item => 
         <li style={{width:'500px',listStyle:'none'}}>
            <p>{item}</p>
            <div style={{backgroundColor:'rgba(0, 0, 0, 0.08)' ,visibility:this.reverseShows(item)}}>
                <button style={{border:'none',width:'50px',height:'50px',marginLeft:'450px'}} onClick={event=>this.handleXimg(item,event)}>
                    <i class="fa fa-close" style={{fontSize:'48px',color:'red'}}></i>
                </button>
                <div style={{visibility:this.handleShows(item)}}>
                    <from onSubmit={e => this.handleSubmit(item)}>
                
                    <input  placeholder="Github UserName" type="text" style={{width:'250px',height:'30px'}}
                        ref={this.handleRefName(item)} />
                    <button style={{height:'30px',width:'150px',marginLeft:'25px',border:'none',textDecoration:'none',cursor:'pointer'}} onClick={this.handleSubmit} /* onClick={this.handlePost(item)} */>commit</button>
            
                    </from>
                </div>
            
            </div>
        </li>
     );
      console.log(this.state);
         return <div>
                   <div style={{width:'1200px'}}><p style={{fontSize:'30px',textAlign:'center'}}>Players</p></div>
                   <ul style={{paddingLeft:'0px',width:'1200px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
             {pitems} 
             
              </ul> 
              <div style={{width:'1200px',height:'65px',margin:'0 auto',display:this.buttonShow(),textAlign:'center'}}>
                 <button style={{width:'400px',height:'60px',border:'none',textDecoration:'none',cursor:'pointer',backgroundColor:'black',color:'white',fontSize:'40px',fontWeight:'bold'}} onClick={this.handleBattle}>BATTLE!!!</button>
              </div>
           
         </div>
      }
 }
 export default Players;