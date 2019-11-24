import React from "react";

import axios from 'axios';
import ImgShows from "./ImgShows";




class Players extends React.Component{
    constructor(props) {
        super(props);
        this.state={playerOne:'',playerTwo:'',img_url_1:'',img_url_2:'',Ulogin1:'',Ulogin2:''}
      
        this.myInputOne=React.createRef();
        this.myInputTwo=React.createRef();
     
    }

  async  componentDidUpdate(){
        if(this.state.playerOne!=''&&this.state.playerOne!=null){
           
          console.log("player1设置成功！！！当前状态："+this.state)
     var res=await axios.get(`https://api.github.com/users/`+this.state.playerOne);
          var img1=res.data.avatar_url;
          var l1=res.data.login;
          this.setState({img_url_1:img1,Ulogin1:l1});  
          console.log('res',res.data);
         
        }
        
        if(this.state.playerTwo!=''&&this.state.playerTwo!=null){
            
             console.log("player2设置成功！！！当前状态："+this.state)
                     var res2=await axios.get(`https://api.github.com/users/`+this.state.playerTwo);
             var img2=res2.data.avatar_url;
             var l2=res2.data.login;
             this.setState({img_url_2:img2,Ulogin2:l2});  
             console.log('res2',res2.data);
        
    }}
   /*  componentWillReceiveProps(nextProps) {
        this.setState({playerOneData: nextProps.playerOneData,playerTwoData:nextProps.playerTwoData});
    } */
  
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
 /* ------------------------------------------------ */
   handleSubmit = e => {
         e.preventDefault();
        
         // 阻止合成事件的冒泡
    e.stopPropagation();
    // 阻止与原生事件的冒泡
    e.nativeEvent.stopImmediatePropagation();
         if(this.myInputOne!=''||this.myInputOne!=null){
             this.setState({playerOne:this.myInputOne.current.value});
           console.log("player1设置成功！！！当前状态："+this.state)
   
        } if(this.myInputTwo!=''||this.myInputTwo!=null){
              this.setState({playerTwo:this.myInputTwo.current.value});
              console.log("player2设置成功！！！当前状态："+this.state);
      
         }
         
         console.log("当前的值："+this.myInputOne.current.value);
         console.log("当前的值："+this.myInputTwo.current.value);
         return false
       };
       /* ----------------- */
       shouldComponentUpdate(nextProps,nextState){
           if(this.state.img_url_1!==nextState.img_url_1){
            console.log('测试当前状态是否渲染---------------：',this.state);
                return true;
               }
             
            if (this.state.img_url_2!==nextState.img_url_2){
                console.log('测试当前状态是否渲染---------------：',this.state);
                return true;
            }
           
            if(this.state.playerOne!==nextState.playerOne){
                console.log('测试当前状态是否渲染---------------：',this.state);
                return true;
            }
          
            if(this.state.playerTwo!==nextState.playerTwo)
           {
            console.log('测试当前状态是否渲染---------------：',this.state);
               return true;
           
            }else return false;
 
       }
    


/* -------------------- */
 handleClassName(item){
     if(item=='PlayerOne'){
         return 'hiddeninputOne'
     }
     else return 'hiddeninputTwo'
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
       reverseGitHubshows(item){
        if(item=='PlayerOne'&&this.state.playerOne==''){
            return 'none'
      }
          else if(item=='PlayerTwo'&&this.state.playerTwo==''){
            return 'none'
     }
          else return 'block' 
       }
  
       /*  */
       buttonShow(){
          if(this.state.playerOne==''||this.state.playerOne==null||this.state.playerTwo==''||this.state.playerTwo==null)
        {
                return 'none'
          }else return 'block'
       }
 /* ------------------------ */
    
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
     /* ------------------- */


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
                
                    <input class={this.handleClassName(item)}  placeholder="Github UserName" type="text" style={{width:'250px',height:'30px'}}
                        ref={this.handleRefName(item)} />
                    <button style={{height:'30px',width:'150px',marginLeft:'25px',border:'none',textDecoration:'none',cursor:'pointer'}} onClick={this.handleSubmit}>commit</button>
            
                    </from>
                </div>
               <div>
                    {item=='PlayerOne'?
                     <div><ImgShows img={this.state.img_url_1} login={this.state.Ulogin1}/></div>
                     :
                     <div><ImgShows img={this.state.img_url_2} login={this.state.Ulogin2}/></div>
               }
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
                 <button  style={{width:'400px',height:'60px',border:'none',textDecoration:'none',cursor:'pointer',backgroundColor:'black',color:'white',fontSize:'40px',fontWeight:'bold'}} onClick={e3=>this.props.handleGitUser(this.state.playerOne,this.state.playerTwo,e3)}>BATTLE!!!</button>
              </div>
           
         </div>
      }
 }

 export default Players;