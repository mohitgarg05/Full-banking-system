import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Home.css"
import { Redirect } from 'react-router-dom';
import axios from 'axios'



export default  class UserVerification extends Component{
    constructor(props) {
        super(props);
        this.handlechange1 = this.handlechange1.bind(this)
       
        this.handlesubmit = this.handlesubmit.bind(this)
        this.state={
            otp:"",
            successfulllogin:false,
            confirmmail:""
          
   

        }
    }

    handlechange1(e){
        this.setState({[e.target.name] : e.target.value})
       
        
    }
   

     handlesubmit(e){
         e.preventDefault()
         const data={
            "confirmail" : this.state.confirmmail,
             "otp" : this.state.otp
         }


         axios.put("https://full-banking-system.herokuapp.com/user/signup/otp", data, {
        }).then(res => {
            console.log(res);
           
            if(res.data.status.localeCompare("done")===0){
                 this.setState({successfulllogin:true})
                alert("You are successfully registered")
            }
            else{
                alert("Invalid otp try again to sign up")
            }
           
        }).catch((e)=>{
            console.log(e);
        })

    
    }
    

    render(){
        if(this.state.successfulllogin){
            return <Redirect to="/" />
        }
        return(
            
                <div className="container m-auto" >
                    <div className="row adminrow mb-n3" >
                        <div className="col-md-5 m-auto pl-5"  >
                            <div>
                                <h1>Please Verify Your Email Address</h1>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row"  >
                        <div className="col-md-5 m-auto p-5" >
                            <form onSubmit={this.handlesubmit}>
                                <div className="row form-group">
                                         <label>Confirm-your mail</label>
                                        <input name="confirmmail" value={this.state.confirmmail} onChange={this.handlechange1}></input>
                                </div>
                                <div className="row form-group">
                                         <label>Otp</label>
                                        <input name="otp" value={this.state.otp} onChange={this.handlechange1}></input>
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