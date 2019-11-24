import React from "react";
import axios from 'axios';
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
         
                  
          
       } 

    
     /* -------------------------------------- */
   async  componentWillReceiveProps(nextProps){
    
    let res=await axios.get(nextProps.scale); 
    console.log('res',res.data);
    this.setState({repos:res.data.items});
  
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
   export default InfoBar;