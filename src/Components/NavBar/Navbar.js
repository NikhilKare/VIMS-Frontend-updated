import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import "./navbar.css";
import { Button } from './Button';
import "./Button.css";

import { Link, useHistory } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import Authorization from "../../Authorization";
import RoleNavbar from "./RoleNavbar";
const { Fragment } = require("react");
const Navbar = (props) => {
  const state = useSelector((state) => state);
  const history=useHistory();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
const logout=()=>{
  sessionStorage.clear();
  props.setLogIn(false);
  history.push("/");
}
  return (
    <>
    <Fragment>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>I</span>nsurance
            <span>B</span>azaar
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/policies">Policies</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            <div className="login">
            <li onClick={props.IsLoggedIn?logout:""}>
            <NavLink to={props.IsLoggedIn?"":"/sign-up-in"}>
              
              {/* {props.Authorization.getName()} */}
              {props.IsLoggedIn?"Logout":`LOGIN/REGISTER`}
              </NavLink>
            </li>
            </div>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
          
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
            <RoleNavbar isLoggedIn={Authorization.IsCustomer} />
          </div>
        </div>
      </nav>
      </Fragment>
    </>
  );
};

export default Navbar;