import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'

function Navbar() {
  return (
    <div className='navbarStyle'>
      <Link to="home" className='navbarElement'>Home</Link>
      <Link to="about" className='navbarElement'>About</Link>
      <Link to="contact" className='navbarElement'>Contact Us</Link>
      <Link to="products" className='navbarElement'>Other Products</Link>
    </div>
  )
}

export default Navbar