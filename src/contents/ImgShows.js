import React from "react";

import axios from 'axios';

class ImgShows extends React.Component{
    constructor(props) {
        super(props);
        this.state={img:this.props.img,login:this.props.login}
    }

    render(){
        return <div style={{display:'flex'}}>
            <img src={this.props.img} style={{width:'40px',height:'40px'}}></img>
            <div style={{width:'60px'}}></div><h3>{this.props.login}</h3>
        </div>
    }
    
}
export default ImgShows;