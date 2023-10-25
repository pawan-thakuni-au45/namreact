import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { MENU_API } from '../utils/constant';


import Simmer from './Simmer';
import Restrauntcatageries from './Restrauntcatageries';

function RestrauntMenu() {

    const [resInf,setResInfo]=useState(null)

    const {resId}=useParams()
    // console.log(resId,'d');

    useEffect(()=>{
             fetchData();
    },[]);

      const fetchData=async()=>{
        const data= await fetch(MENU_API+resId);
        const json=await data.json()
        console.log(json);
        setResInfo(json.data)
      }
      if(resInf===null){
        return <Simmer/>
      }

      const{name,costForTwo,cuisines,costForTwoMessage
      }=resInf?.cards[0]?.card?.card?.info

      const {itemCards} = resInf?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


      
      
     console.log(resInf?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards,'g')
      const catagaries=resInf?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(   (c) =>
      c.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
      console.log(catagaries,'f');

  return (
    <div>
      <div className='text-center'>
     <h1 className='font-bold'>{name  }</h1>
     <p>{cuisines }-{costForTwoMessage     }</p>
     </div>

     {catagaries.map((cat)=>(      
      <Restrauntcatageries data={cat?.card?.card}/>
     ))}

         </div>
  )
}

export default RestrauntMenu