import React from 'react';
import './NavBar.css';

const NavBar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="mobile-menu-container">
        <h1  className='font-bold '>Port<span className='bg-gradient-to-r from-cyan-600 via-cyan-300 to-blue-700 bg-clip-text  tracking-tight text-transparent '>folio.</span></h1>
          <ul>
            <li><a className="menu-item" href="#home">Home</a></li>
            <li><a className="menu-item" href="#about">About</a></li>
            <li><a className="menu-item" href="#skills">Skills</a></li>
            <li><a className="menu-item" href="#projects">Projects</a></li>
            <li><a className="menu-item" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
