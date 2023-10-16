import React, { useState } from 'react'
import {LOGO_URL} from '../utils/constant'
import './Header.css'

function Header() {

    const [loginbtn,setlogintbn]=useState('login')
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
         <button onClick={()=>{
            loginbtn==='login'?
            setlogintbn('logout'):
            setlogintbn('login')
         }}>{loginbtn}</button>
         
       </ul>
    </div>
    
    </div>
  )
}

export default Header