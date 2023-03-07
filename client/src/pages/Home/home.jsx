import React from 'react'
import '../../App.css'
import LeftSideBar from '../../components/LeftSidebar/LeftSideBar'
import MainHomeBar from '../../components/MainHomeBar/MainHomeBar'
import RightSideBar from '../../components/RightSideBar/RightSiteBar'

const home = () => {
  return (
    <div className='home-container-1'>
      <LeftSideBar />
     <div className='home-container-2'>
        <MainHomeBar />
        <RightSideBar />
     </div>
     
    </div>
  )
}

export default home