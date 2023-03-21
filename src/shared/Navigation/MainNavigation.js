import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Backdrop from '../UIEelements/Backdrop'
import MainHeader from './MainHeader'

import "./MainNavigation.css"
import Navlinks from './Navlinks'
import SideDrawer from './SideDrawer'
function MainNavigation() {
  const [isDrawerOpen, setDrawer] = useState(false);

  const openDrawerHandler = () =>{
    setDrawer(true);
  }
  const closeDrawerHandler  = () =>{
    setDrawer(false);
  }
  return (
    <React.Fragment>
     {isDrawerOpen && <Backdrop click={closeDrawerHandler}/>} 
    <SideDrawer show={isDrawerOpen} click={closeDrawerHandler}>
        <nav className='main-navigation__drawer-nav'>
        <Navlinks />
        </nav>
    </SideDrawer>
    
    <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
        <span />
        <span />
        <span />
        </button>
        <h1 className='main-navigation__title'>
            <Link to='/'>YourPlaces</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
            <Navlinks />
        </nav>
    </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation