import React, { Component, useState } from 'react';
import { Redirect ,Link} from 'react-router-dom';
export default  class Userlogin extends Component{
    constructor(props) {
        localStorage.removeItem("token")
        const token = localStorage.getItem("token")
        console.log(token);
        super(props);
        this.state={

        }
    }

    render(){
        return(<div>
            Loggedout 
            <Link to="/user">Loggin again</Link>
        </div>)
    }
}