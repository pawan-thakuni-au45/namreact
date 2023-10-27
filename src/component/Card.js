import React from 'react'
import {CDN_URL} from '../utils/constants'


function Card(props) {
    const {resData}=props
  return (
    
    <div className='m-2 p-1 ml-14 w-[300px] item-center bg-gray-200 rounded-lg hover:bg-gray-400'>
    
    <img className='rounded-lg p-5' alt='card-img flex' src={CDN_URL+ resData.info.cloudinaryImageId}/>
         <h3 className='font-bold py-2'>{resData.info.name}</h3>  
        <h5>{resData.info.cuisines.join(',')}</h5>
          <h4>{resData.info.costForTwo  }</h4>
          <h4 className='font-bold '>{resData.info.avgRating}</h4>

      
        
        
         

    </div> 
    
    
    
    )
}

export default Card
