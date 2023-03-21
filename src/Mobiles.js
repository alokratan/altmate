import React from 'react'
import json from './containers/mobiles.json'
const Mobiles = () => {
  return (<>
     <div className='partition'></div>
    <div className='mainmobilebox'>
<div className="boxleft">
    <h4>
    Latest Mobiles <br/> For You
    </h4>
  <div id='btnformore' className="btn btn-primary">See More</div>

</div>
<div className="boxright">
{
          json.map((data)=>{
            const {name,image,to,upto}=data;
            return(
              <>
              
              <div className="items2" to={to}>
              <img src={image} alt="fe"/>
              <h5>{name}</h5>
              <p>{upto}</p>
              </div>
             
              
              </>
            )
          })
        }
</div>
        
    </div>
     
        </>

  )
}

export default Mobiles