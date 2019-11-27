import React from "react";
/* 定义所用到的地址 */
const scaleNames={
    path_all:'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories',
    path_javascript:'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories',
    path_ruby:'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories',
    path_java:'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories',
    path_css:'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories'
}
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
       const listItems=butn.map((btn)=><li btn1={btn} style={{listStyle:'none'}} key={btn}>
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
export default CenterLink;