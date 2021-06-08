import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Home.css"
import { Redirect } from 'react-router-dom';
import axios from 'axios'


export default  class Home extends Component{
    constructor(props) {
        super(props);
        this.handlechange1 = this.handlechange1.bind(this)
        this.handlechange2 = this.handlechange2.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
        this.state={
            emailadmin:"",
            passwrodadmin:"",
            adminconfirmation:false

        }
    }

    handlechange1(e){
        this.setState({emailadmin : e.target.value})
       
        
    }
    handlechange2(e){
        this.setState({passwrodadmin : e.target.value})
       
    }

    async handlesubmit(e){
        e.preventDefault();
        const data = {
            "email" : this.state.emailadmin,
            "password" : this.state.passwrodadmin
        }
     
        
         try {
            const response = await axios.get("https://full-banking-system.herokuapp.com/admin", data);
         
            const getemail = response.data[0].Email.slice(0,19);
            const defaultemail = this.state.emailadmin.slice(0,19);
            const getpass = response.data[0].Password;
            const defaultpass= this.state.passwrodadmin;
         
            if(getemail===defaultemail && getpass === defaultpass)
            {
                this.setState({adminconfirmation: true})
               
                
            }
            else{
                alert("Not admin")
            }

         } catch (error) {
             
         }
    }
    

    render(){

        if(this.state.adminconfirmation){
            return <Redirect to="/admin" />
        }
        return(
            
                <div className="container m-auto" >
                    <div className="row adminrow mb-n3" >
                        <div className="col-md-5 m-auto pl-5"  >
                            <div>
                                <h1>Admin Login</h1>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row"  >
                        <div className="col-md-5 m-auto p-5" >
                            <form onSubmit={this.handlesubmit}>
                                <div className="row form-group">
                                         <label>Email Address</label>
                                        <input name="emailadmin" value={this.state.emailadmin} onChange={this.handlechange1}></input>
                                </div>
                                <div className="row form-group" style={{marginTop:"20px"}}>
                                         <label>Password</label>
                                        <input type="password" name="passwordadmin"  value={this.state.passwrodadmin} onChange={this.handlechange2}></input>
                                </div>
                                <div className="row form-group" style={{marginTop:"20px"}}>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                                

                            </form>
                        </div>
                    </div>
                </div>
            
        );
    }
}