import React from "react";
/* 组件：Popular &&&  Battle  组件*/
class NavHead extends React.Component{
    constructor(props) {
        super(props);
        this.state={isRedFlag:this.props.scale};
        this.setState({isRedFlag:this.props.scale})
    }
    componentWillReceiveProps(props,nextProps){
     this.setState({isRedFlag:props.scale});
 
 }
    handleColor(t){
        if(t==true&&this.state.isRedFlag==true){
            return 'red'
        }
        else if(t==false&&this.state.isRedFlag==false){
            return 'red'
        }
        else{
            return 'black'
        }
    }
    render(){
        return <div style={{display:'flex',flexDirection:'row',width:'1200PX',justifyContent:'space-between'}}>
               <ul style={{paddingLeft:'0px',display:'flex',flexDirection:'row',width:'130px',justifyContent:'space-between'}}>
                  <li style={{padding:'0px',listStyle:'none'}}>
                      <a style={{textDecoration:'none',color:this.handleColor(true)}} onClick={()=>{this.props.handlePages(true)}}>Popular</a>
                  </li>
                  <li style={{padding:'0px',listStyle:'none'}}>
                     <a style={{textDecoration:'none',color:this.handleColor(false)}} onClick={()=>{this.props.handlePages(false)}}>Battle</a>
                  </li>
               </ul>
               <button style={{border:'none',backgroundColor:'white'}}><i class="fa fa-lightbulb-o" style={{width:'50px',fontSize:'20px'}}></i></button>
        </div>
    }
}
export default NavHead;