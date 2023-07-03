import React from 'react';
import '../css/Contact.css'

function Contact() {
  return (
    <div className='contactPageStyle'>
      <form action="" className='contactForm'>
        <h2>Contact Us using the Form Below</h2>
        <label htmlFor="firstName">Enter First Name</label><br />
        <input type="text" name="" id="" /><br /><br />
        <label htmlFor="lastName">Enter Last Name</label><br />
        <input type="text" name="" id="" /><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Contact