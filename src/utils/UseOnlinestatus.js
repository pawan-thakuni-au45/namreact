

import React, { useEffect, useState } from 'react'

function UseOnlinestatus() {

    const [onlineStatus,setOnlineStatus]=useState(true)

    useEffect(()=>{

        window.addEventListener('offline',()=>{
            setOnlineStatus(false)
        })

        window.addEventListener('online',()=>{
            setOnlineStatus(true)

        })
    },[])
  return (
    onlineStatus
  )
}

export default UseOnlinestatus