// import React from 'react'
// import { Link } from 'react-router-dom'
// import '../App.css'
// const Navbar = () => {
//   return (
//    <nav>
//     <ul>
//         <li><Link to='/Home' >Home</Link></li>
//         <li><Link to='/Blog' >Blog</Link> </li>
//     </ul>
//    </nav>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
// import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand-title">Blogs Brand</div>
      <div className="toggle-button" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/Blog" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/Contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
