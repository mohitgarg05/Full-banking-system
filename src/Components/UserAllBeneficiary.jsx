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
          mail2:"",items:[]
        }
    }

    
    
   async componentDidMount(){
    const mail1 = this.props.match.params.email;
    this.setState({mail2 : mail1})
    const data ={
        email : mail1
    }
    
    const res = await axios.get("https://full-banking-system.herokuapp.com/holderget/beneficiary",data);
    
    this.setState({items: res.data.response})
    console.log(this.state.items);

  
 }

    render(){
        const {items} = this.state
        if(this.state.loggedin===false)
        {
          return <Redirect to="/user" />
        }
        return(
            <>  
            <div id="App">
                <SideBar mail={this.state.mail2}/>
                <div className="container profile" >
               
                    <div class="row  profilegrid" >
                      <div class="profilecontent">
                        <div className="row table" style={{marginTop:"30px"}}>
                        <table >
                            <tr >
                                <th style={{paddingLeft:"23px",paddingTop:"20px"}}>Bank Holder Name</th>
                                <th style={{paddingLeft:"27px",paddingTop:"20px"}}>Account Number</th>
                                <th style={{paddingLeft:"22px",paddingTop:"20px"}}>Bank Name</th>
                                <th style={{paddingLeft:"47px",paddingTop:"20px"}}>IFSC code</th>
                            </tr>
                          
                            {items.map(item=>(
                               <tr>
                                <td>{item.BankHolderName}</td>
                                <td>{item.AccountNumber}</td>
                                <td>{item.BankName}</td>
                                <td>{item.IFSC}</td>
                               </tr>
                           ))}
                            
                </table>
                     
                          
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