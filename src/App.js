
import './App.css';
import React, { Component, useState } from 'react';
import {Route } from 'react-router-dom';
 import Adminlogin from './Components/adminlogin'
 import Admin from './Components/Admin'
import Userlogin from './Components/userlogin'
import UserSingup from './Components/usersingup'
import UserVerification from './Components/userVerification'
import UserDashboard from './Components/UserDashboard'
import UserProfile from './Components/UserProfile'
import Logout from './Components/logout'
import UserAddBeneficiary from "./Components/UserAddBeneficiary"
import UserAllBeneficiary from './Components/UserAllBeneficiary'
import PaymentTransfer from './Components/PaymentTransfer'

class App extends Component{
  constructor(props) {
    super(props);
   
    this.state={

    }
  }



  render(){

  
    return(<>
      <Route exact path="/">
        <Adminlogin />
      </Route>

      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/user">
        <Userlogin  />
      </Route>
      <Route exact path="/signup">
        <UserSingup />
      </Route>
      <Route exact path="/user/verification">
        <UserVerification />
      </Route>
      <Route exact path="/user/dashboard/:email">
        <UserDashboard />
      </Route>
      <Route exact path="/user/profile/:email">
        <UserProfile />
      </Route>
      <Route exact path="/user/addbenificiary/:email">
        <UserAddBeneficiary />
      </Route>
      <Route exact path="/user/allbenificiary/:email">
        <UserAllBeneficiary />
      </Route>
      <Route exact path="/user/payment/:email">
        <PaymentTransfer />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>


    </>);
  }
}

export default App;
