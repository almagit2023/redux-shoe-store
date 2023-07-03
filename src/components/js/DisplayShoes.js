import React from 'react';
import '../css/DisplayShoes.css';

function DisplayShoes({ shoe }) {
  return (
    <div className='displayShoeStyle'>
      <div className='displayShoeItem'>
        <p className='shoeName'>{shoe.shoe_name}</p>
        <p className='shoeDesc'>{shoe.shoe_description}</p>
        <img className='shoeImg' src={shoe.shoe_image} alt="" width={100} />
        <p className='shoePrice'>${shoe.shoe_price}</p>
        <p className='shoeColor'>{shoe.shoe_color}</p>
        <p className='shoeAvailability'>{shoe.availability}</p>
        <button className={shoe.availability ? 'addToCartBtn' : 'addToCartBtnDisable'} disabled={!shoe.availability}>Add to Cart</button>
        <h5 className=''>{shoe.availability ? <span className='shoeAvailable'>Available</span> : <span className='shoeUnAvailable'>Unavailable</span>}</h5>
      </div>
    </div>
  )
}

export default DisplayShoes