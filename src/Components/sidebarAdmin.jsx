import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "../CSS/admin.css"

export default props => {
  return (
      <>
     
    <Menu>
    
    <p style={{textTransform:"uppercase",letterSpacing:"5px",fontSize:"20px"}}>Bank Admin</p>
    <hr />
      <a className="menu-item" href="/dashboard" style={{marginTop:"40px"}}>
        Dashboard
      </a>

      <a className="menu-item" href="/laravel" style={{marginTop:"40px"}}>
        All Users
      </a>

      <a className="menu-item" href="/angular" style={{marginTop:"40px"}}>
        Payment request
      </a>

      
    </Menu>
    </>
  );
};