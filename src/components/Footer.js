import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
          <div className="footer-container__rights">
            



          <p className='website-rights'>©2007-2021 Gekkosoft</p>
          <Link className='footer__link' target="blank" to="/Adatkezelesi_tajekoztato">Adatkezelési tájékoztató</Link>
          
        </div>


  </div>
  );
}

export default Footer;
