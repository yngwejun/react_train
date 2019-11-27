import React from "react";
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
      const items=point.map((item)=><li style={{width:'280px',listStyle:'none',textAlign:'center'}} key={item}>
                                         <p style={{textAlign:'center'}}>{item.name}</p>
                                         <button style={{width:'200px',listStyle:'none',textAlign:'center',margin:'30px auto'
                         ,border:'none',paddingTop:'30px',paddingBottom:'30px',backgroundColor:'rgba(0, 0, 0, 0.08)'}}>
                                         <i className={item.clas} style={{color:item.color,fontSize:'100px'}}></i>
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
  export default ItemsBar;