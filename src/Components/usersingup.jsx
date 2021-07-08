import { Component } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
export default  class usersingup extends Component{
    constructor(props) {
        super(props);
        this.handlechange = this.handlechange.bind(this)
        this.onSingup = this.onSingup.bind(this)
        this.state={
            
            balance:"",
            name:"",
            emailaddress:"",
            phone:"",
            address:"",
            city:"",
            state:"",
            country:"",
            nationality:"",
            fathername:"",
            password:"",
            verificationPage : false
        }
    }

    handlechange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    onSingup(e){
        e.preventDefault()
        const random = Math.floor(Math.random() * 10000000000) + 1000000000;
        const data = {
            "account" : random,
            "balance":this.state.balance,
            "name" : this.state.name,
            "emailaddress":this.state.emailaddress,
            "phone":this.state.phone,
            "address":this.state.address,
            "city":this.state.city,
            "state":this.state.state,
            "country":this.state.country,
            "nationality":this.state.nationality,
            "fathername":this.state.fathername,
            "password":this.state.password,
            

        }
        console.log(data);

        axios.post("https://full-banking-system.herokuapp.com/user/signup",data , {
            
        }).then((res)=>{
          
            console.log(res.data);
          
           
    
            if(res.data.status.localeCompare("failure1")===0){
                alert("Email already exists")
            }
           else if(res.data.status.localeCompare("failure2") === 0){
                alert("Phone number already exists")
            }
            else if ( res.data.status.localeCompare("success")===0){
                this.setState({verificationPage:true})
            
            }
        })
       


       
      
       
    }


render(){
        if(this.state.verificationPage){
            return <Redirect to="/user/verification" />
        }
    return(
        <div id="App1">
        <div className="container m-auto" >
            <div className="row">
                <div className="col-md-auto signuprow ">
                    <h1>ENTER DETAILS</h1>
                </div>
            </div>
            <hr />
        <div className="row">
       
               <form  onSubmit={this.onSingup}>
               <div className="full">
                <div className="col-md-6 stcol" >
                    <div className="row form-group" style={{marginTop:"100px"}} >
                  
                        <div className="col-md-4">
                            <label>Balance:</label>
                        </div>
                        <div className="col">
                            <input name="balance" value={this.state.balance} onChange={this.handlechange}></input>
                        </div>
                   
                    </div>
                    <div className="row form-group" style={{marginTop:"40px"}}>
                        <div className="col-md-4">
                            <label>Name:</label>
                        </div>
                        <div className="col">
                            <input name="name" value={this.state.name} onChange={this.handlechange}></input>
                        </div>
                    
                    </div>
                    <div className="row form-group" style={{marginTop:"40px"}}>
                        <div className="col-md-4">
                            <label>Email Address :</label>
                        </div>
                        <div className="col">
                            <input name="emailaddress" value={this.state.emailaddress} onChange={this.handlechange}></input>
                        </div>
                    
                    </div>
                    <div className="row form-group" style={{marginTop:"40px"}}>
                        <div className="col-md-4">
                            <label>Password :</label>
                        </div>
                        <div className="col">
                            <input type="password" name="password" value={this.state.password} onChange={this.handlechange}></input>
                        </div>
                    
                    </div>
                    <div className="row form-group" style={{marginTop:"40px"}}>
                        <div className="col-md-4">
                            <label>Phone Number :</label>
                        </div>
                        <div className="col">
                            <input name="phone" value={this.state.phone} onChange={this.handlechange}></input>
                        </div>
                    
                    </div>
                    <div className="row form-group" style={{marginTop:"40px"}}>
                        <div className="col-md-4">
                            <label>Address :</label>
                        </div>
                        <div className="col">
                            <input name="address" value={this.state.address} onChange={this.handlechange}></input>
                        </div>
                    </div>
                </div>

                <div className="col-md-6" >
                    <div className="row form-group" style={{marginTop:"100px"}}>
                        <div className="col-md-4">
                            <label>City :</label>
                        </div>
                        <div className="col">
                            <input name="city" value={this.state.city} onChange={this.handlechange}></input>
                        </div>
                    
                    </div>
                    <div className="row form-group" style={{marginTop:"40px"}}>
                        <div className="col-md-4">
                            <label>State :</label>
                        </div>
                        <div className="col">
                            <input name="state" value={this.state.state} onChange={this.handlechange}></input>
                        </div>
                    
                    </div>
                    <div className="row form-group" style={{marginTop:"40px"}}>
                        <div className="col-md-4">
                            <label>Country :</label>
                        </div>
                        <div className="col">
                            <input name="country" value={this.state.country} onChange={this.handlechange}></input>
                        </div>
                    
                    </div>
                    <div className="row form-group" style={{marginTop:"40px"}}>
                        <div className="col-md-4">
                            <label>Nationality :</label>
                        </div>
                        <div className="col">
                            <input name="nationality" value={this.state.nationality} onChange={this.handlechange}></input>
                        </div>
                    
                    </div>
                    <div className="row form-group" style={{marginTop:"40px"}}>
                        <div className="col-md-4">
                            <label>Father's Name :</label>
                        </div>
                        <div className="col">
                            <input name="fathername" value={this.state.fathername} onChange={this.handlechange}></input>
                        </div>
                    
                    </div>
                    </div>
                    </div>
                    <div className="row form-group" style={{marginTop:"40px",marginLeft:"500px"}}>
                        <button type="submit" className="col-2 btn btn-primary">Submit</button>
                    </div>
                    
                </form>
              
        </div>
        </div>
        </div>
      
    );
}

}