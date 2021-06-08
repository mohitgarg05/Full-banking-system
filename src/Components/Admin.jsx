import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sidebar'
 export default  class Admin extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }


    render(){
        return(
        <div id="App">
            <SideBar />
     
            <div id="page-wrap">
      
              <h1 style={{marginTop:"10px",fontSize:"70px"}}>Welcome</h1>
               <hr />
            </div>
          
            <div className="container" style={{marginLeft:"400px"}}>
              
                <div className="row">
                    <div className="col-2" style={{border:"solid grey"}}>
                        <div className="row">
                            <div className="col-auto logo">
                                <i class="fa fa-users" style={{fontSize:"70px"}}></i>
                            </div>
                            <div className="col-auto pu-3">
                                <p>All Users: </p>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"20px"}}>
                            <a>View List of users</a>
                        </div>

                    </div>
                </div>

            </div>
</div>
      


        );
    }
} 