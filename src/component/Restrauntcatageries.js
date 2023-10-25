
import React from 'react'
import ItemList from './ItemList';


function Restrauntcatageries({data}) {
    console.log(data,'k');
  return (
    <div>
   
      <div className='w-6/12 mx-auto my-4 bg-gray-200 flex justify-between font-bold '>
             <span>{data.title}</span>
         <span>click</span>
        
      </div>

      <ItemList items={data.itemCards} />
     
    </div>
  )
}

export default Restrauntcatageries