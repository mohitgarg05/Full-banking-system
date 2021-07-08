import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'; 
import "../CSS/Home.css"
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import '../CSS/login.css'

export default  class Userlogin extends Component{
    constructor(props) {
        let loginconfirmed = false
     
        super(props);
        this.handlechange1 = this.handlechange1.bind(this)
        this.handlechange2 = this.handlechange2.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
     
        this.state={
            emailuserlogin:"",
            passworduserlogin:"",
            loginconfirmed,
            name:"",
            mail2 :""

        }
    }

    handlechange1(e){
        this.setState({emailuserlogin : e.target.value})
       
        
    }
    handlechange2(e){
        this.setState({passworduserlogin : e.target.value})
       
    }

    componentDidMount(){
        const mail = localStorage.getItem("Email")
      console.log(mail);
      this.setState({mail2 : mail})
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
            const ranomtoken =  Math.floor(Math.random() * 10000000) + 10000;
            localStorage.setItem("token",ranomtoken)
            this.setState({loginconfirmed:true})
            localStorage.setItem("Email",this.state.emailuserlogin)

            
           
            
        }
        else if(response.data.status.localeCompare("deleted")===0){
            alert("Your Email is not Confirmed Please SignUp again!!")
        }
        else if(response.data.status.localeCompare("notexists")===0){
            alert("Email Not exist or wrong password!")
        }

       
        


    }
    

    render(){
        
        if(this.state.loginconfirmed ){
            
             return <Redirect to= '/user/dashboard/' />
         }
       
        return(
            <div id="App1">
      
                <div className="container m-auto " >
             
                    <div className="row userrow mb-n3" >
                        <div className="col-md-5 m-auto"   >
                            <div >
                               
                                <h1 style={{fontSize:"70px"}}>User Login</h1>
                            </div>
                        </div>
                        <hr />
                       
                    </div>
                    <div className="row loginlabel" >
                        <div className="col-md-5 m-auto p-5" >
                            <form onSubmit={this.handlesubmit}>
                                <div className="row form-group">
                                         <label style={{marginBottom:"20px",fontSize:"30px",textAlign:"center"}}>Email Address</label>
                                        <input name="emailuserlogin" value={this.state.emailuserlogin} onChange={this.handlechange1} required="true"></input>
                                </div>
                                <div className="row form-group" style={{marginTop:"20px"}}>
                                         <label style={{textAlign:"center",marginBottom:"20px",fontSize:"30px"}}>Password</label>
                                        <input type="password" name="passworduserlogin"  value={this.state.passworduserlogin} required="true" onChange={this.handlechange2}></input>
                                </div>
                                <div className="row form-group" style={{marginTop:"50px"}}>
                                    <button style={{width:"200px",marginLeft:"140px"}} type="submit" className="btn btn-primary">Submit</button> 
                                </div>
                                

                            </form>
                            <div className="row " style={{}}>
                                <div className="col">
                                <a href = '/signup'>
                                    <button  className="btn btn-primary  singupbtn">Sign Up</button>
                                </a>
                                </div>
                                </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


 
