
import './App.css';
import React, { Component, useState } from 'react';
import {Route } from 'react-router-dom';

import Userlogin from './Components/userlogin'
import UserSingup from './Components/usersingup'
import UserVerification from './Components/userVerification'
import UserDashboard from './Components/UserDashboard'
import UserProfile from './Components/UserProfile'
import Logout from './Components/logout'
import UserAddBeneficiary from "./Components/UserAddBeneficiary"
import UserAllBeneficiary from './Components/UserAllBeneficiary'
import PaymentTransfer from './Components/PaymentTransfer'
import UserStatements from './Components/UserStatements'

class App extends Component{
  constructor(props) {
    super(props);
   
    this.state={

    }
  }



  render(){

  
    return(<>
     
      <Route exact path="/">
        <Userlogin  />
      </Route>
      <Route exact path="/signup">
        <UserSingup />
      </Route>
      <Route exact path="/user/verification">
        <UserVerification />
      </Route>
      <Route exact path="/dashboard/">
        <UserDashboard />
      </Route>
      <Route exact path="/profile/">
        <UserProfile />
      </Route>
      <Route exact path="/addbenificiary/">
        <UserAddBeneficiary />
      </Route>
      <Route exact path="/allbenificiary/">
        <UserAllBeneficiary />
      </Route>
      <Route exact path="/payment/">
        <PaymentTransfer />
      </Route>
      <Route exact path="/statements/">
        <UserStatements />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>


    </>);
  }
}

export default App;
