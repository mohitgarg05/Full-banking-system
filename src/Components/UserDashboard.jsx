import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sidebar'
import "../CSS/dashboard.css"
export default  class UserDashboard extends Component{
    constructor(props) {
        super(props);
        this.state=
        {

        }
    }

    render(){
        return(
            <div id="App">
                <SideBar />
              
                  <div class="container user">
                    <div class="row img">
                        <i class="fa fa-users" style={{fontSize:"40px",color:"white",marginTop:"3px",marginLeft:"8px"}}></i>
                    </div>
                    <div class="row grid">
                      <div class="content">
                        <p>Your Balance</p>
                      </div>
                    </div>
                  </div>
                  
          

            </div>
        );
    }
}