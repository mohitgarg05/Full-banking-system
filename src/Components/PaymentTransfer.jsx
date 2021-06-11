import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sidbarUser'

import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import axios from 'axios'

class PaymentTransfer extends Component{
    constructor(props) {
        let loggedin = true;
        super(props);
        this.handlechange = this.handlechange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
        const token = localStorage.getItem("token");
        console.log("token : " +token);
        if(token== null){
         loggedin=false
        }
        this.state={
          mail2:"",receaccount:"",transferingammount:"",sendermoney:""
        }
    }

    handlechange(e){
        this.setState({[e.target.name]: e.target.value})
    
    }
   async handlesubmit(e){
        e.preventDefault();
        const data = {
           "receaccount" : this.state.receaccount,
           "transferingamout" :  parseInt(this.state.sendermoney)-parseInt(this.state.transferingammount),
           "amount" : this.state.transferingammount

        }
        const data2={
            "sendermail" : this.state.mail2,
            "transferingamout" :  parseInt(this.state.sendermoney)-parseInt(this.state.transferingammount)

        }
       
       const res = await axios.post("https://full-banking-system.herokuapp.com/user/payment",data);
       console.log(res.data);
       if(res.data.condition.localeCompare("not sufficient")===0){
           alert("Not Sufficient Amount in your account")
       }
       else if(res.data.condition.localeCompare("UserExists")===0){
           
           const res3 = await axios.put("https://full-banking-system.herokuapp.com/receiver/update", data)
           const res2 = await axios.put("https://full-banking-system.herokuapp.com/sender/update",data2);

       }
       else if(res.data.condition.localeCompare("transfer")===0){
        console.log(data2);
        const res2 = await axios.put("https://full-banking-system.herokuapp.com/sender/update",data2);
           alert("Money transfered")
       }
       else{
           alert("No Beneficiary Please add Beneificar")
       }
       
    }
    
   async componentDidMount(){
    const mail1 = this.props.match.params.email;
    this.setState({mail2 : mail1})

    const res1 = await axios.get("https://full-banking-system.herokuapp.com/user/details");
    
    let obj = res1.data.response.find(o => o.UserEmail === mail1);
    console.log(obj.Balance);
    this.setState({sendermoney : obj.Balance})



  
 }

    render(){
        if(this.state.loggedin===false)
        {
          return <Redirect to="/user" />
        }
        return(
            <>  
            <div id="App">
                <SideBar mail={this.state.mail2}/>
                <div className="container profile" >
                <div class="row profileimg">
                       <p>Add Beneficiary</p>
                    </div>
                    <div class="row  profilegrid" >
                      <div class="profilecontent">
                        <div className="row" style={{marginTop:"30px"}}>
                            <div className="col">
                                <form onSubmit={this.handlesubmit}>
                                <div className="row form-group"  style={{marginTop:"20px"}}>
                                    <div className="col-4">
                                        <label>Reciver's Account Number : </label>
                                    </div>
                                    <div className="col">
                                        <input name="receaccount" value={this.state.receaccount} onChange={this.handlechange} />
                                    </div>
                                
                                </div>
                                <div className="row form-group"  style={{marginTop:"20px"}}>
                                    <div className="col-4">
                                        <label>Amount To Be Transfer : </label>
                                    </div>
                                    <div className="col">
                                        <input name="transferingammount" value={this.state.transferingammount} onChange={this.handlechange} />
                                    </div>
                                
                                </div>
                                <div className="row" style={{width:"200px",marginLeft:"330px",marginTop:"30px"}}>
                                  
                                         <button type="submit" className="btn btn-primary">Add</button>
                                    
                                    
                                </div>
                                </form>
                            </div>
                            
                      </div>
                    </div>
                </div>
            </div>
            </div>

            </>
        );
    }
}
export default withRouter(PaymentTransfer);