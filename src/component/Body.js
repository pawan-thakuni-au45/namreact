import React, { useState } from 'react'
import Card from './Card'
import './Body.css'
import resData from '../utils/mockData'

function Body() {

    const [restaurantList,setrestaurantList]=useState(resData);

   
  return (
    <div className='body-con'>
      
    <div className='filter'>
     <button className='filter-btn'  onClick={()=>{
        const filterlist=restaurantList.filter((res) => res.info.avgRating > 4 );
        setrestaurantList(filterlist);
        console.log(filterlist);
           
     }} >Top Rated Restaurants</button>
    </div>

      <div className='card-cont'>
          {restaurantList.map((restaurant)=>(
                    < Card  key={restaurant.info.id}  resData={restaurant} />
        ))}

      </div>
    
    </div>
  )
}

export default Body
   