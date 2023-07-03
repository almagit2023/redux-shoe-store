import React from 'react'
import MainDisplay from '../../components/js/MainDisplay'
import LeftSideBar from '../../components/js/LeftSideBar'
import '../css/Home.css'

function Home() {
  return (
    <div className='mainContentDisplay'>
      <MainDisplay />
      <LeftSideBar/>
    </div>
  )
}

export default Home