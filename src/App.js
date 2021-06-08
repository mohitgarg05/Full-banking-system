
import './App.css';
import {Route } from 'react-router-dom';
 import Adminlogin from './Components/adminlogin'
 import Admin from './Components/Admin'
import Userlogin from './Components/userlogin'
import UserSingup from './Components/usersingup'
import UserVerification from './Components/userVerification'
import UserDashboard from './Components/UserDashboard'
function App() {
  return (
    <>
      <Route exact path="/">
        <Adminlogin />
      </Route>

      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/user">
        <Userlogin />
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

    </>
  );
}

export default App;
