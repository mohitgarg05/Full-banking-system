import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "../CSS/admin.css"

export default props => {
  return (
      <>
     
    <Menu>
    
    <p style={{textTransform:"uppercase",letterSpacing:"5px",fontSize:"20px"}}>My Bank</p>
    <hr />
      <a className="menu-item" href={`/user/dashboard/${props.mail}`} style={{marginTop:"40px"}}>
        Dashboard
      </a>
      <a className="menu-item" href={`/user/profile/${props.mail}`} style={{marginTop:"40px"}}>
        My Profile
      </a>
      <a className="menu-item" href={`/user/addbenificiary/${props.mail}`} style={{marginTop:"40px"}}>
        Add Benificiary
      </a>
      <a className="menu-item" href={`/user/allbenificiary/${props.mail}`} style={{marginTop:"40px"}}>
        All Benificiary
      </a>
      <a className="menu-item" href={`/user/statements/${props.mail}`} style={{marginTop:"40px"}}>
        Account Statments
      </a>
      <a className="menu-item" href={`/user/payment/${props.mail}`} style={{marginTop:"40px"}}>
        Payment request
      </a>

      
    </Menu>
    </>
  );
};