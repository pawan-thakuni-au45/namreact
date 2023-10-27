import React, { useEffect, useState } from 'react'
import Card from './Card'

import resData from '../utils/mockData'
import Simmer from './Simmer'
import Shimmer from './Shimmer'
import { swiggy_api_URL } from "../utils/constants"
import UseOnlinestatus from '../utils/UseOnlinestatus'
import { Link } from 'react-router-dom'

function Body() {

    const [restaurantList,setrestaurantList]=useState([]);

    const [filterres,setFilterres]=useState([]);

    const [searchtab,setSearchtab]=useState("")
   
    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData = async()=>{
        const data =await fetch(
           
          swiggy_api_URL
        )
        const json=await data.json()
        console.log(json)
        setrestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterres(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants )

    };

    const onlineStause = UseOnlinestatus();
      if(onlineStause=== false) { return (<h1>Looks like you are offline , please check your internet connection</h1>)}

      if(restaurantList.length===0){
         return (
         <div>
         <Shimmer/>
         <Simmer/>
         </div>
         )
      }
   
    
  return (
    <div className='bg-red-50 '>
      
    <div className='filter flex'>
     <div className='search m-4 p-4 border-black '>
       <input type='text' className='ser-box border-solid  border-black ' value={searchtab} placeholder='what is on your mind'
         onChange={(e)=>{
            setSearchtab (e.target.value)
         }}
       ></input>
       
        <button className="px-8 py-2 bg-green-100 m-4 rounded-3xl" onClick={()=>{
           const filtername= restaurantList.filter((res)=>res.info.name.toLowerCase().includes(searchtab.toLowerCase()))
           setFilterres(filtername)
              
        }}>search</button>
       
     </div>

     <div className="px-1 py-1 bg-gray-100 my-12 p-4 rounded-lg hover:bg-red-400">
     <button className='filter-btn'  onClick={()=>{
        const filterlist=restaurantList.filter((res) => res.info.avgRating > 4.2 );
        setFilterres(filterlist);
        console.log(filterlist);
           
     }} >Top Rated Restaurants</button>
    
     </div>
    </div>

      <div className='flex flex-wrap '>
          {filterres.map((restaurant)=>(

      
           
                       
           <Link key={restaurant.info.id} to={'/restaurent/'+restaurant.info.id}> < Card    resData={restaurant} /> </Link> 
            
        ))}
        

      </div>
    
    </div>
  )
}

export default Body
   