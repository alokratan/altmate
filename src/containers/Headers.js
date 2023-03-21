import React from 'react'
import { NavLink } from 'react-router-dom'
import headerapi from './headerapi'
import json from './headerapi.json'
function Headers() {
  let abc=JSON.stringify(headerapi)
  console.log(abc);
  return (
    <div className='headers'>
      
   
        {
          json.map((data)=>{
            const {title,image,to}=data;
            return(
              <>
              
              <NavLink className="items" to={to}>
              <img src={image} alt="fe"/>
              <h5>{title}</h5>
              </NavLink>
             
              
              </>
            )
          })
        }
      
    </div>
  )
}

export default Headers