import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sidbarUser'
import "../CSS/dashboard.css"
import { Redirect ,Link} from 'react-router-dom';
import { withRouter } from "react-router";
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckAlt , faStoreAlt , faExclamationCircle ,faUsers } from '@fortawesome/free-solid-svg-icons';
  class UserDashboard extends Component{
    constructor(props) {

      
      let loggedin = true;
        super(props);
        const token = localStorage.getItem("token");
        console.log("token : " +token);
        if(token== null){
         loggedin=false
        }

       
        this.state= 
        {
          balance :"",mail2:"",accountno:"",benebank:"",beneacc:"",upi:"",loggedin,length:"",length2:""
        }
    }

   async componentDidMount(){
     
      let mail = localStorage.getItem('Email')
      console.log(mail);
      this.setState({mail2 : mail})
      
       const res = await axios.get("https://full-banking-system.herokuapp.com/user/details");
      console.log(res);
         let obj = res.data.response.find(o => o.UserEmail === this.state.mail2);
         console.log(obj);
         this.setState({balance: obj.Balance})
         this.setState({accountno : obj.Account})
         this.setState({benebank : obj.BeneficiaryBank})
         this.setState({beneacc : obj.BeneficiaryAccount})
         this.setState({upi : obj.UPI})
         const data2={
          email : this.state.mail2
      }

         const response2 = await axios.post("https://full-banking-system.herokuapp.com/holderget/beneficiary",data2);
         console.log(response2.data);
          this.setState({length : response2.data.response.length })
          


          const res3 = await axios.post("https://full-banking-system.herokuapp.com/transfer/hostory/get",data2)
          console.log(res3.data.response.length);
          this.setState({length2:res3.data.response.length})


    

   

      
     
    }

    render(){
      if(this.state.loggedin===false)
      {
        return <Redirect to="/" />
      }
        return(
            <div id="App">
                <SideBar mail={this.state.mail2}/>
              
                  <div class="container user">
                    <div class="row img">
                      <FontAwesomeIcon icon={faMoneyCheckAlt}   style={{fontSize:"50px",color:"white",marginTop:"10px"}}/>
                        
                    </div>
                    <div class="row grid">
                      <div class="content">
                        <p>My Balance</p>
                        <p style={{fontSize:"30px"}}>₹{this.state.balance}</p>
                      </div>
                    </div>
                  </div>
                  <div class="container user1">
                    <div class="row img1">
                        <FontAwesomeIcon icon={faStoreAlt}  style={{fontSize:"50px",color:"white",marginTop:"10px"}}/>
                        
                    </div>
                    <div class="row grid2">
                      <div class="content">
                        <p>Beneficiary</p>
                        <p style={{fontSize:"30px"}}>{this.state.length}</p>
                      </div>
                    </div>
                  </div>
                  <div class="container user2">
                    <div class="row img1">
                      <FontAwesomeIcon icon={faExclamationCircle} style={{fontSize:"50px",color:"white",marginTop:"10px"}}  />
          
                    </div>
                    <div class="row grid2">
                      <div class="content">
                        <p>Statments</p>
                        <p style={{fontSize:"30px"}}>{this.state.length2}</p>
                      </div>
                    </div>
                  </div>
                  <div class="container user3">
                    <div class="row img2">
                    <FontAwesomeIcon icon={faUsers} style={{fontSize:"50px",color:"white",marginTop:"10px"}}  />
            
                    </div>
                    <div class="row grid3">
                      <div class="content">
                        <div className="row" >
                          <div className="col" >
                            <p style={{textAlign:"center"}}>Account Number</p>
                            <hr />
                            <p style={{textAlign:"center"}}>{this.state.accountno}</p>

                          </div>
                          <div className="col" >
                            <p style={{textAlign:"center"}}>Beneficiary Account</p>
                            <hr />
                            <p style={{textAlign:"center"}}>{this.state.beneacc}</p>

                          </div>
                          <div className="col" >
                            <p style={{textAlign:"center"}}>Beneficiary Bank</p>
                            <hr />
                            <p style={{textAlign:"center"}}>{this.state.benebank}</p>

                          </div>
                          <div className="col" >
                            <p style={{textAlign:"center"}}>UPI ID</p>
                            <hr />
                            <p style={{textAlign:"center"}}>{this.state.upi}</p>

                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
              

            </div>
        );
    }
}

export default withRouter(UserDashboard)