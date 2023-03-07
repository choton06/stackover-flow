import React from 'react'
import {useLocation} from 'react-router-dom'

import LeftSideBar from '../../components/LeftSidebar/LeftSideBar'
import UsersList from './UsersList'


const Users = () => {
    
    const location = useLocation();

  return (
    <div className='home-container-1'>
        <LeftSideBar />
        <div className="home-container-2">
            {
                location.pathname === '/Users' ?
                <UsersList /> :
                <></>
            }
        </div>
        
    </div>
  )
}

export default Users