
/* import "@babel/polyfill"; */
/* import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; */

/* 定义所用到的地址 */
const scaleNames={
    path_all:'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories',
    path_javascript:'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories',
    path_ruby:'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories',
    path_java:'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories',
    path_css:'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories'
}

/* ---------------------------------------------------- */
/* -------------------------- */
/* 子组件：instructions */
class Instructons extends React.Component{
    render(){
         return <div>
                   <div style={{width:'1200px'}}><p style={{fontSize:'30px',textAlign:'center'}}>Instructons</p></div>
                   <div><ItemsBar/></div>
         </div>
    }
 }
 /* -------------------------- */
 /* 子组件： */
 class ItemsBar extends React.Component{
   
   /* handleString(pont){
       let p;
       let s= pont.split('_');
     for(var i=0;i<s.length;i++){
     p+=s[i]+" ";
     }
       return p;
   } */
     render(){
          /* 定义三个主功能 */
        const point=[
          /*   'Enter_two_Github_users',
            'Battle',
            'See_the_winner' */
            {name:'Enter two Github users',clas:'fa fa-users',color:'brown'},
            {name:'Battle',clas:'fa fa-space-shuttle',color:'black'},
            {name:'See the winner',clas:'fa fa-trophy',color:'yellow'} 
        ];
      
       /* 遍历三个功能： */
     const items=point.map((item)=><li style={{width:'280px',listStyle:'none',textAlign:'center'}}>
                                        <p style={{textAlign:'center'}}>{item.name}</p>
                                        <button style={{width:'200px',listStyle:'none',textAlign:'center',margin:'30px auto'
                        ,border:'none',paddingTop:'30px',paddingBottom:'30px',backgroundColor:'rgba(0, 0, 0, 0.08)'}}>
                                        <i class={item.clas} style={{color:item.color,fontSize:'100px'}}></i>
                                        </button>
     </li>);
     /* --------------- */
   
     console.log(items);
        return <div style={{width:'1200px',margin:'0 auto'}}>
           
            <ul style={{paddingLeft:'0px',width:'1200px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            {items} 
             </ul>
           
        </div>
     }
 }
 /* -------------------------------------- */
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
/* handleGetInputValue  (event,item)  {
if(item=='PlayerOne'){
    this.setState({
        playerOne : event.target.value,
       
      })
      console.log(this.state)
}
else if(item=='PlayerTwo'){
    this.setState({
      playerTwo : event.target.value,
    })
    console.log(this.state)
}
else{
    console.log("此方法不可取")
}
  }; */

  
  /*   handlePost(item){
        
        if(item=='PlayerOne'){
            this.setState({
                playerOne : this.myInput.value,
               
              })
              console.log(this.state)
        }
        else if(item=='PlayerTwo'){
            this.setState({
              playerTwo : this.myInput.value,
            })
            console.log(this.state)
        }
        else{
            console.log("此方法不可取")
        }
      }; */
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
/* -------------------------------------------------- */
class BattleContent extends React.Component{
    render(){
    
        return <div style={{display:'flex',flexDirection:'column',width:'1200px',margin:'0px auto',alignItem:'center'}}>
        {/* <div style={{display :'flex'}}><NavHead/></div> */}
        <div style={{display :'flex',flexDirection:'row'}}><Instructons/></div>
        <div style={{display :'flex',flexDirection:'row'}}><Players/></div>


</div>
    }
} 

/* ------------------------------------------------------- */
/* 子组件一：数据单元显示组件： */
class InfoBar extends React.Component{
    constructor(props) {
            super(props);
            this.state={repos:[],path:props.scale,loading:true};
         /*  this.setState(repos : ) */
      
        }
      /* ---------------------- */
       async componentDidMount() {  
        
        /*    this.timerID = setInterval(
         
             
              ()=>this.setState({path:this.state.path}),
           
          
               1000
             ); */
            
                 var res=await axios.get(this.props.scale); 
               console.log('res',res.data);
               this.setState({repos:res.data.items});  
              this.setState({loading:false});
                  
          
       } 

    
     /* -------------------------------------- */
   async  componentWillReceiveProps(nextProps){
    this.setState({loading:true});  
    let res=await axios.get(nextProps.scale); 
    console.log('res',res.data);
    this.setState({repos:res.data.items,loading:false});
  
    }
   /* ---------------------------------------------- */


        /* --------------------------------------------- */
        render(){
           console.log("infobar测试输出："+this.state.repos+this.props.scale);
           
            var n=0;
            const list=this.state.repos.map((item,key)=><li key={item.id} style={{listStyle:'none',width:'280px',margin:'10px',backgroundColor:'rgba(0, 0, 0, 0.08)'}}><h3 style={{textAlign:'center'}}>#{++n}</h3> <img src={item.owner.avatar_url}
            
            style={{width:'200px',height:'200px',margin:'0 auto',display:'block'}}/><p style={{textAlign:'center'}}><a href={item.html_url} style={{textDecoration:'none',color:'red'}}>{item.name}</a></p><p style={{marginLeft:'10px'}}><i class="fa fa-user" style={{color:'rgb(233, 174, 14)'}}></i><a href={item.owner.html_url} style={{textDecoration:'none'}}>{item.name}</a></p>  <p style={{marginLeft:'10px'}}><i class="fa fa-star" style={{color:'yellow'}}></i>
            {item.stargazers_count}</p> <p style={{marginLeft:'10px'}}> <i class="fa fa-code-fork" style={{color:'rgb(67, 120, 219)'}}></i>{item.forks}</p> 
            <p style={{marginLeft:'10px'}}><i class="fa fa-warning" style={{color:'red'}}></i>{item.open_issues_count}</p></li>);
              
                return <div>{this.state.loading?<div class="loading_wrap"><div class="loading spin"></div></div>:
                    <ul style={{width:'1200px',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around',margin:0,padding:0,alignContent:'space-between'
                ,minHeight:'3900px'}}>
                    
                         {list}
               
               
                </ul>
                }
                </div>
         
        }
   }
   /* ---------------------------------------------------------------- */
   /* 子组件：Popular &&&  Battle  组件*/
   class NavHead extends React.Component{
       constructor(props) {
           super(props);
           
       }
       
       render(){
           return <div style={{display:'flex',flexDirection:'row',width:'1200PX',justifyContent:'space-between'}}>
                  <ul style={{paddingLeft:'0px',display:'flex',flexDirection:'row',width:'130px',justifyContent:'space-between'}}>
                     <li style={{padding:'0px',listStyle:'none'}}>
                         <a style={{textDecoration:'none',color:'rgb(187,46,31)'}} onClick={()=>{this.props.handlePages(true)}}>Popular</a>
                     </li>
                     <li style={{padding:'0px',listStyle:'none'}}>
                        <a style={{textDecoration:'none',color:'black'}} onClick={()=>{this.props.handlePages(false)}}>Battle</a>
                     </li>
                  </ul>
                  <button style={{border:'none',backgroundColor:'white'}}><i class="fa fa-lightbulb-o" style={{width:'50px',fontSize:'20px'}}></i></button>
           </div>
       }
   }
/* ------------------------------------------------------------------ */
/* 子组件：导航组件 */
   class CenterLink extends React.Component{
       constructor(props) {
           super(props);
     
         this.state={path : this.props.scale};
        this.setState({path : this.props.scale})
        
       }

     
      /* --------------------------------------------- */
componentWillReceiveProps(props,nextProps){
    this.setState({path:props.scale});

}
 
       /* --------------------------------------------- */
       /* 当前状态相应按钮显示红色： */
     handleColor(btn){
      if(this.state.path==scaleNames.path_all&&btn=='All'){
          return 'red';
      }
      if(this.state.path==scaleNames.path_javascript&&btn=='JavaScript'){
          return 'red';
      }
      if(this.state.path==scaleNames.path_ruby&&btn=='Ruby'){
          return 'red';
      }
      if(this.state.path==scaleNames.path_java&&btn=='Java'){
          return 'red';

      }
      if(this.state.path==scaleNames.path_css&&btn=='CSS'){
          return 'red';
      }
   
     }
   /* ------------------------------------------------------- */

   /* ------------------------------------------------------- */


   /* --------------------------------------------------------- */
   /* 定义按钮： */
       render(){
        const butn=[
            'All',
             'JavaScript',
             'Ruby',
             'Java',
             'CSS',
             'Python'
          ];
       
        /* 打印按钮 */
          const listItems=butn.map((btn)=><li btn1={btn} style={{listStyle:'none'}}>
                                                <button  style={{border:'none',color:this.handleColor(btn),backgroundColor:'white',fontSize:'20px'}}
                                            onClick={()=>this.props.handlePath(btn)}>
                                                    {btn}
                                               </button>
                                           </li>);
        
        /*  Console.log(btn); */
           return <div style={{width:'400px',margin:'0 auto'}}>
                  <ul style={{paddingLeft:'0px',width:'400px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                 {listItems}
                  
        
                 
                  </ul>
           
           </div>
       }
   }
   /* ------------------------------------------------------------------ */
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
                       {/*  <div style={{display :'flex'}}><NavHead/></div> */}
                        <div style={{display :'flex'}}><CenterLink handlePath={this.handlePath.bind(this)} scale={this.state.path}/></div>
                        <div style={{display :'flex',flexDirection:'row'}}><InfoBar scale={this.state.path}/></div>
            
            
            </div>
            
        }
    }
    /* ---------------------------------------------------------------------- */
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
           if(this.state.isPopular==true){
           return <div>
                    
                    <div style={{display:'flex',flexDirection:'column',width:'1200px',margin:'0px auto',alignItem:'center'}}><NavHead handlePages={this.handlePages.bind(this)}/></div>
           <Content/>
           
           
           </div>
           }
           else  return <div>
                    
                    <div style={{display:'flex',flexDirection:'column',width:'1200px',margin:'0px auto',alignItem:'center'}}><NavHead handlePages={this.handlePages.bind(this)}/></div>
           <BattleContent/>
           
           
           </div>
       }
   } 
   ReactDOM.render(
         <App/>,
           document.getElementById('app')
       );