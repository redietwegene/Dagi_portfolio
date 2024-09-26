import React, { useState } from 'react';
import "./nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='top_nav'>
      <div>
        {/* <img className="logo_pic" src={logoPic} alt='logo'/> */}
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav_bar ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/project">Project</a></li>
          <li><a href="/contact">Contact me</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
