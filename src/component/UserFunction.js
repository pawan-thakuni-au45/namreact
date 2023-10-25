import React, { useEffect, useState } from 'react'

function UserFunction() {
    const [state,setState]=useState('')

    useEffect(()=>{
        fetchgit()
    },[]);

     const fetchgit=async()=>{
        const data=await fetch("https://api.github.com/users/pawan-thakuni-au45")

        const json=await data.json()

        console.log(json);
        setState(json)
    }
    const {name,login,avatar_url}=state
       
  return (
    <div>
    <img src='https://avatars.githubusercontent.com/u/87055498?v=4'/>
    <h1>{name}</h1>
    <h1>{login}</h1>



      
     

    </div>
  )
}

export default UserFunction