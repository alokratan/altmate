import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="./logoalt.png" alt="altmate"/><span>ALTMATE</span>

        </div>
        <input type="search" placeholder='Search for products, brands and more...' />
        <div className="logo2">
        <img src="./dpp.jpg" alt="pro"/><span>Siddhartha Gautam</span>
        </div>
    </div>
  )
}

export default Navbar