import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Body.css'
import resData from '../utils/mockData'
import Simmer from './Simmer'

function Body() {

    const [restaurantList,setrestaurantList]=useState([]);

    const [filterres,setFilterres]=useState([]);

    const [searchtab,setSearchtab]=useState("")
   
    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData = async()=>{
        const data =await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json=await data.json()
        console.log(json)
        setrestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterres(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants )

    };

      if(restaurantList.length===0){
         return <Simmer/>
      }
   
  return (
    <div className='body-con'>
      
    <div className='filter'>
     <div className='search'>
       <input type='text' className='ser-box' value={searchtab} 
         onChange={(e)=>{
            setSearchtab (e.target.value)
         }}
       ></input>
        <button onClick={()=>{
           const filtername= restaurantList.filter((res)=>res.info.name.toLowerCase().includes(searchtab.toLowerCase()))
           setFilterres(filtername)
              
        }}>search</button>
     </div>
     <button className='filter-btn'  onClick={()=>{
        const filterlist=restaurantList.filter((res) => res.info.avgRating > 4 );
        setrestaurantList(filterlist);
        console.log(filterlist);
           
     }} >Top Rated Restaurants</button>
    </div>

      <div className='card-cont'>
          {filterres.map((restaurant)=>(
                    < Card   key={restaurant.info.id} resData={restaurant} />
        ))}

      </div>
    
    </div>
  )
}

export default Body
   