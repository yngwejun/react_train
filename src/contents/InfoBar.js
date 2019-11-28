import React from "react";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import CenterLink from "./CenterLink";
import Loading from './Loading';


/* 子组件一：数据单元显示组件： */
class InfoBar extends React.Component{
    constructor(props) {
            super(props);
            this.state={repos:[],path:props.scale,loading:true,page:1};
         /*  this.setState(repos : ) */
      
        }
      /* ---------------------- */
       async componentDidMount() {  
               var res=await axios.get(this.props.scale); 
           /*     console.log('res',res.data); */
           
               this.setState({repos:res.data.items,loading:false,page:1});  
         console.log('---------执行------componentDitMount-----------')
                  
          
       } 
/* --------------------------------------- */
/* shouldComponentUpdate(nextProps){
   if(this.state.path!==nextProps.scale){
       return true
   }
} */
   
     /* -------------------------------------- */
   async  componentWillReceiveProps(nextProps){
     if(nextProps!==this.state.path){
    this.setState({loading:true});
    console.log('---------执行------componentWillReceiveProps-----settTrue------')
 /*    if(this.state.page==1){ */
     
    let res=await axios.get(nextProps.scale); 

    this.setState({repos:res.data.items,loading:false});
    console.log('---------执行------componentWillReceiveProps-------set数据-Setfalse---')

  /*   } */
   }
    }
    /* -------------------------------------- */

  
   /* ---------------------------------------------- */
async handleMore(page){

   let n=page+1;
      let res=await axios.get(this.state.path+"&page="+n);
           
           let lastres=this.state.repos.concat(res.data.items);
           this.setState({
              repos:lastres,
              page:n
           });
           console.log('-----------:',n);
           console.log('-----------page:',this.state.page)
           console.log("当前拉取的url",this.props.scale+"&page="+n);
         
}

        /* --------------------------------------------- */
        render(){
           console.log("infobar测试输出：初始render渲染次数-------"+this.props.scale);
           
            var n=0;
            const list=this.state.repos.map(
              (item,key)=>
                 <li key={key} index={key+1}
                    style={{listStyle:'none',width:'280px',margin:'10px',backgroundColor:'rgba(0, 0, 0, 0.08)'}}
                 >
                   <h3 style={{textAlign:'center'}}>
                      #{++n}
                   </h3> 
                   <img src={item.owner.avatar_url}
                        style={{width:'200px',height:'200px',margin:'0 auto',display:'block'}}
                   />
                  <p style={{textAlign:'center'}}>
                     <a href={item.html_url} style={{textDecoration:'none',color:'red'}}>{item.name}</a>
                  </p>
                 <p style={{marginLeft:'10px'}}>
                     <i className="fa fa-user" style={{color:'rgb(233, 174, 14)'}}></i>
                   <a href={item.owner.html_url}
                      style={{textDecoration:'none'}}
                     >
                          {item.name}
                   </a>
                 </p> 
                  <p style={{marginLeft:'10px'}}>
                     <i className="fa fa-star" style={{color:'yellow'}}></i>
                          {item.stargazers_count}
                  </p>
                   <p style={{marginLeft:'10px'}}>
                       <i className="fa fa-code-fork" style={{color:'rgb(67, 120, 219)'}}></i>
                          {item.forks}
                  </p> 
                   <p style={{marginLeft:'10px'}}>
                       <i className="fa fa-warning" style={{color:'red'}}>
                       </i>
                          {item.open_issues_count}
                   </p>
                   </li>
                
                );
              
                return <div>
                {this.state.loading?
                <div style={{width:'1200px',height:'500px',margin:'200px auto'}}>
                   <Loading/>
                {/* <div className="loading_wrap">
                        <div className="loading spin">
                       </div>
                   </div> */}
              </div>     :
                    <ul style={{width:'1200px',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around',margin:0,padding:0,alignContent:'space-between'
                          ,minHeight:'3900px'}}
                      
                      >
                   
                     
  <InfiniteScroll 
                style={{width:'1200px',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around',margin:0,padding:0,alignContent:'space-between'
                ,minHeight:'100px'}}
               loader={<div className='end' style={{width:'1200px', magin:'0 auto',textAlign:'center',color:'blue'}} key={0}>下拉加载......................</div>
                       }
               hasMore={!this.state.loading}
            /*    threshold={250} */
               pageStart={2} 
/*                useWindow={false} */
               loadMore={()=>this.handleMore(this.state.page,this.state.path)}
            
                // 渲染出来的DOM元素name
/* element: 'div' */
// 是否能继续滚动渲染
/* hasMore: false */
// 是否在订阅事件的时候执行事件
/* initialLoad: true */
// 表示当前翻页的值(每渲染一次递增)
/* pageStart: 0 */
// 传递ref，返回此组件渲染的 DOM
/* ref: null */
// 触发渲染的距离
/* threshold: 250 */
// 是否在window上绑定和处理距离
/* useWindow: true */
// 是否反向滚动，即到顶端后渲染
/* isReverse: false */
// 是否使用捕获模式
/* useCapture: false */
// 渲染前的loading组件
/* loader: null */
// 自定义滚动组件的父元素
/* getScrollParent: null   */
                  >
                  
                      {list}
     </InfiniteScroll>  
     
                </ul>
                }
                </div>
         
        }
   }
   export default InfoBar;