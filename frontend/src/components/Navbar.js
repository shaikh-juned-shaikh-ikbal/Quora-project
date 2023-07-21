import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import Search from '@mui/icons-material/Search';
import { Avatar, Button } from '@mui/material';
import  "./css/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <div className='navbar__logo'>
          <img
          // src='././public/logo.png'
          src='https://cdn-icons-png.flaticon.com/512/4096/4096393.png'
          alt='logo'
          />        
          </div>
          <div className='navbar__icons'>
            <div className='navbar__icon'>
              <HomeIcon/>
               </div>
            <div className='navbar__icon'>
              <FeaturedPlayListOutlinedIcon/>
              </div>
            <div className='navbar__icon'>
              <AssignmentTurnedInOutlinedIcon/>
              </div>
            <div className='navbar__icon'>
              <PeopleAltOutlinedIcon/>
              </div>
            <div className='navbar__icon'>
              < NotificationsOutlinedIcon/>
              </div>
            </div>  
            <div className='navbar__input'>
              <Search/>
              <input type='text' placeholder='search questions'/>
              </div> 
              <div className='navbar__Rem'>
                <Avatar />
              </div>
              <Button>Add questions</Button>

        
      </div>
    </div>
  )
}

export default Navbar