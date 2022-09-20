import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const state=useSelector((state)=>state);
  alert(state.loggedin);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Insurance Bazaar
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            {console.log(state.loggedin.IsLoggedIn)}
            
          <li>
              <Link
                to='/sign-up-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                LOGIN/REGISTER 
              </Link>
            </li>

          </ul>
          {!state.loggedin.IsLoggedIn && button && <Button url='/sign-up-in' buttonStyle='btn--outline'>LOGIN/REGISTER</Button>}
        </div>
      </nav>
    </>
  );
}
export default Navbar;