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
        this.handlechange = this.handlechange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
        const token = localStorage.getItem("token");
        console.log("token : " +token);
        if(token== null){
         loggedin=false
        }
        this.state={
          mail2:"",bankholdername:"",holderaccount:"",bankname:"",branchname:"",ifsc:""
        }
    }

    handlechange(e){
        this.setState({[e.target.name]: e.target.value})
    
    }
   async handlesubmit(e){
        e.preventDefault();
        const data = {
            "senderemail" : this.state.mail2,
            "bankholdername": this.state.bankholdername,
            "holderaccount": this.state.holderaccount,
            "bankname" : this.state.bankname,
            "branchname" : this.state.branchname,
            "ifsc" : this.state.ifsc

        }
       const res = await axios.post("https://full-banking-system.herokuapp.com/holder/beneficiary",data);
       console.log(res.data);
       if(res.data.status.localeCompare("exists")===0){
           alert("Alerdy Exists")
       }
       else{
           alert("Added")
       }
       
    }
    
   async componentDidMount(){
    const mail1 = this.props.match.params.email;
    this.setState({mail2 : mail1})

  
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
                                    <div className="col-3">
                                        <label>Bank Holder Name: </label>
                                    </div>
                                    <div className="col">
                                        <input name="bankholdername" value={this.state.bankholdername}onChange={this.handlechange} />
                                    </div>
                                
                                </div>
                                <div className="row form-group"  style={{marginTop:"20px"}}>
                                    <div className="col-3">
                                        <label>Account Number: </label>
                                    </div>
                                    <div className="col">
                                        <input name="holderaccount" value={this.state.holderaccount}onChange={this.handlechange} />
                                    </div>
                                
                                </div>
                                <div className="row form-group"  style={{marginTop:"20px"}}>
                                    <div className="col-3">
                                        <label>Bank Name: </label>
                                    </div>
                                    <div className="col">
                                        <input name="bankname" value={this.state.bankname}onChange={this.handlechange} />
                                    </div>
                                
                                </div>
                                <div className="row form-group"  style={{marginTop:"20px"}}>
                                    <div className="col-3">
                                        <label>Branch Name: </label>
                                    </div>
                                    <div className="col">
                                        <input name="branchname" value={this.state.branchname} onChange={this.handlechange} />
                                    </div>
                                
                                </div>
                                <div className="row form-group"  style={{marginTop:"20px",marginBottom:"20px"}}>
                                    <div className="col-3">
                                        <label>IFSC code: </label>
                                    </div>
                                    <div className="col">
                                        <input name="ifsc" value={this.state.ifsc} onChange={this.handlechange} />
                                    </div>
                                
                                </div>
                                <div className="row" style={{width:"200px",marginLeft:"250px"}}>
                                  
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
export default withRouter(UserProfile);