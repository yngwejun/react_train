import React from "react";
import {Link} from "react-router-dom";

class BattleRes extends React.Component{
    constructor(props) {
        super(props);
        this.state={playerOneData:this.props.playerOneData,playerTwoData:this.props.playerTwoData}
        this.setState({playerOneData:this.props.playerOneData,playerTwoData:this.props.playerTwoData})
        console.log(this.state.playerOneData);
    }
    handleScoreP1(p1,p2){
        if(p1>p2){
            return 'Winner'
        }else if(p1==p2){
            return 'NoWinner'
        }
        else return 'Loser'
    }
    handleScoreP2(p1,p2){
        if(p1<p2){
            return 'Winner'
        }else if(p1==p2){
            return 'NoWinner'
        }
        else return 'Loser'
    }

    
    render(){
          const p1_items=this.state.playerOneData.data;
          const p2_items=this.state.playerTwoData.data; 
          const  p1=p1_items.public_repos;     
          const p2=p2_items.public_repos;
         

        return <div>  
                        <div style={{width:'1200px',margin:'0 auto'}}>
                    <ul style={{margin:0,padding:0,display:'flex',justifyContent:'space-around'}}>
                        <li style={{listStyle:'none',width:'280px',margin:'10px',backgroundColor:'rgba(0, 0, 0, 0.08)'}}>
                          <div style={{width:'240px',marginLeft:'20px',marginTop:'20px'}}>
                            
                              <h3 style={{textAlign:"center",marginTop:'20px'}}>{this.handleScoreP1(p1,p2)}</h3>
                              <div>
                                  <img src={p1_items.avatar_url} style={{width:'200px',height:'200px',margin:'0 auto',display:'block'}}></img>

                              </div>
                              <div style={{textAlign:'center'}}>
                                  <p>score:{p1_items.public_repos*15}</p>
                                  <a style={{color:'red',textDecoration:'none'}} href={p1_items.html_url}>{p1_items.login}</a>
                              </div>
                              <div style={{marginBottom:'20px'}}>
                               
                                    <div style={{marginTop:'20px'}}><i class="fa fa-user" style={{fontSize:'22px',color:'rgba(230, 52, 40, 0.39)'}}></i></div>
                                    <div style={{marginTop:'20px'}}><i class="fa fa-users" style={{fontSize:'22px',color:'rgba(114, 186, 219, 0.39)'}}></i>followers{p1_items.followers}</div>
                                    <div style={{marginTop:'20px'}}><i class="fa fa-group" style={{fontSize:'22px',color:'rgba(65, 218, 78, 0.39)'}}></i>following{p1_items.following}</div>
                                    <div style={{marginTop:'20px'}}><i class="fa fa-code" style={{fontSize:'22px',color:'rgba(4, 61, 9, 0.39)'}}></i>repositories{p1_items.public_repos}</div>
                               
                              </div>
                                     <div style={{height:'20px'}}></div>
                          </div>
                        
                        </li>
                        <li style={{listStyle:'none',width:'280px',margin:'10px',backgroundColor:'rgba(0, 0, 0, 0.08)'}}>
                          <div style={{width:'240px',marginLeft:'20px',marginTop:'20px'}}>
                            
                              <h3 style={{textAlign:"center",marginTop:'20px'}}>{this.handleScoreP2(p1,p2)}</h3>
                              <div>
                                  <img src={p2_items.avatar_url} style={{width:'200px',height:'200px',margin:'0 auto',display:'block'}}></img>

                              </div>
                              <div style={{textAlign:'center'}}>
                                  <p>score:{p2_items.public_repos*15}</p>
                                  <a style={{color:'red',textDecoration:'none'}} href={p2_items.html_url}>{p2_items.login}</a>
                              </div>
                              <div style={{marginBottom:'20px'}}>
                                  <p>
                                    <div style={{marginTop:'20px'}}><i class="fa fa-user" style={{fontSize:'22px',color:'rgba(230, 52, 40, 0.39)'}}></i></div>
                                    <div style={{marginTop:'20px'}}><i class="fa fa-users" style={{fontSize:'22px',color:'rgba(114, 186, 219, 0.39)'}}></i>followers{p2_items.followers}</div>
                                    <div style={{marginTop:'20px'}}><i class="fa fa-group" style={{fontSize:'22px',color:'rgba(65, 218, 78, 0.39)'}}></i>following{p2_items.following}</div>
                                    <div style={{marginTop:'20px'}}><i class="fa fa-code" style={{fontSize:'22px',color:'rgba(4, 61, 9, 0.39)'}}></i>repositories{p2_items.public_repos}</div>
                                  </p>
                              </div>
                                     <div style={{height:'20px'}}></div>
                          </div>
                        
                        </li>
                    </ul>
                    <div style={{width:'1200px',margin:'20px auto',textAlign:'center'}}>
                <Link to="/battle">   <button style={{width:'400px',height:'60px',border:'none',textDecoration:'none',cursor:'pointer',backgroundColor:'black',color:'white',fontSize:'40px',fontWeight:'bold'}} >
                       preset
                    </button>   </Link>      
                    </div>
                </div>
        </div>
    }
    
}

export default BattleRes;