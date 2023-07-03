import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <div className='footerParent'>
      <footer className='footerStyle'>
        <div className='footerItems'>
          <ul>
            <li>Home </li>
            <li>About</li>
            <li>Contact</li>
            <li>Other Products & Services</li>
          </ul>
          <div className='footerAddress'>
            <p>Address</p>
            <address></address>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer