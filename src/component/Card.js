import React from 'react'
import {CDN_URL} from '../utils/constant'
import './Card.css'

function Card(props) {
    const {resData}=props
  return (
    <div className='card-con'>
    
    <img className='card-im' alt='card-img' src={CDN_URL+ resData.info.cloudinaryImageId}/>
         <h3>{resData.info.name}</h3>  
        <h4>{resData.info.cuisines.join(',')}</h4>
          <h4>{resData.info.costfORtWO}</h4>
          <h4>{resData.info.avgRating}</h4>
        
         

    </div>  )
}

export default Card
