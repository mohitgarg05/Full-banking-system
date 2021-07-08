import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "../CSS/admin.css"
import { Redirect ,Link} from 'react-router-dom';

export default props => {
  return (
      <>
     
    <Menu>
    
    <p style={{textTransform:"uppercase",letterSpacing:"5px",fontSize:"20px"}}>My Bank</p>
    <hr />
      <a className="menu-item" href="/user/dashboard/" style={{marginTop:"40px"}}>
        Dashboard
      </a>
      <a className="menu-item" href='/user/profile/' style={{marginTop:"40px"}}>
        My Profile
      </a>
      <a className="menu-item" href='/user/addbenificiary/' style={{marginTop:"40px"}}>
        Add Benificiary
      </a>
      <a className="menu-item" href='/user/allbenificiary/' style={{marginTop:"40px"}}>
        All Benificiary
      </a>
      <a className="menu-item" href='/user/statements/' style={{marginTop:"40px"}}>
        Account Statments
      </a>
      <a className="menu-item" href='/user/payment/' style={{marginTop:"40px"}}>
        Payment request
      </a>
          
      <Link to="/logout" style={{marginTop:"40px"}}>Logout</Link>

      
    </Menu>
    </>
  );
};