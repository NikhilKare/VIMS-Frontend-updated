import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import React from 'react'
import CustomerNavbar from "../Pages/Customer/CustomerNavbar";
import Authorization from "../../Authorization";
import { Dropdown } from "react-bootstrap";

function RoleNavbar({isLoggedIn}) {
    const state = useSelector((state) => state);
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(Authorization.IsCustomer());
    // console.log(isLoggedIn())
     if (Authorization.IsCustomer()) {
      return (
        <>

        {/* <div >
          <select ><option>
              -Continue as-
            </option>
            <option>
              ADMIN
            </option>
            <option>
              POLICY_PROVIDER
            </option>
            <option>
              <Link to="">
              CUSTOMER  
              </Link>
            
            </option>
          </select>
          
        </div> */}

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Continue As
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  {
    Authorization.IsAdmin()? <Link className="dropdown-item" to="/admin">ADMIN</Link>:""
  }
  {
    Authorization.IsProvider()? <Link className="dropdown-item" to="/customer">POLICY PROVIDER</Link>:""
     }
     {
    Authorization.IsCustomer()?<Link className="dropdown-item" to="/customer">CUSTOMER</Link>:""
  }
   <Link className="dropdown-item" to="/addrole">+ Add Role</Link>
    
  </div>
</div>
            {/* <a
              
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
             ______
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to="/alogin">
                ADMIN
              </Link>
              <Link className="dropdown-item" to="/slogin">
                POLICY_PROVIDER
              </Link>
              <Link className="dropdown-item" to="/clogin">
                CUSTOMER
              </Link>
            </div> */}
        </>
      );
     }
    
}

export default RoleNavbar