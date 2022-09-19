import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import React from 'react'
import CustomerNavbar from "../Pages/Customer/CustomerNavbar";

function RoleNavbar({isLoggedIn}) {
    const state = useSelector((state) => state);
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(sessionStorage.getItem("roles"), isLoggedIn);
     if (sessionStorage.getItem("roles") === "CUSTOMER") {
        return (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link  text-light" to="/sprofile">
                Profile
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-light" to="/add-product">
                Add Product
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-light" to="/myproducts">
                Products
              </Link>
            </li>
            {/* <li className="nav-item active">
              <Link className="nav-link text-light" onClick={logout} to="#">
                Logout
              </Link>
            </li> */}
          </ul>
        );
      }
    
}

export default RoleNavbar