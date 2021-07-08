import React, { Component, useState } from 'react';
import { Redirect ,Link} from 'react-router-dom';
export default  class Userlogin extends Component{
    constructor(props) {
        localStorage.removeItem("token")
        localStorage.removeItem("Email")
        const mail = localStorage.getItem("Email")
        const token = localStorage.getItem("token")
        console.log(mail);
        super(props);
        this.state={

        }
    }

    render(){
        return(<div>
        <div id="App2"></div>
        <div className="logoutdiv">
            <h5 id="first">You are now Logged out.</h5>
            <h5 id="second">Thank You and have a great day.</h5>
            <p><a href = "/" style={{textDecoration:"none",color:"black"}}>Log Back in</a></p>
         
        </div>
            
            
        </div>)
    }
}