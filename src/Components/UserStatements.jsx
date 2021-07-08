import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sidbarUser'
import "../CSS/profile.css"
import { Redirect ,Link} from 'react-router-dom';
import { withRouter } from "react-router";
import axios from 'axios'
class UserStatements extends Component{
    constructor(props) {
        let loggedin = true;
        super(props);
        const token = localStorage.getItem("token");
        console.log("token : " +token);
        if(token== null){
         loggedin=false
        }
        this.state={
          mail2:"",statements:[],Account:""
        }
    }
    
   async componentDidMount(){
    const mail = localStorage.getItem("Email")
      console.log(mail);
      this.setState({mail2 : mail})
    const data={
        email : mail
    }
   

    try {
        const res = await axios.post("https://full-banking-system.herokuapp.com/transfer/hostory/get",data)
    
      

        const res2 = await axios.get("https://full-banking-system.herokuapp.com/user/details");

        let obj2 = res2.data.response.find(o => o.UserEmail === mail);
        console.log(obj2);
         
        this.setState({statements : res.data.response })
        this.setState({Account : obj2.Account})

    } catch (error) {
        console.log(error);
    }
  
  
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
                       <p>Payment Statements</p>
                    </div>
                    <div class="row  profilegrid" >
                      <div class="profilecontent">
                        <div className="row table" style={{marginTop:"30px"}}>
                        <table >
                            <tr >
                                <th style={{paddingLeft:"23px",paddingTop:"20px"}}>Sender's Account</th>
                                <th style={{paddingLeft:"27px",paddingTop:"20px"}}>Recevier's Account</th>
                                <th style={{paddingLeft:"22px",paddingTop:"20px"}}>Transfered money</th>
                                <th style={{paddingLeft:"47px",paddingTop:"20px"}}>Date and Time</th>
                            </tr>
                          
                            {this.state.statements.map(item=>(
                               <tr>
                                <td>{this.state.Account}(You)</td>
                                <td>{item.ReceviersName}</td>
                                <td>{item.AmountTransfered}</td>
                                <td>{item.Date}    {item.Time}</td>
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
export default withRouter(UserStatements);