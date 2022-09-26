import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import React from 'react'
import CustomerNavbar from "../Pages/Customer/CustomerNavbar";
import Authorization from "../../Authorization";
import { Dropdown } from "react-bootstrap";

function RoleNavbar() {
  const history=useHistory();
    const state = useSelector((state) => state);
    console.log(Authorization.IsCustomer());
    if (Authorization.IsLoggedIn()) {
      return (
        <>
<div class="dropdown" style={{margin:"6% 10%"}}>
  <button class="btn btn-secondary dropdown-toggle" 
  type="button" style={{fontSize:"15px"}} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Continue As
  </button>
  <div class="dropdown-menu" style={{fontSize:"15px"}} aria-labelledby="dropdownMenuButton">
  {
    Authorization.getUser().roles.includes("ADMIN")?<Link onClick={()=>{sessionStorage.setItem("IsAdmin",true);window.location.reload()}}  className="dropdown-item" >ADMIN</Link>:""
  }
  {
    Authorization.IsProvider()?<Link onClick={()=>{sessionStorage.setItem("IsAdmin",false);window.location.reload()}} className="dropdown-item" >POLICY PROVIDER</Link>:""
  }
  {
    Authorization.IsCustomer()?
    <Link className="dropdown-item" to="/profile">CUSTOMER</Link>:""
  }
  {(Authorization.IsCustomer()&&Authorization.IsProvider())?"":
    <Link className="dropdown-item" to="/addrole">+ Add Role</Link>
  }
   
    
  </div>
</div>
        </>
      );
    }
    
}

export default RoleNavbar