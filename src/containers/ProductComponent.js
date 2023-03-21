import React from 'react'
import {useSelector} from "react-redux";
function ProductComponent() {
  const products=useSelector((state)=>state.allProducts.products);
  
  return (
    <div>ProductComponnent
      {/* <h3>{title}</h3> */}
   {
    products.map((product)=>{
      const {id,title,price,category}=product;
      return(<>
      <h3>{title}</h3>
      <h5>{price}</h5>
      </>)
    })
   }
    </div>
  )
}
export default ProductComponent;