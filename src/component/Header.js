import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>

      <div className='logocontainer'>
        <img className='logo' src='https://dynamic.brandcrowd.com/asset/logo/94def15e-5330-48a2-9ed6-4992a21f4b7f/logo-search-grid-1x?logoTemplateVersion=1&v=637682366529570000' alt='foood'/>
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