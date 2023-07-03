import React from 'react';
import '../css/Header.css'

function Header() {
  return (
    <div className='headerParent'>

      <header className='headerStyle'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROsORci-h3Rv90kwMATuLkjmrTlawWrUFutxiC7uHQogq7QpFJBkSqn6WP8ykYf2Iv2As&usqp=CAU" alt="" className='logoStyle' />
        <h2 className='headerText'>Sneakers Society</h2>
      </header>
    </div>
  )
}

export default Header
