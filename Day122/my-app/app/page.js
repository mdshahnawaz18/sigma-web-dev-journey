// "use client"
import { log } from "console";
import fs from"fs/promises"
import Navbar from "./component/Navbar";

import React from 'react'
// import { useState } from 'react'

const page = () => {
  // const [count, setcount] = useState(0)
  console.log("I am harry");
  let a = fs.readFile(".gitignore")
  a.then((e)=>{
console.log(e.toString())
  })
  return (
    <div>
      <Navbar/>
      Server Original
      {/* I am Page Component {count} */}
      {/* <button onClick={()=>{
setcount(count+1)
      }}>Click Me</button> */}
    </div>
  )
}

export default page
