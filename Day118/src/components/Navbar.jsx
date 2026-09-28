import React from 'react'
import { memo } from 'react';

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered...");
    
  return (
    <div>
      Shahnawaz is a {adjective} boy
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
      Hey button
    </div>
  )
}

export default memo(Navbar)
