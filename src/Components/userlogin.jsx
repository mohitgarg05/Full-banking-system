import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Home.css"
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import history from './history'


export default  class Home extends Component{
    constructor(props) {
        super(props);
        this.handlechange1 = this.handlechange1.bind(this)
        this.handlechange2 = this.handlechange2.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
        this.state={
            emailuserlogin:"",
            passworduserlogin:"",
            loginconfirmed:false

        }
    }

    handlechange1(e){
        this.setState({emailuserlogin : e.target.value})
       
        
    }
    handlechange2(e){
        this.setState({passworduserlogin : e.target.value})
       
    }

    async handlesubmit(e){
        e.preventDefault();
        const data = {
            "emailuserlogin" : this.state.emailuserlogin,
            "passworduserlogin" : this.state.passworduserlogin
        }

        const response =  await axios.post("https://full-banking-system.herokuapp.com/user/logindetails",data);
        console.log(response.data.status);
        if(response.data.status.localeCompare("LoggedIn")===0){
            this.setState({loginconfirmed : true})
            alert("Congo!")
        }
        else if(response.data.status.localeCompare("deleted")===0){
            alert("Your Email is not Confirmed Please SignUp again!!")
        }
        else if(response.data.status.localeCompare("notexists")===0){
            alert("Email Not exist or wrong password!")
        }
    }
    

    render(){

        if(this.state.loginconfirmed){
            return <Redirect to="/user/dashboard" />
        }
        return(
            
                <div className="container m-auto" >
                    <div className="row adminrow mb-n3" >
                        <div className="col-md-5 m-auto pl-5"  >
                            <div>
                                <h1>User Login</h1>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row"  >
                        <div className="col-md-5 m-auto p-5" >
                            <form onSubmit={this.handlesubmit}>
                                <div className="row form-group">
                                         <label>Email Address</label>
                                        <input name="emailuserlogin" value={this.state.emailuserlogin} onChange={this.handlechange1} required="true"></input>
                                </div>
                                <div className="row form-group" style={{marginTop:"20px"}}>
                                         <label>Password</label>
                                        <input type="password" name="passworduserlogin"  value={this.state.passworduserlogin} required="true" onChange={this.handlechange2}></input>
                                </div>
                                <div className="row form-group" style={{marginTop:"20px"}}>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                                

                            </form>
                            <div className="row " style={{marginTop:"20px"}}>
                                <a href = '/signup'>
                                    <button  className="btn ">Sign Up</button>
                                  </a>
                                </div>
                                
                        </div>
                    </div>
                </div>
            
        );
    }
}