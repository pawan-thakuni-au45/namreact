import React from 'react'
import './Card.css'

function Card(props) {
    const {resData}=props
  return (
    <div className='card-con'>
    
    <img className='card-im' alt='card-img' src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+ resData.info.cloudinaryImageId}/>
         <h3>{resData.info.name}</h3>  
        <h4>{resData.info.cuisines.join(',')}</h4>
          <h4>{resData.info.costfORtWO}</h4>
          <h4>{resData.info.avgRating}</h4>
        
         

    </div>  )
}

export default Card
