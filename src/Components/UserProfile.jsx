import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sidbarUser'
import "../CSS/profile.css"
import { Redirect ,Link} from 'react-router-dom';
import { withRouter } from "react-router";
import axios from 'axios'
class UserProfile extends Component{
    constructor(props) {
        let loggedin = true;
        super(props);
        const token = localStorage.getItem("token");
        console.log("token : " +token);
        if(token== null){
         loggedin=false
        }
        this.state={
          mail2:"",  loggedin,account:"",name:"",address:"",city:"",country:"",mail:"",fathername:"",nation:"",phone:"",state:""
        }
    }
    
   async componentDidMount(){
    const mail = localStorage.getItem("Email")
      console.log(mail);
      this.setState({mail2 : mail})
      const res = await axios.get("https://full-banking-system.herokuapp.com/user/details");

      let obj = res.data.response.find(o => o.UserEmail === mail);
      console.log(obj);
      
      this.setState({accountno : obj.Account})
      this.setState({name: obj.Name})
      this.setState({address : obj.UserAddress})
      this.setState({city : obj.UserCity})
      this.setState({country : obj.UserCountry})
      this.setState({mail : obj.UserEmail})
      this.setState({fathername : obj.UserFathername})
      this.setState({nation : obj.UserNationality})
      this.setState({phone : obj.UserPhone})
      this.setState({state : obj.UserState})


      console.log(this.state.balance);
  
 }

    render(){
        if(this.state.loggedin===false)
        {
          return <Redirect to="/" />
        }
        return(
            <>  
            <div id="App">
                <SideBar mail={this.state.mail2}/>
                <div className="container profile" >
                <div class="row profileimg">
                       <p>My Profile</p>
                    </div>
                    <div class="row  profilegrid" >
                      <div class="profilecontent">
                        <div className="row" style={{marginTop:"30px"}}>
                            <div className="col">
                                <div className="row"  style={{marginTop:"20px"}}>
                                    <p>Name : {this.state.name}</p>
                                </div>
                                <div className="row" style={{marginTop:"20px"}}>
                                    <p>Father's Name : {this.state.fathername}</p>
                                </div>
                              
                                
                                <div className="row" style={{marginTop:"20px"}}>
                                    <p>State : {this.state.state}</p>
                                </div>
                                <div className="row" style={{marginTop:"20px"}}>
                                    <p>Country : {this.state.country}</p>
                                </div>
                                <div className="row" style={{marginTop:"20px"}}>
                                    <p>Nationality : {this.state.nation}</p>
                                </div>
                              
                                
                            
                            </div>
                            <div className="col">
                            <div className="row"  style={{marginTop:"20px"}}>
                                    <p>City : {this.state.city}</p>
                                </div>
                                <div className="row" style={{marginTop:"20px"}}>
                                    <p>Account Number : {this.state.accountno}</p>
                                </div>
                                <div className="row" style={{marginTop:"20px"}}>
                                    <p>Email : {this.state.mail}</p>
                                </div>
                                <div className="row" style={{marginTop:"20px"}}>
                                    <p>Phone : {this.state.phone}</p>
                                </div>
                                <div className="row" style={{marginTop:"20px"}}>
                                    <p>Address : {this.state.address}</p>
                                </div>
                                
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
export default withRouter(UserProfile);