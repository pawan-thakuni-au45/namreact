import React from 'react'
import {LOGO_URL} from '../utils/constant'
import './Header.css'

function Header() {
  return (
    <div className='header'>

      <div className='logocontainer'>
        <img className='logo' src={LOGO_URL} alt='foood'/>
      </div>
    <div className='nav-bar'>
      <ul >
         <li>Home</li>
         <li>About</li>
         <li>Contact</li>
         <li>Cart</li>
         
       </ul>
    </div>
    
    </div>
  )
}

export default Header