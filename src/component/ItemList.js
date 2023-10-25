import React from 'react'
import { CDN_URL } from '../utils/constant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

function ItemList({items,dummy}) {
    //given by react-redux;
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
      dispatch(addItem(item))
      
    }


   
  return (
    <div>
            
       {items.map((item)=>(

        
 <div className='p-1  border-b-3 border-black text-center shadow-lg'>
        <img className=' pl-100 w-16 ml-96 item-center ' src={CDN_URL+item.card.info.imageId} />
        <span>{item.card.info.name}</span>
        <span>- Rs{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
        <button className='p-2 ml-4 mx-2 my-0 rounded-md absolute m-auto bg-gray-200' onClick={()=>handleAddItem(item)}>   Add+</button>
        </div>
               
    
  ))}
    </div>
  )
}

export default ItemList