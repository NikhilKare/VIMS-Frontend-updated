import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import React from 'react'
import CustomerNavbar from "../Pages/Customer/CustomerNavbar";
import Authorization from "../../Authorization";
import { Dropdown } from "react-bootstrap";

function RoleNavbar() {
    const state = useSelector((state) => state);
    console.log(Authorization.IsCustomer());
    if (state.loggedin.IsLoggedIn) {
      return (
        <>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Continue As
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  {
    Authorization.IsAdmin()?<Link className="dropdown-item" to="/profile">ADMIN</Link>:""
  }
  {
    Authorization.IsProvider()?<Link className="dropdown-item" to="/profile">POLICY PROVIDER</Link>:""
  }
  {
    Authorization.IsCustomer()?
    <Link className="dropdown-item" to="/profile">CUSTOMER</Link>:""
  }
  {
    <Link className="dropdown-item" to="/addrole">+ Add Role</Link>
  }
   
    
  </div>
</div>
        </>
      );
    }
    
}

export default RoleNavbar