import React, { useState } from 'react'
import {LOGO_URL} from '../utils/constants'

import { Link } from 'react-router-dom'
import UseOnlinestatus from '../utils/UseOnlinestatus'
import { useSelector } from 'react-redux'

function Header() {

    const [loginbtn,setlogintbn]=useState('login')
    const onlineStatus=UseOnlinestatus()

    //subscribing to the store using a selector
    //means this selector helps us to identify which portion of our store i need to read(subscribing to the store)
    //useselector for reading 
    const cart=useSelector((store)=>store.cart.items)
  return (
    <div className="flex justify-between bg-blue-300 m-4 shadow-2x" >

      <div className='logocontainer'>
        <img className='w-40' src={LOGO_URL} alt='foood'/>
      </div>
    <div className='flex items-center'>
      <ul className='flex p-55 m-500'>


      <li className='px-5 hover:bg-gray-400'>
        Online Status:{onlineStatus? "online":"offline"}
      </li>
         <li className='px-5 hover:bg-gray-400'>
         
        <Link to='/' >Home</Link> 
         </li>
         <li className='px-5 hover:bg-gray-400'>
        <Link to='/About '> About</Link>
         
         </li>
         <li className='px-5 hover:bg-gray-400'>
         <Link to='/contact'>Contact</Link>
         </li>
         <li className='px-5 hover:bg-gray-400'>
       <Link to='/cart'>Cart({cart.length}items)</Link>           
         </li> 
         <button className='px-5 hover:bg-gray-400' onClick={()=>{
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