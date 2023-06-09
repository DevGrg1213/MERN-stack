import React from 'react'
import { NavLink } from 'react-router-dom';

import "./NavLinks.css";

function Navlinks() {
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to='/'>All Places</NavLink>
        </li>
        <li>
            <NavLink to='/u1/places'>MY PLACES</NavLink>
        </li>
        <li>
            <NavLink to='/places/new'>ADD PLACES</NavLink>
        </li>
        <li>
            <NavLink to='/auth'>AUTHENTICATE</NavLink>
        </li>
    </ul>

  )
}

export default Navlinks