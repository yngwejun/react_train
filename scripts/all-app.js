const scaleNames={
    path_all:'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories',
    path_javascript:'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories',
    path_ruby:'Ruby：https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories',
    path_java:'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories',
    path_css:'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories'
}


class InfoBar extends React.Component{
    constructor(props) {
            super(props);
            this.state={repos:this.props.scale,path:this.props.getp};
            this.setState({repos:this.props.scale})
      
        }
      
      
     /* -------------------------------------- */
     componentWillReceiveProps(props,nextProps){
        if ((this.props==nextProps)) {
            return
          }
        this.setState({repos:props.scale});
     
    }
   /*  componentWillReceiveProps(props,nextProps){
        this.setState({repos:props.scale});
    
    } */
        /* --------------------------------------------- */
        render(){
           
            
            var n=0;
            const list=this.state.repos.map((item,key)=><li key={item.id} style={{listStyle:'none',width:'280px',margin:'10px',backgroundColor:'rgba(0, 0, 0, 0.08)'}}><h3 style={{textAlign:'center'}}>#{++n}</h3> <img src={item.owner.avatar_url}
            
            style={{width:'200px',height:'200px',margin:'0 auto',display:'block'}}/><p style={{textAlign:'center'}}><a href={item.html_url} style={{textDecoration:'none',color:'red'}}>{item.name}</a></p><p style={{marginLeft:'10px'}}><i class="fa fa-user" style={{color:'rgb(233, 174, 14)'}}></i><a href={item.owner.html_url} style={{textDecoration:'none'}}>{item.name}</a></p>  <p style={{marginLeft:'10px'}}><i class="fa fa-star" style={{color:'yellow'}}></i>
            {item.stargazers_count}</p> <p style={{marginLeft:'10px'}}> <i class="fa fa-code-fork" style={{color:'rgb(67, 120, 219)'}}></i>{item.forks}</p> 
            <p style={{marginLeft:'10px'}}><i class="fa fa-warning" style={{color:'red'}}></i>{item.open_issues_count}</p></li>);
              
                return <div><ul style={{width:'1200px',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around',margin:0,padding:0,alignContent:'space-between'
                ,minHeight:'3900px'}}>
                    
                         {list}
               
               
                </ul>
                </div>
         
        }
   }
   class NavHead extends React.Component{
       render(){
           return <div style={{display:'flex',flexDirection:'row',width:'1200PX',justifyContent:'space-between'}}>
                  <ul style={{paddingLeft:'0px',display:'flex',flexDirection:'row',width:'130px',justifyContent:'space-between'}}>
                     <li style={{padding:'0px',listStyle:'none'}}>
                         <a style={{textDecoration:'none',color:'rgb(187,46,31)'}}>Popular</a>
                     </li>
                     <li style={{padding:'0px',listStyle:'none'}}>
                        <a style={{textDecoration:'none',color:'black'}}>Battle</a>
                     </li>
                  </ul>
                  <button style={{border:'none',backgroundColor:'white'}}><i class="fa fa-lightbulb-o" style={{width:'50px',fontSize:'20px'}}></i></button>
           </div>
       }
   }
/* ------------------------------------------------------------------ */
   class CenterLink extends React.Component{
       constructor(props) {
           super(props);
     
         this.state={path : this.props.scale};
        this.setState({path : this.props.scale})
        
       }

      /*  handleClick =(path)=>{
           this.setState={path};
       
       } */
      /* --------------------------------------------- */
componentWillReceiveProps(props,nextProps){
    this.setState({path:props.scale});

}
 
       /* --------------------------------------------- */
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
       render(){
        const butn=[
            'All',
             'JavaScript',
             'Ruby',
             'Java',
             'CSS',
             'Python'
          ];
       

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
    class Content extends React.Component{
        constructor(props) {
            super(props);
            this.state={repos : [],path:scaleNames.path_all}
        }
        /* ------------------------------------ */
        async componentDidMount() {
        
           /*  this.timerID = setInterval(
          
              
               ()=>this.setState({path:this.state.path}),
            
           
                1000
              ); */
             
                 var res=await axios.get(this.state.path); 
                console.log('res',res.data);
                this.setState({repos:res.data.items});  
              
        
           
        }


        componentWillUnmount() {
            clearInterval(this.timerID);
          }
     shouldComponentUpdate(nextState){
         if(this.setState!==null&&this.state!==null&&this.state!==''&&nextState!=='')
         return (this.state.path!==nextState.path)
       
     
     } 
    
    async componentDidUpdate(){
 let a=this.state.path;
  let res=await axios.get(a);
   console.log('res',res.data);
   this.setState({repos:res.data.items}); 

  
}
/* async componentWillUpdate(){
    let a=this.state.path;
    let res=await axios.get(a);
     console.log('res',res.data);
     this.setState({repos:res.data.items}); 
} */


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
                        <div style={{display :'flex'}}><NavHead/></div>
                        <div style={{display :'flex'}}><CenterLink handlePath={this.handlePath.bind(this)} scale={this.state.path}/></div>
                        <div style={{display :'flex',flexDirection:'row'}}><InfoBar scale={this.state.repos}/></div>
            
            
            </div>
            
        }
    }
    class App extends React.Component{
       render(){
           return <div>
                    

           <Content/>
           
           
           </div>
       }
   } 
   ReactDOM.render(
         <App/>,
           document.getElementById('container')
       );