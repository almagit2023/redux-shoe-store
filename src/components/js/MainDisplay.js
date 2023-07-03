import React, { useState, useEffect } from 'react';
import '../css/MainDisplay.css'
import axios from 'axios';
import DisplayShoes from './DisplayShoes';

function MainDisplay() {
  const [shoes, setShoes] = useState([]);
  const API = 'http://localhost:4000/shoes';

  const fetchShoes = () => {
    axios.get(API)
      .then(res => {
        const shoeItems = res.data;
        console.log(shoeItems)
        setShoes(shoeItems)
      })
  }

  useEffect(() => {
    fetchShoes();
  }, [])

  console.log(shoes)
  const resultShoe = shoes.map((item, index) => <DisplayShoes key={item.shoe_Id} shoe={item} />)

  return (
    <div className='mainDisplayStyle'>
      <h2>Pick Your Shoes</h2>
      <div className='mainDisplayRow'>
        {resultShoe}
      </div>
    </div>
  )
}

export default MainDisplay