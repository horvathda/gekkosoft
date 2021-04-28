import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar__logo' onClick={closeMobileMenu}>
              <img className ="navbar__logo " src="/images/gekkosoft-logo.png" alt="Gekkosoft logo" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Főoldal
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/szoftverek'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Szoftverek
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/szolgaltatasok'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Szolgáltatasok
              </Link>
            </li>
            <li>
              <Link
                to='/rolunk'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Rólunk
              </Link>
            </li>

            <li>
              <Link
                to='/kapcsolat'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Kapcsolat
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
